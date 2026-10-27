import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import DetailedGallery from './pages/DetailedGallery';
import ListOfItems from './components/ListOfItems';
import DecorDetails from './components/DecorDetails';

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <Routes location={location}>
          <Route path="/" element={<ListOfItems />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:eventType" element={<DetailedGallery />} />
          <Route path="/items" element={<ListOfItems />} />
          <Route path="/decordetails" element={<DecorDetails />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-[var(--paper)]">
        <NavBar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
