import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const navClass = ({ isActive }) =>
    `transition-colors ${isActive ? 'text-cyan-300' : 'text-slate-100 hover:text-cyan-300'}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-950/70 backdrop-blur-md">
      <div className="section-shell h-16 flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <Link to="/">
            <h1 className="text-lg sm:text-xl font-bold tracking-[0.18em] text-cyan-200">NBH</h1>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-8 text-sm tracking-wide uppercase">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/projects" className={navClass}>Projects</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xl flex-shrink-0">
          <a
            href="https://linkedin.com/in/nabil-basri-hamdaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/NabilBasriH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-cyan-300 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-slate-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-700/50 bg-slate-950/95 px-6 py-4 space-y-2 text-slate-100">
          <NavLink
            to="/"
            className={navClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={navClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={navClass}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={navClass}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>

          <div className="flex gap-6 mt-4 justify-center text-xl">
            <a
              href="https://linkedin.com/in/nabil-basri-hamdaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NabilBasriH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
