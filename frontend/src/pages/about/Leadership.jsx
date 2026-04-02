import { motion } from 'framer-motion';

export default function Leadership() {
  const leaders = [
    { name: "Satoshi Tanaka", role: "Chairperson", discipline: "Computer Science" },
    { name: "Elena Rostova", role: "Vice Chair", discipline: "Electrical Engineering" },
    { name: "Marcus Chen", role: "Technical Lead", discipline: "Robotics" },
    { name: "Aisha Patel", role: "Operations Head", discipline: "Information Technology" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl"
    >
      <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-ieee-deep">
        Leadership
      </h1>
      
      <p className="text-lg font-sans text-ieee-deep/80 leading-relaxed mb-16 max-w-3xl">
        Guided by visionaries. Our executive board brings diverse expertise and a shared passion for elevating the technological ecosystem at our institution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {leaders.map((leader, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className="group bg-white p-8 rounded-2xl shadow-sm border border-ieee-deep/5 hover:border-ieee-transparent hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-ieee-deep/5 mb-6 group-hover:bg-ieee-cyan/20 transition-colors" />
            <h3 className="text-2xl font-display font-bold text-ieee-deep mb-1">{leader.name}</h3>
            <p className="text-ieee-bright font-medium mb-3">{leader.role}</p>
            <p className="text-sm text-ieee-deep/50 uppercase tracking-wider">{leader.discipline}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
