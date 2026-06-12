import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Publications from './components/Publications';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
