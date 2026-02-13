import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const links = [
  {
    label: 'Email',
    value: 'nbasri4@gmail.com',
    href: 'mailto:nbasri4@gmail.com',
    icon: <FaEnvelope className="text-cyan-300" />
  },
  {
    label: 'LinkedIn',
    value: 'nabil-basri-hamdaoui',
    href: 'https://linkedin.com/in/nabil-basri-hamdaoui',
    icon: <FaLinkedin className="text-cyan-300" />
  },
  {
    label: 'GitHub',
    value: 'NabilBasriH',
    href: 'https://github.com/NabilBasriH',
    icon: <FaGithub className="text-cyan-300" />
  }
];

export default function Contact() {
  return (
    <section className="w-full py-10 sm:py-14">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Contact</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Let&apos;s build something useful</h2>
        </motion.div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8">
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            I&apos;m available for Android development opportunities and collaboration on mobile products.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 hover:border-cyan-300/60 transition-colors"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <div className="text-xl">{link.icon}</div>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-slate-400">{link.label}</p>
                <p className="mt-1 font-medium text-slate-100 break-all">{link.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
