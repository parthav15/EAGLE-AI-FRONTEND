import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from '../components/HomePage/Navbar';
import Footer from '../components/HomePage/Footer';
import { 
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

const ContactusPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    // Basic form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill out all fields!');
      return;
    }

    // Replace this with your actual submission logic (e.g., API call)
    console.log('Contact form submitted:', formData);
    toast.success('Your message has been sent!');

    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
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

      <div className="flex-grow flex flex-col lg:flex-row items-center justify-center p-8 space-y-8 lg:space-y-0 lg:space-x-12 mt-16">
        {/* Contact Form */}
        <motion.div
          className="w-full lg:w-1/2 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="mb-6 text-gray-300">
            We'd love to hear from you. Please fill out the form below and we'll get back to you soon.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700/20 border border-gray-600 rounded-lg focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-white"
              />
            </div>
            <div className="group relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700/20 border border-gray-600 rounded-lg focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-white"
              />
            </div>
            <div className="group relative">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-700/20 border border-gray-600 rounded-lg focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-white"
              />
            </div>
            <div className="group relative">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 bg-gray-700/20 border border-gray-600 rounded-lg focus:border-white focus:ring-1 focus:ring-white/20 transition-all text-white resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-white/20 border border-white/30 rounded-lg hover:border-white/50 transition-all text-white font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Company Info & Image */}
        <motion.div
          className="w-full lg:w-1/2 p-6 flex flex-col items-center space-y-4"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-700/20 rounded-lg p-4 space-y-2 text-gray-300">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">Contact Info</h3>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-6 h-6 text-cyan-400" />
              <p>202, 2nd Floor, Plot 51, Sector 44, Gurgaon, Haryana 122002</p>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-6 h-6 text-cyan-400" />
              <p>Phone: +91 981 111 7777</p>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
              <p>Email: info@crimeradarai.com</p>
            </div>
          </div>
          <div className="bg-gray-700/20 rounded-lg p-4 space-y-2 text-gray-300">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">Business Hours</h3>
            <p>Mon - Fri, 10:00 AM - 6:00 PM</p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactusPage;

