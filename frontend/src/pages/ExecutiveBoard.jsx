import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExecutiveBoard() {
  const container = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.exec-panel');
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

  const executivesGroup1 = [
    { name: "Satoshi Tanaka", role: "Chairperson", year: "Senior", bg: "bg-ieee-deep text-ieee-light" },
    { name: "Elena Rostova", role: "Vice Chair", year: "Senior", bg: "bg-ieee-light text-ieee-deep" },
    { name: "Aisha Patel", role: "Secretary", year: "Junior", bg: "bg-ieee-cyan text-ieee-deep" },
  ];

  const executivesGroup2 = [
    { name: "David Kim", role: "Treasurer", year: "Senior", bg: "bg-ieee-bright text-white" },
    { name: "Priya Singh", role: "Webmaster", year: "Sophomore", bg: "bg-ieee-deep text-ieee-light" },
    { name: "James Carter", role: "Event Coordinator", year: "Junior", bg: "bg-ieee-light text-ieee-deep" },
  ];

  return (
    <motion.div 
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black text-ieee-deep"
    >
      <section className="exec-panel h-screen w-full flex items-center justify-center bg-ieee-light relative z-[1]">
        <div className="text-center px-8">
           <h1 className="text-6xl md:text-[8rem] font-display font-medium tracking-tighter mb-8 leading-none text-ieee-deep">
             Executive <br/> Board.
           </h1>
           <p className="text-xl md:text-2xl font-sans opacity-70">Meet the leadership driving the vision.</p>
        </div>
      </section>

      <section className="exec-panel min-h-screen md:h-screen w-full flex items-center justify-center bg-ieee-deep relative z-[2] rounded-t-[3rem] mt-[-3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] py-16 md:py-0">
         <div className="w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
           {executivesGroup1.map((exec, i) => (
             <div key={i} className={`p-6 md:p-12 rounded-2xl md:rounded-3xl h-auto md:h-[28rem] flex flex-col justify-between ${exec.bg}`}>
                <div className="flex justify-between items-start opacity-70 mb-8 md:mb-0">
                   <span className="text-xs md:text-sm font-sans uppercase tracking-widest">{exec.year}</span>
                </div>
                <div>
                   <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-2">{exec.name}</h2>
                   <p className="text-lg md:text-xl font-sans opacity-90">{exec.role}</p>
                </div>
             </div>
           ))}
         </div>
      </section>

      <section className="exec-panel min-h-screen md:h-screen w-full flex items-center justify-center bg-ieee-cyan relative z-[3] rounded-t-[3rem] mt-[-3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] py-16 md:py-0">
         <div className="w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
           {executivesGroup2.map((exec, i) => (
             <div key={i} className={`p-6 md:p-12 rounded-2xl md:rounded-3xl h-auto md:h-[28rem] flex flex-col justify-between ${exec.bg}`}>
                <div className="flex justify-between items-start opacity-70 mb-8 md:mb-0">
                   <span className="text-xs md:text-sm font-sans uppercase tracking-widest">{exec.year}</span>
                </div>
                <div>
                   <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-2">{exec.name}</h2>
                   <p className="text-lg md:text-xl font-sans opacity-90">{exec.role}</p>
                </div>
             </div>
           ))}
         </div>
      </section>
    </motion.div>
  );
}
