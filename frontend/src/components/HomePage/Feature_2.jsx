import { motion } from "framer-motion";
import { BrainCircuit, Clock, Shield, PlugZap, BarChart, Database } from "lucide-react";

const Feature2 = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "AI-Powered Precision",
      description: "Deep learning algorithms with 99.8% threat detection accuracy"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Autonomous Monitoring",
      description: "Continuous surveillance without human fatigue limitations"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Military-Grade Security",
      description: "End-to-end encryption and secure cloud infrastructure"
    },
    {
      icon: <PlugZap className="w-8 h-8" />,
      title: "Smart IoT Integration",
      description: "Seamless connectivity with existing security ecosystems"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Instant insights and predictive threat modeling"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description: "Comprehensive threat intelligence database"
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#1A202C]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute inset-0 bg-[url('/assets/hexagon-pattern.svg')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A202C]/0 to-[#1A202C]/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[#1A202C]/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#1A202C]/70">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">
              Trusted by Security Experts
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            Why Industry Leaders Choose
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {" "}EAGLE AI
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Discover the competitive edge that makes our AI surveillance system
            the preferred choice for enterprise security solutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-6 bg-[#1A202C]/30 backdrop-blur-sm rounded-2xl border border-[#1A202C]/70 hover:border-cyan-400/40 transition-all"
            >
              <div className="mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-600/20 w-fit">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
              
              {/* Hover Effect Line */}
              <div className="mt-4 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 bg-[#1A202C]/40 backdrop-blur-sm rounded-2xl border border-[#1A202C]/70"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Protected Facilities" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "24/7", label: "Support Coverage" },
              { value: "0.01%", label: "False Alarms" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature2;
