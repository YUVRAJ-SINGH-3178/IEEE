import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

// ── Achievement Data ─────────────────────────────────────
const achievements = [
  {
    year: '2023',
    title: 'First Place\nIEEE India Hackathon',
    detail: 'Dec 2023 · Won first place with an innovative IoT-based smart campus navigation system. Impressed judges with technical complexity and practical implementation.',
    extra: 'Team: 5 Members · Duration: 48 Hours · Prize: ₹50,000',
    stat: { val: 5, suffix: '', label: 'Team Members' },
    bg: '#0A66C2',
    dark: false,
    category: 'technical',
  },
  {
    year: '2023',
    title: 'Best Student Branch\nIEEE India',
    detail: 'Nov 2023 · Recognized as the Best Student Branch in IEEE India Region 10 for outstanding performance in technical activities, member engagement, and community service.',
    extra: 'Region: Region 10 · Activities: 50+ · Members: 500+',
    stat: { val: 500, suffix: '+', label: 'Members' },
    bg: '#0A1F44',
    dark: true,
    category: 'academic',
  },
  {
    year: '2023',
    title: '100+ Certificates\nIssued',
    detail: 'Oct 2023 · Successfully issued over 100 certificates to members for participating in workshops, events, and competitions. Reflects commitment to skill development and professional growth.',
    extra: 'Workshops: 25 · Events: 40 · Competitions: 35',
    stat: { val: 100, suffix: '+', label: 'Certificates' },
    bg: '#F59E0B',
    dark: false,
    category: 'technical',
  },
  {
    year: '2022',
    title: 'Growth\nPhase',
    detail: 'Expanded to 500+ members, organized 30+ events, established multiple technical chapters.',
    extra: '',
    stat: { val: 30, suffix: '+', label: 'Events organized' },
    bg: '#10B981',
    dark: false,
    category: 'academic',
  },
  {
    year: '2021',
    title: 'Foundation\nYear',
    detail: 'Established IEEE SRM AP with 50 founding members and began the journey of innovation.',
    extra: '',
    stat: { val: 50, suffix: '', label: 'Founding members' },
    bg: '#8B5CF6',
    dark: true,
    category: 'social',
  },
];

const timeline = [
  { year: '2023', label: 'Year of Excellence', description: 'Multiple national-level awards and recognitions including Best Student Branch and Hackathon championships' },
  { year: '2022', label: 'Growth Phase', description: 'Expanded to 500+ members, organized 30+ events, established multiple technical chapters' },
  { year: '2021', label: 'Foundation Year', description: 'Established IEEE SRM AP with 50 founding members and began the journey of innovation' },
];

// ── Animated Counter ─────────────────────────────────────
function AnimatedStat({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let frame;
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, inView]);
  return <>{count.toLocaleString()}{suffix}</>;
}

// ── Achievement Panel ────────────────────────────────────
function AchievementPanel({ ach, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isEven = index % 2 === 0;
  const textColor = ach.dark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)';
  const subColor = ach.dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)';
  const ghostColor = ach.dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)';

  return (
    <section
      ref={ref}
      className="ach-panel min-h-screen w-full flex items-center relative overflow-hidden"
      style={{ backgroundColor: ach.bg }}
    >
      {/* Ghost year in background */}
      <div className={`ach-ghost absolute ${isEven ? 'right-[-8%]' : 'left-[-8%]'} top-1/2 -translate-y-1/2 select-none pointer-events-none will-change-transform`}>
        <span className="text-[20rem] md:text-[38rem] font-display font-bold leading-none tracking-tighter" style={{ color: ghostColor }}>
          {ach.year}
        </span>
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-32 flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
        <span className="text-sm font-mono tracking-widest mb-6" style={{ color: subColor }}>
          {String(index + 1).padStart(2, '0')} — {ach.year}
        </span>

        <h2
          className="ach-title text-5xl md:text-7xl lg:text-[6.5rem] font-display font-bold leading-[0.9] tracking-tighter mb-8 whitespace-pre-line"
          style={{ color: textColor }}
        >
          {ach.title}
        </h2>

        <p className="ach-desc font-sans text-lg md:text-xl leading-relaxed max-w-xl mb-4" style={{ color: subColor }}>
          {ach.detail}
        </p>

        {ach.extra && (
          <p className="font-mono text-xs tracking-wide mb-12" style={{ color: subColor }}>
            {ach.extra}
          </p>
        )}

        {/* Animated counter */}
        <div>
          <span className="text-5xl md:text-7xl font-display font-bold block" style={{ color: textColor }}>
            <AnimatedStat target={ach.stat.val} suffix={ach.stat.suffix} inView={inView} />
          </span>
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] block mt-2" style={{ color: subColor }}>
            {ach.stat.label}
          </span>
        </div>
      </div>
    </section>
  );
}

