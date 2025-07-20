import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center h-16 px-4 md:px-8 max-w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <h1 className="text-xl font-bold text-white">NBH</h1>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-white text-lg flex-1 justify-center">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Social icons desktop */}
        <div className="hidden md:flex space-x-6 text-white text-2xl flex-shrink-0">
          <a
            href="https://linkedin.com/in/nabil-basri-hamdaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/NabilBasriH"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
        </div>

        {/* Hamburger button mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pt-2 pb-4 space-y-1 text-white">
          <Link
            to="/"
            className="block py-2 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block py-2 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Social icons mobile */}
          <div className="flex space-x-6 mt-4 justify-center text-xl">
            <a
              href="https://linkedin.com/in/nabil-basri-hamdaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NabilBasriH"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
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