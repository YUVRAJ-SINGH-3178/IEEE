import { motion } from 'framer-motion';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function AboutLayout() {
  const location = useLocation();
  
  const aboutLinks = [
    { name: 'Overview', path: '/about' },
    { name: 'Governance', path: '/about/governance' },
    { name: 'Leadership', path: '/about/leadership' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 px-8 md:px-16 bg-ieee-slate text-ieee-deep"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 static md:relative">
         {/* Mobile Navigation */}
         <div className="flex md:hidden gap-6 mb-12 overflow-x-auto pb-4 hide-scrollbar border-b border-ieee-deep/10">
           {aboutLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-display whitespace-nowrap transition-all ${
                    isActive ? 'text-ieee-bright font-bold' : 'text-ieee-deep/60'
                  }`}
                >
                  {link.name}
                </Link>
              )
           })}
         </div>

         {/* Sidebar Navigation */}
         <aside className="w-1/4 hidden md:block">
            <div className="sticky top-40 flex flex-col gap-6">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-ieee-deep/50 mb-4">About Us</h2>
              {aboutLinks.map((link) => {
                 const isActive = location.pathname === link.path;
                 return (
                   <Link 
                     key={link.path}
                     to={link.path}
                     className={`text-2xl font-display transition-all ${
                       isActive ? 'text-ieee-bright translate-x-2' : 'text-ieee-deep/60 hover:text-ieee-deep hover:translate-x-1'
                     }`}
                   >
                     {link.name}
                   </Link>
                 )
              })}
            </div>
         </aside>

         {/* Content Area */}
         <main className="flex-1 pb-32">
            {/* Animated Router Outlet */}
            <Outlet />
         </main>
      </div>
    </motion.div>
  );
}
