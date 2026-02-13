import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <section className="page-section">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-3">Android Developer</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Nabil Basri
              <span className="block text-lime-300">Shipping Native Apps</span>
            </h2>
            <p className="mt-5 text-slate-300 max-w-xl text-base sm:text-lg leading-relaxed">
              I build fast, reliable Android experiences with Kotlin and Jetpack Compose, from polished UI systems
              to production-ready app architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-colors"
              >
                Download CV
              </a>
              <a
                href="https://github.com/NabilBasriH"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-cyan-300/40 text-slate-100 hover:border-cyan-300 hover:text-cyan-300 transition-colors"
              >
                View GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden accent-ring"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <motion.div
              className="absolute -top-10 -right-12 w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Featured Build</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-100">Juice App</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Compose-first mobile product with a clean browsing flow, reusable UI patterns and smooth interactions.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/juice_app.png`}
              alt="Juice App preview"
              className="mt-6 w-28 h-28 object-cover rounded-2xl border border-slate-600/60"
            />
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-cyan-200">Kotlin</span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-cyan-200">Compose</span>
              <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-cyan-200">Material 3</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
