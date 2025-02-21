import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#1A202C]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/circuit-board.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A202C]/0 to-[#1A202C]/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-slate-700">
              <Send className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">
                Get in Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
              Contact
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}Our Team
              </span>
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-slate-300 placeholder-slate-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-slate-300 placeholder-slate-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-slate-300 placeholder-slate-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-slate-300 placeholder-slate-500 transition-all"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
              >
                <Send className="w-5 h-5 text-white" />
                <span className="text-lg font-semibold text-white">
                  Send Message
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Email</p>
                    <p className="text-cyan-400">support@eagle-ai.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-lg">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Phone</p>
                    <p className="text-cyan-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Headquarters</p>
                    <p className="text-cyan-400">
                      123 Security Lane<br />
                      Tech Valley, CA 94086
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Visualization */}
            <div className="relative h-64 rounded-xl overflow-hidden border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-600/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <span className="text-slate-300">Security Operations Center</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
