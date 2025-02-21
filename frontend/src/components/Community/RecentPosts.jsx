import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "../../config";

const API_URL = `${BASE_URL}community/posts/`;

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
  }, []);

  useEffect(() => {
    if (token) {
      axios
        .get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data.success) {
            setPosts(response.data.posts);
          }
        })
        .catch((error) => console.error("Error fetching posts:", error))
        .finally(() => setLoading(false));
    }
  }, [token]);

  return (
    <motion.section
      className="bg-gray-900 min-h-screen px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Recent Posts</h2>
          <Link to="/community/new-post">
            <motion.button
              className="px-4 py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-600"
              whileHover={{ scale: 1.05 }}
            >
              New Post
            </motion.button>
          </Link>
        </div>

        {/* Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none text-white bg-gray-800"
          />
          <span className="absolute right-4 top-3 text-gray-400">🔍</span>
        </div>

        {/* Posts List */}
        {loading ? (
          <p className="text-gray-400 text-center">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-400 text-center">No posts found.</p>
        ) : (
          posts.map((post) => (
            <Link key={post.id} to={`/community/posts/${post.id}`}>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow mb-4 flex"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                  <p className="text-gray-400 mt-3">
                    {post.content.length > 200 ? (
                      <span>
                        {post.content.slice(0, 200)}...
                        <Link to={`/community/posts/${post.id}`}>
                          <span className="text-cyan-400 hover:underline">Read more</span>
                        </Link>
                      </span>
                    ) : (
                      post.content
                    )}
                  </p>

                  {/* Author & Date */}
                  <div className="mt-4 text-sm text-gray-500">
                    <p><strong>Author:</strong> {post.user}</p>
                    <p><strong>Created:</strong> {new Date(post.created_at).toLocaleString()}</p>
                  </div>
                </div>
                {/* Image */}
                {post.image && (
                  <img
                    src={`${BASE_URL}${post.image}`}
                    alt="Post Image"
                    className="w-56 h-56 object-cover rounded-lg ml-4"
                  />
                )}
              </motion.div>
            </Link>
          ))
        )}
      </div>
    </motion.section>
  );
}
