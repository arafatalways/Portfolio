import TypingText from "@/components/animation/TypingText";

function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-6 pb-12 px-6 md:px-12 lg:px-20">
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
              MERN Stack Web Developer
            </span>
          </h1>

          <p className="text-white/80 leading-7 text-justify md:text-left mb-8">
            A passionate <span className="text-indigo-400 font-semibold">MERN Stack Web Developer</span> who loves building 
            modern, responsive, and user-friendly web applications. I specialize in both 
            <strong> frontend</strong> (React, TailwindCSS) and 
            <strong> backend</strong> (Node.js, Express, MongoDB) development — 
            turning ideas into beautiful digital experiences.
          </p>

          <button className="bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-6 rounded-md text-white font-semibold shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300">
            Say Hello!
          </button>
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
