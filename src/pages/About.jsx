import { motion } from 'framer-motion';

const items = [
  {
    title: 'What I Build',
    text: 'Native Android applications focused on performance, usability, and maintainable architecture.'
  },
  {
    title: 'How I Work',
    text: 'I start with product intent, design reusable components, and iterate quickly with clear technical tradeoffs.'
  },
  {
    title: 'Tech Stack',
    text: 'Kotlin, Jetpack Compose, XML Views, Android Studio, Git, REST integrations, and modern Android patterns.'
  }
];

export default function About() {
  return (
    <section className="page-section">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">About</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Building polished Android products</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              className="glass-panel rounded-2xl p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-lime-300">{item.title}</h3>
              <p className="mt-3 text-slate-300 leading-relaxed">{item.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.article
          className="glass-panel rounded-3xl p-6 sm:p-8 mt-6 border border-cyan-300/25"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Certification</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-100">
            Jetpack Compose - Complete Course from Scratch (2023)
          </h3>
          <p className="mt-3 text-slate-300">
            Certificate of completion for AristiDevs&apos; AppCademy Jetpack Compose course.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${import.meta.env.BASE_URL}certificates/jetpack-compose-appcademy-certificate.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-colors"
            >
              View Certificate (PDF)
            </a>
            <a
              href="https://www.appcademy.dev/jetpack-compose-curso-definitivo-desde-0-2023"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full border border-cyan-300/40 text-slate-100 hover:border-cyan-300 hover:text-cyan-300 transition-colors"
            >
              View Course
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
