import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Lightbulb, Users, Shield, Heart, Globe, Award } from 'lucide-react';

// ── Data (from user spec) ─────────────────────────────────
const heroStats = [
  { value: '420,000+', label: 'Global Members' },
  { value: '160+', label: 'Countries' },
  { value: '45', label: 'Technical Societies' },
  { value: '1,600+', label: 'Annual Conferences' },
];

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Driving technological advancement through creative thinking and cutting-edge research.' },
  { icon: Shield, title: 'Integrity', desc: 'Upholding the highest ethical standards in all professional and technical endeavors.' },
  { icon: Users, title: 'Collaboration', desc: 'Fostering partnerships and teamwork across disciplines and boundaries.' },
  { icon: Heart, title: 'Inclusion', desc: 'Embracing diversity of thought and background.' },
  { icon: Globe, title: 'Global Impact', desc: 'Creating technology solutions for pressing global challenges.' },
  { icon: Award, title: 'Excellence', desc: 'Striving for the highest quality in publications, standards, and education.' },
];

const timeline = [
  { year: '1884', event: 'Founded as the American Institute of Electrical Engineers (AIEE) by Thomas Edison and Alexander Graham Bell' },
  { year: '1963', event: 'AIEE merged with IRE to form IEEE — world\'s largest technical organization' },
  { year: '2018', event: 'IEEE SRM AP Student Branch officially established in Amaravati' },
  { year: '2024', event: 'Continuing to lead in AI, Quantum Computing, and Sustainable Energy' },
];

const societies = [
  { name: 'Computer Society', desc: 'Advancing the theory and application of computer science and IT globally' },
  { name: 'Power & Energy', desc: 'Leading power and energy system innovation and sustainability' },
  { name: 'Communications', desc: 'Telecommunications standards and groundbreaking networking technologies' },
  { name: 'Robotics & Automation', desc: 'Intelligent systems, autonomous vehicles, and industrial automation' },
  { name: 'AI & ML', desc: 'Ethical AI development, neural networks, and deep learning' },
  { name: 'Electronics', desc: 'Semiconductor technology and circuit design' },
  { name: 'Aerospace', desc: 'Space electronics, avionics, and global positioning systems' },
  { name: 'Engineering in Medicine', desc: 'Diagnostic electronics and healthcare technology' },
];

const membershipTiers = [
  { tier: 'Student', price: '$27/year', features: ['IEEE Xplore® access', 'Scholarships', 'Global network', 'Conference discounts', 'Google @IEEE mail'] },
  { tier: 'Professional', price: '$100/year', features: ['Full technical society access', 'Leadership opportunities', 'Digital library', 'IEEE Spectrum Magazine', 'CPE credits'] },
  { tier: 'Institutional', price: 'Custom', features: ['Bulk memberships', 'Corporate standards access', 'University lab resources'] },
];

