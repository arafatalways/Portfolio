import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "A professional business website frontend made with React and Tailwind CSS. Focused on branding, responsiveness, and an easy-to-navigate user interface.",
    image: "/images/pro-4.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A fully responsive eCommerce frontend built with React and Tailwind CSS. Includes product listings, categories, cart design, and modern UI animations for better user engagement.",
    image: "/images/pro-5.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "This is a simple and modern frontend project. It has a clean design, fast performance, and works well on all devices. Built with React, Tailwind CSS, and JavaScript.",
    image: "/images/p-2.png",
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "A responsive and user-friendly frontend project built using modern web technologies like HTML, CSS, JavaScript, React, and Tailwind CSS.",
    image: "/images/p-3.png",
  },
];

function Work() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-500 py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-6"
      >
        My <span className="text-[#8ec5ff]">Works</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-500 text-center text-lg mb-1"
      >
        Here are some of the projects I've worked on:
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-500 text-center text-lg mb-12"
      >
        I take pride in my work and always strive for excellence.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            className="bg-gray-800 rounded-[4px] border hover:border-black dark:hover:border-primary/40 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-[4px]"
            />
            <div className="p-4">
              <h4 className="text-lg font-bold text-[#8ec5ff] mb-2">
                {project.title}
              </h4>
              <p className="text-gray-300 text-sm leading-6">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Work;
