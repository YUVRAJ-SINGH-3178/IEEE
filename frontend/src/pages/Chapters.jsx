import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ── Chapter Data (from user spec) ─────────────────────────
const chapters = [
  {
    id: 'cs',
    title: 'Computer Society',
    short: 'CS',
    tags: 'AI/ML · Software',
    category: 'Technical',
    desc: 'Advancing computing technology and software innovation through workshops, hackathons, and research initiatives.',
    bg: '#0A66C2',
    members: 150,
    projects: 20,
    awards: 12,
  },
  {
    id: 'pes',
    title: 'Power & Energy',
    short: 'PES',
    tags: 'Renewable · Smart Grid',
    category: 'Technical',
    desc: 'Sustainable energy solutions and power systems development for a greener future.',
    bg: '#10B981',
    members: 80,
    projects: 10,
    awards: 5,
  },
  {
    id: 'sps',
    title: 'Signal Processing',
    short: 'SPS',
    tags: 'DSP · Communication',
    category: 'Technical',
    desc: 'Exploring the frontiers of digital signals, image processing, and wireless communications.',
    bg: '#F59E0B',
    members: 70,
    projects: 8,
    awards: 4,
  },
  {
    id: 'wie',
    title: 'Women in Engineering',
    short: 'WIE',
    tags: 'Leadership · Community',
    category: 'Professional',
    desc: 'Empowering women in technology through mentorship, networking, and professional growth.',
    bg: '#EC4899',
    members: 100,
    projects: 15,
    awards: 8,
  },
  {
    id: 'ras',
    title: 'Robotics & Automation',
    short: 'RAS',
    tags: 'Arduino · ROS',
    category: 'Technical',
    desc: 'Designing and building autonomous systems and industrial automation solutions.',
    bg: '#EF4444',
    members: 90,
    projects: 12,
    awards: 6,
  },
  {
    id: 'sig',
    title: 'Special Interest Group',
    short: 'SIG',
    tags: 'Innovation · Research',
    category: 'Special Interest',
    desc: 'Focused groups exploring niche technical domains and emerging research areas.',
    bg: '#8B5CF6',
    members: 60,
    projects: 6,
    awards: 3,
  },
];

// ── Animated Counter ──────────────────────────────────────
function useCounter(target, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let frame;
    const duration = 1200;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, trigger]);
  return count;
}

