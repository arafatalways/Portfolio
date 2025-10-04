

import { motion } from "framer-motion"

export default function OrbitText() {
  return (
    <div className="relative flex items-center justify-center h-64">
      {/* Center Text */}
      <h2 className="text-3xl font-bold">My Skills</h2>

      {/* Orbiting Bubble */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-blue-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        style={{
          originX: 2, // কতো দূরে ঘুরবে
          originY: 0,
        }}
      />
    </div>
  )
}

