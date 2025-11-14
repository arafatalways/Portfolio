import { useState, useEffect } from "react";
import TypingText from "@/components/animation/TypingText";
import { motion } from "framer-motion";
import { FaFacebook, FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Hero() {
  const goToResume = () => {
    window.open(
      "https://drive.google.com/file/d/1gRVk2p8SN7stVNyPgE-wNTZkMPAb7C4M/view?usp=sharing"
    );
  };
  const goToFacebook = () => {
    window.open("https://www.facebook.com/mo.yeasinarafat.1");
  };
  const goToGithub = () => {
    window.open("https://github.com/arafatalways");
  };
  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/yeasin-arafat-02a116372/");
  };

  // 🔠 Animated typing text logic for "Frontend Web Developer"
  const text = "Frontend Web Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 120;
    const timer = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 2000);
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-500 pt-10 pb-16 px-6 md:px-12 lg:px-20">
      {/* === Top Typing Animation (old one) === */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-indigo-300">
          <TypingText />
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* -------- Left Text Section -------- */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-3">
            Hello! I’m
          </h3>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-600 dark:text-[#8ec5ff] leading-tight">
            Yeasin Arafat
            {/* === New Typing animation for "Frontend Web Developer" === */}
            <motion.span
              className="block text-lg sm:text-2xl font-semibold text-indigo-400 mt-3 min-h-[40px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayedText}
              <motion.span className="inline-block w-[2px] h-6 bg-indigo-400 ml-1 animate-pulse"></motion.span>
            </motion.span>
          </h1>

          <p className="dark:text-white/80 leading-7 text-justify md:text-left mb-8">
            A passionate{" "}
            <span className="text-[#12F7D6] font-semibold">
              Frontend Web Developer
            </span>{" "}
            who loves building modern, responsive, and user-friendly web
            applications. I specialize in both <strong>frontend</strong> (React,
            TailwindCSS) development — turning ideas into beautiful digital
            experiences.
          </p>

          <div className="flex gap-5">
            <button
              onClick={goToResume}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-6 rounded-md text-white font-semibold shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
            >
              Resume
            </button>
            <div className="flex gap-4 py-3.5 text-2xl text-indigo-400">
              <button
                onClick={goToGithub}
                className="hover:text-white transition"
              >
                <FaGithubSquare />
              </button>
              <button
                onClick={goToFacebook}
                className="hover:text-blue-400 transition"
              >
                <FaFacebook />
              </button>
              <button
                onClick={goToLinkedin}
                className="hover:text-sky-400 transition"
              >
                <IoLogoLinkedin />
              </button>
            </div>
          </div>
        </div>

        {/* -------- Right Image Section -------- */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative group">
            <motion.img
              src="/images/fahad.jpg"
              alt="Yeasin Arafat"
              className="w-64 sm:w-72 md:w-80 lg:w-[380px] h-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
