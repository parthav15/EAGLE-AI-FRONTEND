import { motion } from "framer-motion";
import { Quote, Star, UserCircle2 } from "lucide-react";

const Feature4 = () => {
  const testimonials = [
    {
      name: "Alex Martinez",
      role: "Security Manager",
      company: "TechFort Inc.",
      text: "EAGLE AI transformed our surveillance operations. The real-time alerts have reduced response times by 70% while maintaining 99% accuracy.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "UrbanSecure",
      text: "The AI behavior analysis caught vulnerabilities we didn't even know existed. A game-changer for smart city security.",
      rating: 5
    },
    {
      name: "James O'Connor",
      role: "Facility Director",
      company: "DataHub EU",
      text: "Implementation was seamless and the community support is exceptional. Our security team loves the intuitive dashboard.",
      rating: 4
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#1A202C]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/assets/wave-pattern.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A202C]/0 to-[#1A202C]/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-slate-700">
            <Quote className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">
              Trusted by Security Professionals
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            What Our
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {" "}Users Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-400/40 transition-all"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full">
                  <UserCircle2 className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Hover Quote Icon */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-4 -right-4">
                <Quote className="w-12 h-12 text-cyan-400/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "2K+", label: "Active Installations" },
              { value: "98%", label: "Customer Retention" },
              { value: "24h", label: "Support Response" },
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

export default Feature4;
