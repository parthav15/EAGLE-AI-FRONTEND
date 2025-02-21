import { motion } from "framer-motion";
import { CircuitBoard, Cpu, ShieldHalf } from "lucide-react";

const Feature1 = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#1A202C]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/dot-grid.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A202C]/0 to-[#1A202C]/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#1A202C]/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-[#1A202C]/70">
              <CircuitBoard className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">
                AI-Powered Innovation
              </span>
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
              Transforming Security Through 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {" "}Advanced AI
              </span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8">
              EAGLE AI redefines modern surveillance with cutting-edge artificial intelligence, 
              offering unprecedented threat detection capabilities and real-time response systems. 
              Our solution combines deep learning algorithms with IoT integration for comprehensive 
              security management.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {[
                { icon: <Cpu className="w-6 h-6" />, text: "Neural Network Processing" },
                { icon: <ShieldHalf className="w-6 h-6" />, text: "Military-grade Encryption" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-[#1A202C]/30 backdrop-blur-sm rounded-xl border border-[#1A202C]/70"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-600/20">
                    {feature.icon}
                  </div>
                  <span className="text-slate-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Project Highlight */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-full min-h-[400px]"
          >
            {/* Floating Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-3xl backdrop-blur-xl border border-[#1A202C]/50 shadow-2xl shadow-cyan-500/10">
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-3xl border border-[#1A202C]/20 pointer-events-none"></div>
              
              {/* Animated Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-600/10 rounded-full blur-xl"></div>

              {/* Project Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'mirror'
                  }}
                  className="text-center"
                >
                  <div className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    EAGLE
                  </div>
                  <div className="text-5xl font-bold mt-2 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                    AI
                  </div>
                </motion.div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    initial={{
                      opacity: 0,
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50
                    }}
                    animate={{
                      opacity: [0, 0.4, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
