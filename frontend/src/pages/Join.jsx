import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Join() {
  const container = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.join-panel');
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
      className="bg-black"
    >
      <section className="join-panel h-screen w-full flex items-center justify-center bg-ieee-deep text-ieee-light relative z-[1]">
        <div className="text-center px-8">
          <h1 className="text-6xl md:text-[8rem] font-display font-medium tracking-tighter mb-8 leading-none">
            Ready to <br /><span className="italic text-ieee-cyan">Upgrade?</span>
          </h1>
          <p className="text-xl md:text-2xl font-sans opacity-80 max-w-2xl mx-auto mb-12">
            Join the global network of engineers at SRM University AP. Scroll to begin.
          </p>
        </div>
      </section>

      <section className="join-panel min-h-screen md:h-screen w-full flex items-center justify-center bg-ieee-bright text-white relative z-[2] rounded-t-[3rem] mt-[-3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] py-16 md:py-0">
        <form className="max-w-xl w-full mx-auto px-8" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Initialize Membership.</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-sans uppercase tracking-widest opacity-80 mb-2">SRM Email Address</label>
              <input
                type="email"
                placeholder="name_surname@srmap.edu.in"
                className="w-full bg-black/20 border border-white/20 rounded-xl px-6 py-5 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40 text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-sans uppercase tracking-widest opacity-80 mb-2">University Registration Number</label>
              <input
                type="text"
                placeholder="E.g. AP221100..."
                className="w-full bg-black/20 border border-white/20 rounded-xl px-6 py-5 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40 text-lg"
              />
            </div>
            <a
              href="https://www.ieee.org/"
              className="w-full bg-ieee-deep text-ieee-cyan font-bold font-sans uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-white hover:text-ieee-deep transition-all mt-4 flex items-center justify-center"
            >
              Proceed to IEEE.org
            </a>
          </div>
        </form>
      </section>
    </motion.div>
  );
}
