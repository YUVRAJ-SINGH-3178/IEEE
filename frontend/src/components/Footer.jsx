import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ieee-deep text-ieee-light pt-24 pb-12 px-8 md:px-16 border-t border-ieee-light/10 mt-auto z-10 relative">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
             <h2 className="text-3xl font-display font-medium tracking-wide mb-6">
                IEEE Student Branch
             </h2>
             <p className="text-ieee-light/60 font-sans leading-relaxed">
                Empowering the innovators of tomorrow. Join our community to access exclusive resources, workshops, and global networking opportunities.
             </p>
          </div>
          
          <div className="flex gap-16 font-sans">
             <div className="flex flex-col gap-4">
                <span className="text-ieee-cyan font-bold tracking-widest uppercase text-sm mb-2">Explore</span>
                <Link to="/about" className="text-ieee-light/70 hover:text-white transition-colors">About Us</Link>
                <Link to="/executive-board" className="text-ieee-light/70 hover:text-white transition-colors">Executive Board</Link>
                <Link to="/chapters" className="text-ieee-light/70 hover:text-white transition-colors">Chapters</Link>
                <Link to="/achievements" className="text-ieee-light/70 hover:text-white transition-colors">Achievements</Link>
             </div>
             <div className="flex flex-col gap-4">
                <span className="text-ieee-cyan font-bold tracking-widest uppercase text-sm mb-2">Engage</span>
                <Link to="/events" className="text-ieee-light/70 hover:text-white transition-colors">Events & Speakers</Link>
                <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-ieee-light/70 hover:text-white transition-colors">Become a Member</a>
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-ieee-light/10 flex flex-col md:flex-row justify-between opacity-50 text-sm font-sans">
          <span>&copy; {new Date().getFullYear()} IEEE Student Branch. All rights reserved.</span>
          <div className="flex gap-8 mt-4 md:mt-0">
             <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
       </div>
    </footer>
  );
}
