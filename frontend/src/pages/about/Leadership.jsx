import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import useIsMobile from '../../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

// ── Data (from user spec) ─────────────────────────────────
const leaders = [
  { name: 'Dr. Rajesh Kumar', role: 'Faculty Advisor', dept: 'Electrical Engineering', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Sneha Reddy', role: 'Branch Chairperson', dept: 'Computer Science', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Rahul Sharma', role: 'Vice Chair', dept: 'Electronics & Communication', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Student Name', role: 'General Secretary', dept: 'Computer Science', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Student Name', role: 'Treasurer', dept: 'Mechanical Engineering', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
  { name: 'Student Name', role: 'Webmaster', dept: 'Computer Science', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face', linkedin: '#' },
];

const pastLeaders = [
  { year: '2024–2025', name: 'Previous Chairperson', desc: 'Led rapid growth, establishing new chapters and industry partnerships.' },
  { year: '2023–2024', name: 'Previous Chairperson', desc: 'Expanded event portfolio and increased member engagement across societies.' },
  { year: '2022–2023', name: 'Founding Chairperson', desc: 'Established the branch, set up initial chapter structure, and organized first flagship events.' },
];

const leadershipValues = [
  { title: 'Member-First', desc: 'Every decision prioritizes the growth, learning, and experience of our members.' },
  { title: 'Transparency', desc: 'Open communication, transparent decision-making, and inclusive governance.' },
  { title: 'Innovation', desc: 'Continuously pushing boundaries, trying new formats, and embracing excellence.' },
];

// ── Main Export ──────────────────────────────────────────
export default function Leadership() {
  const container = useRef(null);
  const { isMobile } = useIsMobile();

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo('.leader-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: isMobile ? 0.4 : 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.leadership-grid', start: isMobile ? 'top 95%' : 'top 80%' }
        }
      );
    });
    return () => mm.revert();
  }, { scope: container, dependencies: [isMobile] });

  return (
    <div ref={container} className="max-w-5xl touch-pan-y">
      {/* ── HEADER ── */}
      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-ieee-bright font-bold border border-ieee-bright/30 rounded-full px-3 py-1 inline-block mb-6">2025–2026 Term</span>
      <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-ieee-deep leading-[0.95]">
        Our <span className="text-ieee-bright italic">Leadership.</span>
      </h1>
      <p className="text-lg font-sans text-ieee-deep/60 leading-relaxed mb-16 max-w-2xl">
        The leaders who have shaped and continue to drive IEEE SRM AP forward.
      </p>

      {/* ── CURRENT LEADERS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 leadership-grid mb-16">
        {leaders.map((leader, i) => (
          <div key={i} className="leader-card group relative overflow-hidden rounded-2xl cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={leader.img} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ieee-deep via-ieee-deep/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#0A66C2] hover:border-[#0A66C2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-display font-bold text-white leading-tight mb-1">{leader.name}</h3>
                <p className="font-sans text-ieee-cyan text-xs uppercase tracking-[0.15em] font-bold mb-1">{leader.role}</p>
                <p className="font-sans text-white/40 text-[11px] uppercase tracking-wider">{leader.dept}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── PAST LEADERS ── */}
      <div className="mb-16">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Legacy</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ieee-deep mb-8 tracking-tight">Past Leaders</h2>
        <div className="relative pl-8 border-l-2 border-ieee-deep/10">
          {pastLeaders.map((l, i) => (
            <div key={i} className="relative mb-8 last:mb-0 group">
              <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-ieee-slate border-2 border-ieee-deep/20 group-hover:bg-ieee-bright group-hover:border-ieee-bright transition-colors duration-300" />
              <span className="text-sm font-mono text-ieee-bright font-bold block mb-1">{l.year}</span>
              <h4 className="text-lg font-display font-bold text-ieee-deep mb-1">{l.name}</h4>
              <p className="font-sans text-ieee-deep/50 text-sm leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── LEADERSHIP VALUES ── */}
      <div className="mb-16">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">What Drives Us</span>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-ieee-deep mb-8 tracking-tight">Leadership Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {leadershipValues.map((v, i) => (
            <div key={i} className="p-6 rounded-xl border border-ieee-deep/5 hover:border-ieee-bright/20 transition-all duration-300 text-center">
              <h4 className="font-display font-bold text-ieee-deep text-lg mb-2">{v.title}</h4>
              <p className="font-sans text-ieee-deep/50 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-ieee-bright to-blue-700 text-white">
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Ready to Lead?</h3>
        <p className="font-sans text-white/60 mb-8 max-w-xl leading-relaxed">Join IEEE SRM AP and build your path to leadership.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ieee-deep px-6 py-3 rounded-full font-sans text-sm uppercase tracking-[0.15em] font-bold hover:-translate-y-0.5 transition-all duration-300">
            Join IEEE SRM AP <ArrowRight size={16} />
          </a>
          <Link to="/executive-board"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-sans text-sm uppercase tracking-[0.15em] font-bold hover:bg-white/10 transition-all duration-300">
            Full Team
          </Link>
        </div>
      </div>
    </div>
  );
}
