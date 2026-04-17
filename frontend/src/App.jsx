import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import Intro from './pages/Intro';
import AboutLayout from './pages/about/AboutLayout';
import AboutIndex from './pages/about/AboutIndex';
import Governance from './pages/about/Governance';
import Leadership from './pages/about/Leadership';

import ExecutiveBoard from './pages/ExecutiveBoard';
import Chapters from './pages/Chapters';
import Achievements from './pages/Achievements';
import Join from './pages/Join';
import NotFound from './pages/NotFound';

import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Preloader />
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Home — scale transition */}
              <Route path="/" element={<PageTransition variant="scale"><Home /></PageTransition>} />
              <Route path="/intro" element={<PageTransition variant="fade"><Intro /></PageTransition>} />
              
              {/* About — slide from right */}
              <Route path="/about" element={<PageTransition variant="slideRight"><AboutLayout /></PageTransition>}>
                <Route index element={<AboutIndex />} />
                <Route path="governance" element={<Governance />} />
                <Route path="leadership" element={<Leadership />} />
              </Route>

              {/* Board — blur transition */}
              <Route path="/executive-board" element={<PageTransition variant="blur"><ExecutiveBoard /></PageTransition>} />
              
              {/* Chapters — vertical rise */}
              <Route path="/chapters" element={<PageTransition variant="rise"><Chapters /></PageTransition>} />
              
              {/* Achievements — clip reveal */}
              <Route path="/achievements" element={<PageTransition variant="reveal"><Achievements /></PageTransition>} />
              
              {/* Join — fade */}
              <Route path="/join" element={<PageTransition variant="fade"><Join /></PageTransition>} />
              
              <Route path="*" element={<PageTransition variant="fade"><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
