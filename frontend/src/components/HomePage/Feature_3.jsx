import { motion } from "framer-motion";
import { MessageCircle, ThumbsUp, Users, PenSquare, Reply } from "lucide-react";

const Feature3 = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#1A202C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Community Demo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Discussion Post Card */}
            <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-lg">
              {/* Post Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
                <div>
                  <h3 className="font-semibold text-slate-100">SecurityPro_23</h3>
                  <p className="text-sm text-slate-400">Posted 2h ago</p>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-slate-300 mb-6">
                Just implemented EAGLE AI in our data center - reduced false alarms by 92%! 
                The behavior analysis module is 🤯
              </p>

              {/* Interactions */}
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors">
                  <ThumbsUp className="w-5 h-5" />
                  <span>248</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>45</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors">
                  <Reply className="w-5 h-5" />
                </button>
              </div>

              {/* Comment Preview */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-slate-600"></div>
                  <div className="text-slate-300">
                    <span className="font-medium">SecureOpsTeam</span>: "The integration with our existing cameras was seamless!"
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Members Counter */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="absolute -right-8 -top-8 bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-700"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-xl font-bold text-slate-100">15K+</div>
                  <div className="text-sm text-slate-400">Active Members</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-slate-700">
              <MessageCircle className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">
                Collaborative Security Network
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
              Join Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}Security Community
              </span>
            </h2>

            <p className="text-lg text-slate-300">
              Connect with security professionals worldwide. Share best practices, 
              troubleshoot challenges, and stay updated with the latest in AI surveillance.
            </p>

            <div className="grid gap-6">
              {[
                {
                  icon: <PenSquare className="w-6 h-6" />,
                  title: "Create Posts",
                  description: "Share experiences, ask questions, or start discussions"
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "Real-Time Comments",
                  description: "Engage in threaded conversations with tagging support"
                },
                {
                  icon: <ThumbsUp className="w-6 h-6" />,
                  title: "Reactions & Voting",
                  description: "Like posts and mark helpful solutions"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Expert Network",
                  description: "Connect with security professionals and AI experts"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-600/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
