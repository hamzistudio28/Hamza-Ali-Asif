import React from 'react';
// Changed BrowserRouter to HashRouter here!
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    // The Router wrapper is much simpler now
    <Router>
      <div className="bg-[#0b1320] text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-white flex flex-col">
        <Navbar />
        
        {/* This is where the page content will swap out */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;