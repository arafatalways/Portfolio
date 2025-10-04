import { motion } from "framer-motion"

export default function FloatingIcon() {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-25 h-25  rounded-full flex items-center justify-center"
    >
      <img className="rounded-full" src="/public/images/fahad-3.jpg" alt="Icon" />
    </motion.div>
  )
}
