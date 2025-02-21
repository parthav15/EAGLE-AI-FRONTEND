import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/Footer';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all fields!');
      return;
    }

    // Here you can integrate your feedback submission logic (e.g., API call)
    console.log('Feedback submitted:', formData);
    toast.success('Thank you for your feedback!');

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex-grow flex items-center justify-center p-8 mt-16">
        <motion.div
          className="w-full max-w-lg bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            We Value Your Feedback
          </h2>
          <p className="mb-4 text-gray-300">
            Let us know your thoughts so we can improve our services.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-4 pr-4 py-3 bg-gray-700/20 border border-gray-600 rounded-lg focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-white"
              />
            </div>
            <div className="group relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-4 pr-4 py-3 bg-gray-700/20 border border-gray-600 rounded-lg focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-white"
              />
            </div>
            <div className="group relative">
              <textarea
                name="message"
                placeholder="Your Feedback"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full pl-4 pr-4 py-3 bg-gray-700/20 border border-gray-600 rounded-lg focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-white resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-white/20 border border-white/30 rounded-lg hover:border-white/50 transition-all text-white font-semibold"
            >
              Submit Feedback
            </motion.button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
