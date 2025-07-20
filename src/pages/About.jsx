// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="flex-1 flex items-center justify-center px-4">
      <motion.div
        className="max-w-xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-base md:text-lg leading-relaxed">
          I'm a mobile app developer with strong experience in Kotlin, Jetpack Compose, Views and Android Studio.<br />
          I create high-quality native Android applications that are fast, intuitive and visually appealing.
        </p>
      </motion.div>
    </section>
  );
}