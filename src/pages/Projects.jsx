import { motion } from 'framer-motion';
import { FaAndroid } from 'react-icons/fa';

const projects = [
  {
    title: 'Juice App',
    description: 'A shopping-style app that lets users explore a catalog of juices in a fast, mobile-first experience.',
    image: `${import.meta.env.BASE_URL}images/juice_app.png`,
    link: 'https://github.com/NabilBasriH/Juice-App',
    tech: [
      { type: 'icon', element: <FaAndroid title="Android" className="text-lime-400" /> },
      { type: 'image', src: `${import.meta.env.BASE_URL}logos/compose.png`, alt: 'Jetpack Compose' }
    ],
    impact: 'Compose UI architecture and reusable components'
  },
  {
    title: 'Climat',
    description: 'Weather app showing current conditions and nearby cities based on device location.',
    image: `${import.meta.env.BASE_URL}images/climat.png`,
    link: 'https://github.com/NabilBasriH/Climat-App',
    tech: [
      { type: 'icon', element: <FaAndroid title="Android" className="text-lime-400" /> },
      { type: 'image', src: `${import.meta.env.BASE_URL}logos/xml.png`, alt: 'XML Views' }
    ],
    impact: 'Location-based weather flow and clean XML UI structure'
  }
];

export default function Projects() {
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
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Projects</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Selected Android work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-600/40"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="p-6 border-b border-slate-700/40 flex items-center gap-4">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-20 h-20 object-cover rounded-2xl border border-slate-600/50"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mt-1">Open Project</p>
                  </div>
                </div>
              </a>
              <div className="p-6">
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
                <p className="mt-4 text-sm text-lime-300">{project.impact}</p>
                <div className="mt-5 flex items-center gap-4">
                  {project.tech.map((tech, i) =>
                    tech.type === 'icon' ? (
                      <span key={i} className="text-2xl">{tech.element}</span>
                    ) : (
                      <img
                        key={i}
                        src={tech.src}
                        alt={tech.alt}
                        title={tech.alt}
                        className="w-6 h-6 object-contain"
                      />
                    )
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
