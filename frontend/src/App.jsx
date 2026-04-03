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

import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
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
              <Route path="/join" element={<Join />} />
              
              {/* Temporary removal for Phase 1 
              <Route path="/events" element={<Events />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              */}
              
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
