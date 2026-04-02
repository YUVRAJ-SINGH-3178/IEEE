import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500); // Wait a half-second at 100%
          return 100;
        }
        return prev + 2; // Speed of the loader
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
           initial={{ y: 0 }}
           exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
           className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ieee-deep text-ieee-light overflow-hidden"
        >
          {/* Background noise/texture can optionally go here */}
          
          <div className="relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm tracking-[0.2em] uppercase font-sans text-ieee-cyan mb-8"
            >
              System Initialization
            </motion.div>

            <div className="text-8xl md:text-[12rem] font-display font-bold leading-none tracking-tighter">
              {progress}<span className="text-ieee-cyan text-4xl md:text-6xl align-top">%</span>
            </div>
            
            <div className="mt-8 h-px w-64 md:w-96 bg-white/20 mx-auto relative overflow-hidden">
               <motion.div 
                 className="absolute inset-y-0 left-0 bg-ieee-cyan"
                 style={{ width: `${progress}%` }}
               />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
