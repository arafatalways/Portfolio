import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-4xl" />,
    level: "Advanced",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-4xl" />,
    level: "Intermediate",
  },
  {
    name: "React.js",
    icon: <SiReact className="text-blue-400 text-4xl" />,
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-400 text-4xl" />,
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-4xl" />,
    level: "Intermediate",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    level: "Advanced",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-500 text-4xl" />,
    level: "Expert",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-blue-500 text-4xl" />,
    level: "Expert",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    level: "Advanced",
  },
  {
    name: "Git",
    icon: <SiGit className="text-red-500 text-4xl" />,
    level: "Advanced",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-gray-300 text-4xl" />,
    level: "Advanced",
  },
];

export default function MySkills() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-500 pt-6 pb-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-6"
        >
          My <span className="text-indigo-400">Skills</span>
        </motion.h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-14 text-lg">
          As a{" "}
          <span className="text-green-400 font-semibold">
            MERN Stack Developer
          </span>
          , I have expertise in both frontend and backend technologies, building
          powerful, scalable and modern web applications with clean UI and
          secure backend.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 border hover:border-indigo-400 dark:hover:border-primary/40 backdrop-blur-md border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-indigo-500/30"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.level}</p>
              {/* Progress Bar */}
              <div className="mt-3 w-full bg-gray-700 h-2 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      skill.level === "Expert"
                        ? "100%"
                        : skill.level === "Advanced"
                        ? "85%"
                        : "70%",
                  }}
                  transition={{ duration: 1.2 }}
                  className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
