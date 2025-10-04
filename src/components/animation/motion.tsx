import { motion } from "framer-motion"

export default function FadeInSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="p-8 bg-white shadow-lg rounded-2xl"
    >
      <h2 className="text-2xl font-bold">Fade In Section</h2>
      <p className="text-gray-600">This section fades in smoothly when visible.</p>
    </motion.div>
  )
}