// ── Chapter Section (full-bleed color) ────────────────────
function ChapterSection({ chapter, index, total }) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const memberCount = useCounter(chapter.members, inView);
  const projectCount = useCounter(chapter.projects, inView);
  const awardCount = useCounter(chapter.awards, inView);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;
  // Determine text color based on background brightness
  const darkBgs = ['#F59E0B'];
  const isDark = darkBgs.includes(chapter.bg);

  return (
    <section
      ref={sectionRef}
      className="ch-section min-h-screen w-full flex items-center relative overflow-hidden"
      style={{ backgroundColor: chapter.bg }}
    >
      {/* Ghost abbreviation */}
      <div className={`absolute ${isEven ? 'right-[-5%]' : 'left-[-5%]'} top-1/2 -translate-y-1/2 select-none pointer-events-none`}>
        <span
          className="ch-ghost text-[25rem] md:text-[40rem] font-display font-bold leading-none tracking-tighter will-change-transform"
          style={{ color: isDark ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)' }}
        >
          {chapter.short}
        </span>
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
        <span
          className="text-sm font-mono mb-4 tracking-widest"
          style={{ color: isDark ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.4)' }}
        >
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[10px] font-sans uppercase tracking-[0.15em] font-bold border rounded-full px-3 py-1"
            style={{ color: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)', borderColor: isDark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)' }}>
            {chapter.category}
          </span>
          <span className="text-[10px] font-sans uppercase tracking-[0.15em] font-bold border rounded-full px-3 py-1"
            style={{ color: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)', borderColor: isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
            {chapter.tags}
          </span>
        </div>

        <h2
          className="ch-title text-5xl md:text-7xl lg:text-[7rem] font-display font-bold leading-[0.9] tracking-tighter mb-6"
          style={{ color: isDark ? 'rgba(0,0,0,0.9)' : '#fff' }}
        >
          {chapter.title}
        </h2>

        <p
          className="ch-desc font-sans text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
          style={{ color: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.75)' }}
        >
          {chapter.desc}
        </p>

        {/* Animated counters */}
        <div className={`flex gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          <div>
            <span className="text-4xl md:text-5xl font-display font-bold block" style={{ color: isDark ? 'rgba(0,0,0,0.9)' : '#fff' }}>
              {memberCount}+
            </span>
            <span className="text-[9px] font-sans uppercase tracking-[0.2em] block mt-1" style={{ color: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)' }}>
              Members
            </span>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-display font-bold block" style={{ color: isDark ? 'rgba(0,0,0,0.9)' : '#fff' }}>
              {projectCount}+
            </span>
            <span className="text-[9px] font-sans uppercase tracking-[0.2em] block mt-1" style={{ color: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)' }}>
              Projects
            </span>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-display font-bold block" style={{ color: isDark ? 'rgba(0,0,0,0.9)' : '#fff' }}>
              {awardCount}
            </span>
            <span className="text-[9px] font-sans uppercase tracking-[0.2em] block mt-1" style={{ color: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)' }}>
              Awards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main Export ──────────────────────────────────────────
export default function Chapters() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray('.ch-section').forEach((section, i) => {
      const title = section.querySelector('.ch-title');
      const desc = section.querySelector('.ch-desc');
      const ghost = section.querySelector('.ch-ghost');
      const isEven = i % 2 === 0;

      if (title) {
        gsap.fromTo(title,
          { x: isEven ? -120 : 120, opacity: 0 },
          { x: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: section, start: 'top 80%', end: 'top 40%', scrub: 1 } }
        );
      }
      if (desc) {
        gsap.fromTo(desc,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: section, start: 'top 60%', end: 'top 30%', scrub: 1 } }
        );
      }
      if (ghost) {
        gsap.fromTo(ghost,
          { y: -100 },
          { y: 100, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true } }
        );
      }
    });
  }, { scope: container });

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Intro */}
      <section className="h-screen w-full flex items-center justify-center bg-ieee-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[20rem] md:text-[35rem] font-display font-bold text-white/[0.02] leading-none tracking-tighter">06</span>
        </div>
        <div className="text-center px-8 relative z-10">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-cyan font-bold block mb-8">6 Specialized Communities</span>
          <h1 className="text-6xl md:text-[9rem] font-display font-medium tracking-tighter leading-[0.85] mb-6">
            Technical <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-ieee-cyan to-purple-400">Ecosystem.</span>
          </h1>
          <p className="text-lg font-sans text-white/40 max-w-2xl mx-auto">
            Explore Our Specialized Communities. A structured technical network driving innovation across computing, power systems, signal processing, and professional development.
          </p>
        </div>
      </section>

      {/* Chapter Sections */}
      {chapters.map((ch, i) => (
        <ChapterSection key={ch.id} chapter={ch} index={i} total={chapters.length} />
      ))}

      {/* Featured Community Spotlight */}
      <section className="bg-ieee-deep text-white py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-cyan font-bold block mb-4">Community Spotlight</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">IEEE Computer Society</h2>
          <p className="text-lg font-sans text-white/50 max-w-2xl mx-auto mb-8">
            The powerhouse of software engineering at IEEE SRM AP. Join over 150+ developers working on real-world AI, Web, and Mobile projects.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <span className="text-3xl font-display font-bold text-white block">150+</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/40 font-bold">Members</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-display font-bold text-white block">20+</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/40 font-bold">Projects</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-display font-bold text-white block">12</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/40 font-bold">Awards</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-ieee-bright to-blue-700 text-white py-20 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Find Your Technical Path.</h2>
          <p className="text-lg font-sans text-white/70 mb-10">Connect with the engineering leaders of tomorrow.</p>
          <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-ieee-deep px-10 py-5 rounded-full font-sans uppercase tracking-[0.15em] text-sm font-bold hover:-translate-y-0.5 transition-all duration-300">
            Join a Chapter <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
