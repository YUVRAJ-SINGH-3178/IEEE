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
    { 
      year: "2025", 
      title: "Best Regional Branch", 
      detail: "Awarded by IEEE Council for outstanding technical contributions and unprecedented member engagement in India.", 
      bg: 'bg-ieee-deep', 
      text: 'text-white',
      accent: 'text-ieee-cyan',
      stats: [ { label: 'Events Hosted', val: '50+' }, { label: 'Satisfaction', val: '99%' } ]
    },
    { 
      year: "2024", 
      title: "Xtreme Global Rank", 
      detail: "Our competitive programming teams placed within the top percentiles globally in the IEEE Xtreme 24-hour hackathon.", 
      bg: 'bg-ieee-bright', 
      text: 'text-white',
      accent: 'text-ieee-cyan',
      stats: [ { label: 'Global Rank', val: 'Top 1%' }, { label: 'Participants', val: '120' } ]
    },
    { 
      year: "2023", 
      title: "Exemplary Chapter", 
      detail: "The Computer Society Chapter was globally recognized for its continuous excellence and technical workshops.", 
      bg: 'bg-white', 
      text: 'text-ieee-deep',
      accent: 'text-ieee-bright',
      stats: [ { label: 'Workshops', val: '24' }, { label: 'Projects', val: '15' } ]
    },
  ];

  return (
    <motion.div 
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black"
    >
      <section className="achievement-panel h-screen w-full flex flex-col items-center justify-center bg-ieee-deep text-ieee-light relative z-[1] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-ieee-cyan/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-ieee-bright/10 rounded-full blur-[100px]" />
        
        <div className="text-center px-8 relative z-10 max-w-5xl">
           <span className="uppercase tracking-[0.3em] font-sans text-ieee-cyan font-bold text-sm md:text-base block mb-8">
             A Legacy of Excellence
           </span>
           <h1 className="text-6xl md:text-[8rem] leading-[0.9] font-display font-medium tracking-tighter mb-8">
             Our <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-light to-white/40 italic">Milestones.</span>
           </h1>
           <p className="text-xl md:text-2xl font-sans text-ieee-light/60 max-w-2xl mx-auto">
             Scroll down to explore the historical impact and global recognition of the IEEE SRM AP Branch.
           </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
           <span className="text-[10px] uppercase tracking-widest text-ieee-light/40">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-ieee-light/40 to-transparent" />
        </div>
      </section>

      {timeline.map((item, index) => (
        <section 
          key={index}
          className={`achievement-panel h-screen w-full flex items-center justify-center relative z-[${index + 2}] ${item.bg} ${item.text} rounded-t-[3rem] mt-[-3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] overflow-hidden`}
        >
          {/* Giant Background Year Typography */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03] overflow-hidden">
             <span className="text-[30rem] md:text-[50rem] font-display font-bold leading-none tracking-tighter">
                {item.year}
             </span>
          </div>

          <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
            {/* Left Content */}
            <div className="max-w-2xl flex-1">
               <div className={`text-2xl md:text-3xl font-display font-bold ${item.accent} mb-4`}>{item.year}</div>
               <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.1]">{item.title}</h2>
               <p className={`text-lg md:text-2xl font-sans ${item.bg === 'bg-white' ? 'text-ieee-deep/80' : 'text-white/80'} leading-relaxed`}>
                 {item.detail}
               </p>
            </div>

            {/* Right Stats Card */}
            <div className={`w-full md:w-auto p-8 rounded-3xl backdrop-blur-xl border ${item.bg === 'bg-white' ? 'bg-black/5 border-black/10' : 'bg-white/10 border-white/10'} shadow-xl flex-none min-w-[280px]`}>
               <div className="flex flex-col gap-8">
                  {item.stats.map((stat, i) => (
                     <div key={i}>
                        <p className={`text-[10px] uppercase tracking-[0.2em] mb-2 ${item.bg === 'bg-white' ? 'text-ieee-deep/60' : 'text-white/60'}`}>
                           {stat.label}
                        </p>
                        <p className="text-5xl font-display font-bold">
                           {stat.val}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        </section>
      ))}
    </motion.div>
  );
}
