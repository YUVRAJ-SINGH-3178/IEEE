import { Link } from 'react-router-dom';

export default function Footer() {
   return (
      <footer className="bg-ieee-deep text-ieee-light pt-8 pb-4 px-8 md:px-16 border-t border-ieee-light/10 mt-auto z-10 relative">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-md">
               <div className="flex items-center gap-4 mb-4 transition-transform duration-300 hover:scale-105">
                  <img
                     src="/ieee-main-logo.png"
                     alt="IEEE SRM AP Logo"
                     className="h-10 md:h-12 w-auto object-contain"
                  />
               </div>
               <p className="text-ieee-light/60 font-sans text-sm leading-relaxed">
                  Empowering the innovators of tomorrow. Join our community to access exclusive resources, workshops, and global networking opportunities.
               </p>
            </div>

            <div className="flex gap-8 md:gap-16 font-sans text-sm">
               <div className="flex flex-col gap-2">
                  <span className="text-ieee-cyan font-bold tracking-widest uppercase text-xs mb-1">Explore</span>
                  <Link to="/about" className="text-ieee-light/70 hover:text-white transition-colors">About Us</Link>
                  <Link to="/executive-board" className="text-ieee-light/70 hover:text-white transition-colors">Executive Board</Link>
                  <Link to="/chapters" className="text-ieee-light/70 hover:text-white transition-colors">Chapters</Link>
                  <Link to="/achievements" className="text-ieee-light/70 hover:text-white transition-colors">Achievements</Link>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-ieee-cyan font-bold tracking-widest uppercase text-xs mb-1">Connect</span>
                  <Link to="/join" className="text-ieee-light/70 hover:text-white transition-colors">Join IEEE</Link>
                  <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-ieee-light/70 hover:text-white transition-colors">IEEE Global</a>
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-ieee-light/10 flex flex-col md:flex-row justify-between opacity-50 text-xs font-sans">
            <span>&copy; {new Date().getFullYear()} IEEE Student Branch. All rights reserved.</span>
            <div className="flex gap-6 mt-4 md:mt-0">
               <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
               <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
         </div>
      </footer>
   );
}
