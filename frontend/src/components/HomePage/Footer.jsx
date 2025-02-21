import { motion } from "framer-motion";
import { Shield, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-800 bg-[#1A202C] backdrop-blur-md">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/assets/circuit-pattern.svg')] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold text-slate-100">
                EAGLE<span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Next-generation AI surveillance solutions for a safer tomorrow.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-slate-100 font-semibold mb-2">Solutions</h3>
            <ul className="space-y-2">
              {['Smart Surveillance', 'Face Recognition', 'IoT Integration', 'Behavior Analysis'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-slate-100 font-semibold mb-2">Stay Updated</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-slate-800/40 rounded-lg border border-slate-700 text-slate-300 placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-medium"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="text-slate-100 font-semibold mb-2">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="w-5 h-5" />, link: "#" },
                { icon: <Linkedin className="w-5 h-5" />, link: "#" },
                { icon: <Github className="w-5 h-5" />, link: "#" },
                { icon: <Mail className="w-5 h-5" />, link: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ y: -2 }}
                  className="p-2 rounded-lg bg-slate-800/40 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
                  style={{ pointerEvents: "auto" }} // Fix pointer events issue
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2024 EAGLE AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                style={{ pointerEvents: "auto" }} // Fix pointer events issue
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

