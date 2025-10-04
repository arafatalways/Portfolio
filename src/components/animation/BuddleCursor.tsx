import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Bubble {
  id: number
  x: number
  y: number
}

export default function BubbleCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      const newBubble = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setBubbles((prev) => [...prev, newBubble])

      // ১ সেকেন্ড পর bubble মুছে ফেলো
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id))
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-blue-500 pointer-events-none z-50"
        animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {/* Bubble trail */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="fixed w-4 h-4 rounded-full bg-blue-400 opacity-70 pointer-events-none z-40"
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ top: bubble.y - 8, left: bubble.x - 8 }}
        />
      ))}
    </>
  )
}