// ── Main Export ──────────────────────────────────────────
export default function AboutIndex() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl"
    >
      {/* ── HERO INTRO ── */}
      <div className="mb-20">
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-ieee-bright font-bold border border-ieee-bright/30 rounded-full px-3 py-1 inline-block mb-6">Established 1884</span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-ieee-deep leading-[0.95]">
          140+ Years of Global<br />Engineering <span className="text-ieee-bright italic">Leadership.</span>
        </h1>
        <p className="text-lg font-sans text-ieee-deep/70 leading-relaxed max-w-3xl mb-8">
          IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Since our founding by Thomas Edison and Alexander Graham Bell, we've remained at the forefront of global innovation.
        </p>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroStats.map((s, i) => (
            <div key={i} className="p-4 rounded-xl bg-ieee-deep/[0.03] text-center">
              <span className="text-2xl font-display font-bold text-ieee-deep block">{s.value}</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-ieee-deep/40 font-bold">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MISSION & VISION ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <div className="group p-8 rounded-2xl bg-ieee-bright text-white transition-all duration-300 hover:shadow-[0_10px_40px_rgba(10,102,194,0.3)]">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
            <Target size={22} className="text-white" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
          <p className="font-sans text-white/70 leading-relaxed text-sm mb-4">
            To foster technological innovation and excellence for the benefit of humanity. We strive to be the most essential technical community globally.
          </p>
          <ul className="space-y-2">
            <li className="text-xs font-sans text-white/50 flex items-start gap-2"><span className="text-white/40">→</span> Advance technical knowledge across all engineering disciplines</li>
            <li className="text-xs font-sans text-white/50 flex items-start gap-2"><span className="text-white/40">→</span> Foster a culture of ethical tech development and global standards</li>
            <li className="text-xs font-sans text-white/50 flex items-start gap-2"><span className="text-white/40">→</span> Empower the next generation of engineers through mentorship</li>
          </ul>
        </div>

        <div className="group p-8 rounded-2xl bg-ieee-deep text-white transition-all duration-300 hover:shadow-[0_10px_40px_rgba(10,31,68,0.3)]">
          <div className="w-12 h-12 rounded-xl bg-ieee-cyan/20 flex items-center justify-center mb-6">
            <Eye size={22} className="text-ieee-cyan" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
          <p className="font-sans text-white/60 leading-relaxed text-sm mb-4">
            To be universally recognized for the contributions of technical professionals in creating technologies that benefit the world.
          </p>
          <ul className="space-y-2">
            <li className="text-xs font-sans text-white/50 flex items-start gap-2"><span className="text-white/40">→</span> Global recognition of engineering as a force for good</li>
            <li className="text-xs font-sans text-white/50 flex items-start gap-2"><span className="text-white/40">→</span> Unifying the global technical community through collaboration</li>
            <li className="text-xs font-sans text-white/50 flex items-start gap-2"><span className="text-white/40">→</span> Driving sustainable innovation for a more connected planet</li>
          </ul>
        </div>
      </div>

      {/* ── CORE VALUES ── */}
      <div className="mb-20">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">What Drives Us</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-ieee-deep mb-12 tracking-tight">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="group flex gap-5 p-6 rounded-xl border border-ieee-deep/5 hover:border-ieee-bright/20 hover:bg-ieee-bright/[0.02] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-ieee-deep/5 flex items-center justify-center flex-shrink-0 group-hover:bg-ieee-bright/10 transition-colors duration-300">
                  <Icon size={18} className="text-ieee-deep/40 group-hover:text-ieee-bright transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-ieee-deep text-lg mb-1">{v.title}</h4>
                  <p className="font-sans text-ieee-deep/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── LEGACY TIMELINE ── */}
      <div className="mb-20">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Legacy</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-ieee-deep mb-12 tracking-tight">Our Journey</h2>
        <div className="relative pl-8 border-l-2 border-ieee-deep/10">
          {timeline.map((m, i) => (
            <div key={i} className="relative mb-8 last:mb-0 group">
              <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-ieee-slate border-2 border-ieee-deep/20 group-hover:bg-ieee-bright group-hover:border-ieee-bright transition-colors duration-300" />
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-mono text-ieee-bright font-bold flex-shrink-0">{m.year}</span>
                <p className="font-sans text-ieee-deep/70 text-base leading-relaxed">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TECHNICAL SOCIETIES ── */}
      <div className="mb-20">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Global Reach</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-ieee-deep mb-12 tracking-tight">Technical Societies & Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {societies.map((s, i) => (
            <div key={i} className="p-5 rounded-xl border border-ieee-deep/5 hover:border-ieee-bright/20 transition-all duration-300">
              <h4 className="font-display font-bold text-ieee-deep text-base mb-1">{s.name}</h4>
              <p className="font-sans text-ieee-deep/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── BRANCH LEADERSHIP PREVIEW ── */}
      <div className="mb-20">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Branch Leadership</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-ieee-deep mb-8 tracking-tight">Our Leaders</h2>
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-4 p-4 rounded-xl border border-ieee-deep/5">
            <div className="w-10 h-10 rounded-full bg-ieee-bright/10 flex items-center justify-center text-xs font-bold text-ieee-bright">FA</div>
            <div><h4 className="font-display font-bold text-ieee-deep text-sm">Dr. Rajesh Kumar</h4><p className="text-xs font-sans text-ieee-deep/40">Faculty Advisor</p></div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl border border-ieee-deep/5">
            <div className="w-10 h-10 rounded-full bg-ieee-cyan/10 flex items-center justify-center text-xs font-bold text-ieee-cyan">CH</div>
            <div><h4 className="font-display font-bold text-ieee-deep text-sm">Sneha Reddy</h4><p className="text-xs font-sans text-ieee-deep/40">Branch Chairperson</p></div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl border border-ieee-deep/5">
            <div className="w-10 h-10 rounded-full bg-ieee-bright/10 flex items-center justify-center text-xs font-bold text-ieee-bright">VC</div>
            <div><h4 className="font-display font-bold text-ieee-deep text-sm">Rahul Sharma</h4><p className="text-xs font-sans text-ieee-deep/40">Vice Chair</p></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/executive-board" className="inline-flex items-center gap-2 bg-ieee-bright text-white px-6 py-3 rounded-full font-sans text-xs uppercase tracking-[0.15em] font-bold hover:-translate-y-0.5 transition-all duration-300">
            Full Executive Board <ArrowRight size={14} />
          </Link>
          <Link to="/executive-board" className="inline-flex items-center gap-2 border border-ieee-deep/20 text-ieee-deep px-6 py-3 rounded-full font-sans text-xs uppercase tracking-[0.15em] font-bold hover:bg-ieee-deep/5 transition-all duration-300">
            View 40+ Core Members
          </Link>
        </div>
      </div>

      {/* ── MEMBERSHIP TIERS ── */}
      <div className="mb-20">
        <span className="text-xs font-sans uppercase tracking-[0.3em] text-ieee-bright font-bold block mb-4">Membership</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-ieee-deep mb-12 tracking-tight">Join IEEE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipTiers.map((t, i) => (
            <div key={i} className={`p-6 rounded-2xl border transition-all duration-300 ${i === 0 ? 'border-ieee-bright/30 bg-ieee-bright/[0.03]' : 'border-ieee-deep/5 hover:border-ieee-bright/20'}`}>
              <h4 className="font-display font-bold text-ieee-deep text-xl mb-1">{t.tier}</h4>
              <span className="text-2xl font-display font-bold text-ieee-bright block mb-4">{t.price}</span>
              <ul className="space-y-2">
                {t.features.map((f, fi) => (
                  <li key={fi} className="text-sm font-sans text-ieee-deep/60 flex items-start gap-2">
                    <span className="text-ieee-bright mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-ieee-deep to-ieee-deep/90 text-white">
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Want to be part of this story?</h3>
        <p className="font-sans text-white/50 mb-8 max-w-xl leading-relaxed">
          Whether you're a first-year exploring your interests or a final-year looking to lead — there's a place for you here.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ieee-cyan text-ieee-deep px-6 py-3 rounded-full font-sans text-sm uppercase tracking-[0.15em] font-bold hover:shadow-[0_6px_20px_rgba(0,194,255,0.3)] hover:-translate-y-0.5 transition-all duration-300">
            Join IEEE <ArrowRight size={16} />
          </a>
          <Link to="/executive-board"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-sans text-sm uppercase tracking-[0.15em] font-bold hover:bg-white/5 hover:border-white/40 transition-all duration-300">
            Meet the Board
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
