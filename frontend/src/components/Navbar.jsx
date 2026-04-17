import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Board', path: '/executive-board' },
    { name: 'Chapters', path: '/chapters' },
    { name: 'Achievements', path: '/achievements' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${(isScrolled || location.pathname !== '/')
          ? 'bg-ieee-deep/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="relative z-50 flex items-center gap-4">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 group">
            <img
              src="/ieee-horizontal-logo.png"
              alt="IEEE SRM AP Logo"
              className="h-8 md:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden lg:flex items-center gap-8 xl:gap-12 text-[10px] xl:text-xs font-sans uppercase tracking-[0.2em] font-bold transition-colors duration-300 text-white`}>
          <div className="flex gap-6 xl:gap-8 items-center">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group py-1"
                >
                  <span className="relative z-10">{link.name}</span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-ieee-cyan"
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-ieee-cyan transform scale-x-0 origin-right transition-transform group-hover:scale-x-100 group-hover:origin-left" />
                </Link>
              );
            })}
          </div>

          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={`border px-6 py-2 rounded-full transition-all duration-300 tracking-[0.2em] border-white/40 hover:bg-white hover:text-ieee-deep`}
          >
            JOIN
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`lg:hidden relative z-50 transition-colors duration-300 text-white`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-ieee-deep text-white flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => {
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.5 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl font-display font-medium block py-2 transition-colors duration-300 ${location.pathname === link.path ? 'text-ieee-cyan' : 'hover:text-ieee-cyan'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (navLinks.length * 0.05), duration: 0.5 }}
                className="mt-8"
              >
                <a
                  href="https://www.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-ieee-deep px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] inline-block"
                >
                  JOIN IEEE
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
