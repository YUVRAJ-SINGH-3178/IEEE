import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Intro from './pages/Intro';
import AboutLayout from './pages/about/AboutLayout';
import AboutIndex from './pages/about/AboutIndex';
import Governance from './pages/about/Governance';
import Leadership from './pages/about/Leadership';

import ExecutiveBoard from './pages/ExecutiveBoard';
import Chapters from './pages/Chapters';
import Achievements from './pages/Achievements';
import Events from './pages/Events';
import Join from './pages/Join';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <Preloader />
        <Navbar />
        
        {/* Route Transitions wrapper */}
        <main className="flex-grow flex flex-col">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/intro" element={<Intro />} />
              
              <Route path="/about" element={<AboutLayout />}>
                <Route index element={<AboutIndex />} />
                <Route path="governance" element={<Governance />} />
                <Route path="leadership" element={<Leadership />} />
              </Route>

              <Route path="/executive-board" element={<ExecutiveBoard />} />
              <Route path="/chapters" element={<Chapters />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/events" element={<Events />} />
              <Route path="/join" element={<Join />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
