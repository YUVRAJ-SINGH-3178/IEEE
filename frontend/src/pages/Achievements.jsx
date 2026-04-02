import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const container = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.achievement-panel');
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

  const timeline = [
    { year: "2025", title: "Best Student Branch", detail: "Awarded by IEEE Region 10 for outstanding technical contributions and member engagement.", bg: 'bg-ieee-deep text-white' },
    { year: "2024", title: "Global Hackathon Winners", detail: "Our team placed 1st globally in the IEEE Xtreme Competition.", bg: 'bg-ieee-bright text-white' },
    { year: "2023", title: "Exemplary Chapter", detail: "The Computer Society Chapter was recognized for continuous excellence.", bg: 'bg-ieee-cyan text-ieee-deep' },
    { year: "2022", title: "10,000+ Members", detail: "A milestone marking our growth as the premier technical society.", bg: 'bg-ieee-light text-ieee-deep' },
  ];

  return (
    <motion.div 
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      <section className="achievement-panel h-screen w-full flex items-center justify-center bg-ieee-deep text-ieee-light relative z-[1]">
        <h1 className="text-6xl md:text-8xl font-display font-medium text-center tracking-tighter">
          Our Milestones.
        </h1>
      </section>

      {timeline.map((item, index) => (
        <section 
          key={index}
          className={`achievement-panel h-screen w-full flex flex-col items-center justify-center relative z-[${index + 2}] ${item.bg} rounded-t-[3rem] mt-[-3rem] shadow-[-10px_-10px_30px_rgba(0,0,0,0.15)]`}
        >
          <div className="text-center px-8 max-w-4xl">
             <div className="text-2xl font-sans font-bold uppercase tracking-widest opacity-70 mb-4">{item.year}</div>
             <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">{item.title}</h2>
             <p className="text-xl md:text-3xl font-sans opacity-90">{item.detail}</p>
          </div>
        </section>
      ))}
    </motion.div>
  );
}
