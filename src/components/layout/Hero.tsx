import TypingText from "@/components/animation/TypingText";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Hero() {
  const goToResume = () => {
    window.open(
      "https://drive.google.com/file/d/1WrK9ANOD8Q7IJIrXK0mEgNFbV0lpNQnP/view?usp=sharing"
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
  return (
    <section className="w-fullbg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-500 pt-6 pb-12 px-6 md:px-12 lg:px-20">
      {/* Typing Animation Text */}
      <div className="mb-5 text-center">
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#8ec5ff] leading-tight">
            Yeasin Arafat{" "}
            <span className="block text-lg font-medium text-indigo-300 mt-2">
              Frontend Web Developer
            </span>
          </h1>

          <p className="dark:text-white/80 leading-7 text-justify md:text-left mb-8">
            A passionate{" "}
            <span className="text-indigo-400 font-semibold">
              Frontend Web Developer
            </span>{" "}
            who loves building modern, responsive, and user-friendly web
            applications. I specialize in both
            <strong> frontend</strong> (React, TailwindCSS) development —
            turning ideas into beautiful digital experiences.
          </p>

          <div className="flex gap-5">
            <button
              onClick={goToResume}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-6 rounded-md text-white font-semibold shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
            >
              Resume
            </button>
            <div className="flex gap-3 py-3.5 ">
              <button onClick={goToGithub}>
                <FaGithubSquare className="cursor-pointer" />
              </button>
              <button onClick={goToFacebook}>
                <FaFacebook className="cursor-pointer" />
              </button>
              <button onClick={goToLinkedin}>
                <IoLogoLinkedin className="cursor-pointer" />
              </button>
            </div>
          </div>
        </div>

        {/* -------- Right Image Section -------- */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative group">
            <img
              src="/images/fahad.jpg"
              alt="Fahad Ahmad"
              className="w-64 sm:w-72 md:w-80 lg:w-[380px] h-auto rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
