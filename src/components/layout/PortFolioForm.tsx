import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className=" relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-500 px-6 py-20">
      {/* background glow effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-white"
      >
        <h2 className="text-4xl dark:text-white text-black font-bold text-center mb-4">
          Get in <span className="text-indigo-400">Touch</span>
        </h2>
        <p className="dark:text-gray-300 text-black text-center mb-10">
          Have a project idea, collaboration or just want to say hello? Drop a
          message below and I’ll get back to you soon! 💬
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-black dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-gray-700 dark:border-white/20 rounded-xl px-4 py-3 text-black dark:text-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-black dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-gray-700 dark:border-white/20 rounded-xl px-4 py-3 text-black dark:text-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-black dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-white/5 border border-gray-700 dark:border-white/20 rounded-xl px-4 py-3 text-black dark:text-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
