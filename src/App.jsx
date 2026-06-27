import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Education />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Publications />
      <div className="section-divider"></div>
      <Contact />
    </div>
  );
}

export default App;
