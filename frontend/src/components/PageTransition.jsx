import { motion } from 'framer-motion';

/*
  PageTransition — wraps each page with a unique entrance/exit animation.
  Pass a `variant` prop to select different animation styles per page.
*/

const variants = {
  // Home — scale + fade
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3 } },
  },
  // About — slide from right
  slideRight: {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.3 } },
  },
  // Chapters — vertical rise
  rise: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  },
  // Achievements — clip reveal (simulated with scaleY)
  reveal: {
    initial: { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
    animate: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)', transition: { duration: 0.4 } },
  },
  // Executive Board — blur + fade
  blur: {
    initial: { opacity: 0, filter: 'blur(12px)' },
    animate: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, filter: 'blur(8px)', transition: { duration: 0.3 } },
  },
  // Default — simple fade
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  },
};

export default function PageTransition({ children, variant = 'fade' }) {
  const v = variants[variant] || variants.fade;
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={v}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
}
