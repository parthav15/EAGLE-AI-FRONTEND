import { motion } from "framer-motion";
import { Play, ShieldCheck, Zap } from "lucide-react";
import video from '../../assets/surveillance-demo.mp4'

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-40"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-slate-700"
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">
              AI-Powered Surveillance
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight">
            Next-Gen Security
            <br />
            <span className="text-slate-100">Reimagined</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Revolutionizing surveillance with AI-powered threat detection, real-time 
            analytics, and smart security integration. Protect what matters most 
            with autonomous monitoring systems.
          </p>

          {/* CTAs */}
          <div className="flex justify-center items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
            >
              <ShieldCheck className="w-6 h-6 text-white" />
              <span className="text-lg font-semibold text-white">
                Get Started
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 group"
            >
              <div className="p-3 rounded-full bg-slate-800/50 border border-slate-700 group-hover:border-cyan-400 transition-colors">
                <Play className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                Watch Demo
              </span>
            </motion.button>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          >
            {[
              { value: "24/7", label: "Real-Time Monitoring" },
              { value: "99.9%", label: "Detection Accuracy" },
              { value: "1.2s", label: "Response Time" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/assets/grid-pattern.svg')] opacity-10" />
    </div>
  );
};

export default HeroSection;