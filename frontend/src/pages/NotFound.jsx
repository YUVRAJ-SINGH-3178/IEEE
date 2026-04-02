import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-ieee-deep text-ieee-light flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="font-display font-bold text-[10rem] leading-none mb-4 tracking-tighter text-ieee-light/10">
         404
      </div>
      <h1 className="text-4xl md:text-5xl font-display mb-8">
        Signal Lost.
      </h1>
      <p className="text-lg font-sans opacity-60 mb-12 max-w-md mx-auto">
        The endpoint you are trying to reach does not exist in our network.
      </p>
      
      <Link to="/" className="px-8 py-4 bg-ieee-light text-ieee-deep font-bold rounded-full hover:bg-ieee-cyan transition-colors">
        Return to Source
      </Link>
    </motion.div>
  );
}
