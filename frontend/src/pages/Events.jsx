import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const container = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.event-panel');
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

  const events = [
    { 
      bg: "bg-ieee-light text-ieee-deep",
      date: "Oct 24", 
      title: "The Future of Quantum Computing", 
      speaker: "Dr. Alistair Webb", 
      role: "Lead Researcher, IBM Quantum",
      tags: ["Computer Society", "Keynote"] 
    },
    { 
      bg: "bg-ieee-bright text-white",
      date: "Nov 12", 
      title: "Autonomous Systems Workshop", 
      speaker: "Sarah O'Connor", 
      role: "Robotics Engineer, Tesla",
      tags: ["Robotics & Automation", "Workshop"] 
    },
    { 
      bg: "bg-ieee-deep text-ieee-cyan",
      date: "Dec 05", 
      title: "Smart Grids for 2030", 
      speaker: "Prof. Li Wei", 
      role: "Dept. of Energy Strategy",
      tags: ["Power & Energy", "Seminar"] 
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
      <section className="event-panel h-screen w-full flex flex-col items-center justify-center bg-ieee-deep text-ieee-light relative z-[1]">
        <div className="text-center px-8">
           <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter mb-8">
             Knowledge <span className="text-ieee-cyan italic">In Motion.</span>
           </h1>
           <p className="text-xl font-sans opacity-70">Scroll through upcoming events.</p>
        </div>
      </section>

      {events.map((event, index) => (
        <section 
          key={index}
          className={`event-panel h-screen w-full flex items-center justify-center relative z-[${index + 2}] ${event.bg} rounded-t-[3rem] mt-[-3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]`}
        >
          <div className="max-w-5xl px-8 w-full">
            <div className="mb-8">
              <span className="text-4xl md:text-6xl font-display font-bold border-b-2 border-current pb-4 inline-block">{event.date}</span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
               <div>
                  <div className="flex gap-3 mb-6 flex-wrap">
                     {event.tags.map(tag => (
                        <span key={tag} className="text-sm font-sans uppercase tracking-widest bg-black/10 px-4 py-2 rounded-full">{tag}</span>
                     ))}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-display font-bold max-w-3xl leading-tight">{event.title}</h2>
               </div>

               <div className="flex-shrink-0 text-left md:text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold font-sans">{event.speaker}</div>
                  <div className="text-lg opacity-70 uppercase tracking-wide">{event.role}</div>
               </div>
            </div>
          </div>
        </section>
      ))}
    </motion.div>
  );
}
