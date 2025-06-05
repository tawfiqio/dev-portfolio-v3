import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm [Your Name]
      </motion.h1>
      <p className="mt-4 text-lg md:text-xl">Full Stack Developer | Designer | Tech Enthusiast</p>
    </section>
  )
}
