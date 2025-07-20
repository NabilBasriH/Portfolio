// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="flex-1 flex items-center justify-center px-4">
      <motion.div 
        className="text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hi, I'm Nabil Basri Hamdaoui</h2>
        <p className="text-base md:text-lg">A mobile app developer specializing in Kotlin, Jetpack Compose, and Android Studio.</p>
        <a 
          href="/cv.pdf" 
          download
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full max-w-xs mx-auto md:w-auto"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}