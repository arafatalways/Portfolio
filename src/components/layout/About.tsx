import FloatingIcon from "@/components/animation/FloatingIcon";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white pt-6 pb-12 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-4xl sm:text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-center">
          About Me
        </h2>
        <FloatingIcon />
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-16 w-full max-w-6xl">

        {/* Left Side - Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full lg:w-1/2"
        >
          <div className="group relative w-full overflow-hidden rounded-[4px] shadow-2xl">
            <img
              src="/images/b-1/Homepage - Laptop/Image.svg"
              alt="Yeasin Arafat"
              className="w-full h-auto rounded-[4px] transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Floating Gradient Overlay */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 rounded-full blur-3xl animate-animate-float"></div>
          </div>
        </motion.div>

        {/* Right Side - Text & Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <p className="text-lg sm:text-lg leading-8 text-gray-300">
            <span className="text-[#12F7D6] font-bold text-2xl block mb-2">Hello! 👋</span>
            My name is <strong>Yeasin Arafat</strong>, a passionate MERN Stack Web Developer dedicated to building beautiful and functional websites. 
            I specialize in <span className="text-indigo-400 font-semibold">React, Node.js, Express, MongoDB</span> and modern frontend technologies.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-7">
            I love crafting smooth, responsive, and visually appealing web experiences. Always learning, experimenting, and pushing boundaries to create impactful digital products. When I'm not coding, I explore photography and creative projects.
          </p>

          {/* Skill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"].map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-center py-2 rounded-xl shadow-lg cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* Call to Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-6 rounded-xl text-lg font-bold shadow-lg hover:shadow-pink-500/50 transition-all duration-300 self-start"
          >
            Say Hello!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
