import { motion } from "framer-motion";

export default function CommunityHero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 min-h-[50vh] flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl text-center mt-20"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome To <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Eagle AI
          </span>{" "}
          Community Forum!
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-300 mb-6"
        >
          This is a community forum for people who are passionate about using
          AI and Machine Learning to make a positive impact in the world.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

