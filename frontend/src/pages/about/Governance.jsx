import { motion } from 'framer-motion';

export default function Governance() {
  const policies = [
    { title: "Bylaws & Constitution", desc: "The definitive framework outlining the organizational structure, operations, and objectives." },
    { title: "Code of Conduct", desc: "Guidelines ensuring a respectful, inclusive, and professional environment for all members." },
    { title: "Electoral Process", desc: "Transparent protocols dictating the transparent selection of executive board members." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl"
    >
      <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-ieee-deep">
        Governance
      </h1>
      
      <p className="text-lg font-sans text-ieee-deep/80 leading-relaxed mb-16">
        Transparency, structured growth, and accountability form the pillars of our branch. Our governance ensures we remain steadfast to the IEEE bylaws while adapting to modern organizational needs.
      </p>

      <div className="grid gap-12 border-l border-ieee-deep/10 pl-8 md:pl-12">
        {policies.map((policy, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.3 }}
            className="group relative"
          >
            <div className="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 bg-ieee-light border-2 border-ieee-deep rounded-full group-hover:bg-ieee-bright group-hover:border-ieee-bright transition-colors" />
            <h3 className="text-2xl font-display font-medium text-ieee-deep mb-2">{policy.title}</h3>
            <p className="text-ieee-deep/60 leading-relaxed max-w-2xl">{policy.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
