import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
   const [isLoading, setIsLoading] = useState(true);
   const numberRef = useRef(null);

   useEffect(() => {
      // Elegant count-up
      gsap.to(numberRef.current, {
         innerHTML: 100,
         duration: 2.2,
         snap: { innerHTML: 1 },
         ease: "power1.inOut",
      });

      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 2600);

      return () => clearTimeout(timer);
   }, []);

   return (
      <AnimatePresence>
         {isLoading && (
            <motion.div
               initial={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ieee-deep pointer-events-none"
            >
               {/* The Core Container */}
               <div className="relative w-full max-w-sm px-8 overflow-hidden flex flex-col items-center">

                  {/* Top Logo Badge */}
                  <div className="overflow-hidden mb-8">
                     <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                     >
                        <img
                           src="/ieee-horizontal-logo.png"
                           alt="IEEE SRM AP Logo"
                           className="h-10 md:h-14 w-auto object-contain mx-auto"
                        />
                     </motion.div>
                  </div>

                  {/* Center Precision Line */}
                  <div className="w-full h-px bg-white/20 relative overflow-hidden mb-4">
                     <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0, originX: 1 }} // Snaps beautifully out to the right on exit
                        transition={{ duration: 2.2, ease: "easeInOut" }}
                        className="absolute inset-0 bg-ieee-cyan"
                     />
                  </div>

                  {/* Bottom Counter */}
                  <div className="flex w-full justify-between items-center px-1 overflow-hidden">
                     <motion.span
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/50 text-[10px] font-sans uppercase tracking-widest"
                     >
                        Loading Environment
                     </motion.span>

                     <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/80 text-[10px] font-mono tracking-wider flex items-center"
                     >
                        <span ref={numberRef}>0</span>%
                     </motion.div>
                  </div>

               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
