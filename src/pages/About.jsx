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
      </div>
    </section>
  );
}