// ── Main Export ──────────────────────────────────────────
export default function Achievements() {
  const container = useRef(null);
  const { isMobile } = useIsMobile();

  useGSAP(() => {
    gsap.utils.toArray('.ach-panel').forEach((panel, i) => {
      const title = panel.querySelector('.ach-title');
      const desc = panel.querySelector('.ach-desc');
      const ghost = panel.querySelector('.ach-ghost');
      const isEven = i % 2 === 0;

      if (title) {
        gsap.fromTo(title,
          { x: isEven ? -100 : 100, opacity: 0 },
          { x: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: panel, start: 'top 75%', end: 'top 35%', scrub: 1 } }
        );
      }
      if (desc) {
        gsap.fromTo(desc,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: panel, start: 'top 55%', end: 'top 25%', scrub: 1 } }
        );
      }
      if (ghost) {
        gsap.fromTo(ghost,
          { y: -80 },
          { y: 80, ease: 'none', scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: true } }
        );
      }
    });
  }, { scope: container, dependencies: [isMobile] });

  return (
    <div ref={container}>
      {/* Hero Intro */}
      <section className="h-screen w-full flex items-center justify-center bg-ieee-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[18rem] md:text-[30rem] font-display font-bold text-white/[0.02] leading-none tracking-tighter">★</span>
        </div>
        <div className="text-center px-8 relative z-10">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-cyan font-bold block mb-8">Recognition & Impact</span>
          <h1 className="text-6xl md:text-[9rem] font-display font-medium tracking-tighter leading-[0.85] mb-6">
            Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Achievements.</span>
          </h1>
          <p className="text-lg font-sans text-white/40 max-w-xl mx-auto">Celebrating excellence, innovation, and success in technical endeavors.</p>
        </div>
      </section>

      {/* Achievement Panels */}
      {achievements.map((ach, i) => (
        <AchievementPanel key={i} ach={ach} index={i} />
      ))}

      {/* Timeline Section */}
      <section className="bg-ieee-deep text-white py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-cyan font-bold block mb-4">Timeline</span>
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-16">Achievement Timeline</h2>

          <div className="relative pl-8 border-l-2 border-white/10">
            {timeline.map((t, i) => (
              <div key={i} className="relative mb-12 last:mb-0 group">
                <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-ieee-deep border-2 border-ieee-cyan/40 group-hover:bg-ieee-cyan group-hover:border-ieee-cyan transition-colors duration-300" />
                <span className="text-sm font-mono text-ieee-cyan font-bold block mb-1">{t.year}</span>
                <h4 className="text-xl font-display font-bold text-white mb-2">{t.label}</h4>
                <p className="font-sans text-white/40 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-ieee-bright to-blue-700 text-white py-20 md:py-28 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Be Part of Our Success Story</h2>
          <p className="text-lg font-sans text-white/70 mb-10 max-w-xl mx-auto">Join IEEE SRM AP and contribute to our legacy of excellence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-white text-ieee-deep px-10 py-5 rounded-full font-sans uppercase tracking-[0.15em] text-sm font-bold hover:-translate-y-0.5 transition-all duration-300">
              Join IEEE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/chapters" className="inline-flex items-center gap-3 border border-white/30 text-white px-10 py-5 rounded-full font-sans uppercase tracking-[0.15em] text-sm font-bold hover:bg-white/10 transition-all duration-300">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
