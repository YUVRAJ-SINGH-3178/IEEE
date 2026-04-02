import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const container = useRef(null);
  
  useGSAP(() => {
    // Stacking/pinning effect
    const panels = gsap.utils.toArray('.panel');
    
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

  return (
    <motion.div 
      ref={container}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-black text-white"
    >
      <section className="panel h-screen w-full flex items-center justify-center bg-ieee-deep relative z-[1]">
        <h2 className="text-5xl md:text-8xl font-display font-medium text-center px-4">
          A Legacy of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-ieee-cyan to-ieee-bright">Excellence.</span>
        </h2>
      </section>

      <section className="panel h-screen w-full flex flex-col items-center justify-center bg-ieee-bright relative z-[2]">
        <div className="max-w-3xl text-center px-8">
           <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">
             Beyond Textbooks.
           </h3>
           <p className="text-xl md:text-2xl font-sans opacity-90 leading-relaxed">
             We bridge the gap between academic theory and real-world application. Cultivating a dynamic environment where ideas transform into solutions.
           </p>
        </div>
      </section>

      <section className="panel h-screen w-full flex items-center justify-center bg-ieee-light text-ieee-deep relative z-[3] rounded-t-[3rem] mt-[-3rem] shadow-[-10px_-10px_30px_rgba(0,0,0,0.2)]">
        <div className="max-w-4xl text-center px-8">
           <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tighter text-ieee-deep mix-blend-multiply">
              Join the Movement.
           </h3>
        </div>
      </section>
    </motion.div>
  );
}
