import { motion } from 'framer-motion';

export default function AboutIndex() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-ieee-deep">
        Who We Are
      </h1>
      
      <div className="space-y-8 text-lg font-sans text-ieee-deep/80 leading-relaxed">
        <p>
          The IEEE Student Branch is a hub of technological innovation and professional development. We provide a platform for forward-thinking individuals to collaborate, learn, and create impact.
        </p>
        
        <div className="h-px w-full bg-ieee-deep/10 my-12" />

        <h3 className="text-3xl font-display font-medium text-ieee-deep mb-4">Our Vision</h3>
        <p>
          To be the premier student-led organization that pioneers technological research, hardware engineering, and software solutions, fostering a culture where bold ideas are transformed into reality.
        </p>
      </div>
    </motion.div>
  );
}
