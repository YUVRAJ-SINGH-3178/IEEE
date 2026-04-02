import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Chapters() {
  const container = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.chapter-panel');
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        end: () => `+=${window.innerHeight}`,
      });
    });
  }, { scope: container });

  const chapters = [
     { id: 'cs', title: 'Computer Society', desc: 'Focusing on artificial intelligence, software engineering, and the future of computing.', bg: 'bg-ieee-deep text-ieee-light' },
     { id: 'ras', title: 'Robotics & Automation', desc: 'Bridging the gap between software and physical machines.', bg: 'bg-ieee-bright text-white' },
     { id: 'pes', title: 'Power & Energy', desc: 'Innovating sustainable energy solutions and smart grids.', bg: 'bg-ieee-light text-ieee-deep' },
  ];

  return (
    <motion.div 
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      <section className="chapter-panel h-screen w-full flex items-center justify-center bg-ieee-deep text-ieee-light relative z-[1]">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter mb-4">
             Our Chapters.
          </h1>
          <p className="text-xl font-sans opacity-70">Scroll to explore</p>
        </div>
      </section>

      {chapters.map((chapter, index) => (
        <section 
          key={chapter.id}
          className={`chapter-panel h-screen w-full flex items-center justify-center relative z-[${index + 2}] ${chapter.bg} shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)] rounded-t-[3rem] mt-[-3rem] border-t border-white/10`}
        >
          <div className="max-w-4xl px-8 text-center">
             <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">{chapter.title}</h2>
             <p className="text-xl md:text-3xl font-sans opacity-80 leading-relaxed">{chapter.desc}</p>
          </div>
        </section>
      ))}
    </motion.div>
  );
}
