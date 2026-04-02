import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Intro', path: '/intro' },
    { name: 'About', path: '/about' },
    { name: 'Board', path: '/executive-board' },
    { name: 'Chapters', path: '/chapters' },
    { name: 'Events', path: '/events' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Join', path: 'https://www.ieee.org/', isExternal: true },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-6 mix-blend-difference text-ieee-light"
      >
        <div className="font-display font-bold text-xl tracking-wider relative z-50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>IEEE SRM</Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-sm font-sans uppercase tracking-[0.1em]">
          {navLinks.map((link) => {
            const isExternal = link.isExternal;
            const content = (
              <>
                <span className="relative z-10">{link.name}</span>
                {!isExternal && location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-ieee-cyan"
                  />
                )}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ieee-cyan transform scale-x-0 origin-right transition-transform group-hover:scale-x-100 group-hover:origin-left" />
              </>
            );

            if (isExternal) {
              return (
                <a 
                  key={link.path} 
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link 
                key={link.path} 
                to={link.path}
                className="relative group overflow-hidden"
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden relative z-50 text-ieee-light"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-ieee-deep text-ieee-light flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => {
                const isExternal = link.isExternal;
                const content = (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.05), duration: 0.5 }}
                    className="text-4xl font-display font-medium"
                  >
                    {link.name}
                  </motion.span>
                );

                if (isExternal) {
                  return (
                    <a 
                      key={link.path} 
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={location.pathname === link.path ? 'text-ieee-cyan text-4xl' : ''}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
