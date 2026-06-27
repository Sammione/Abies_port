import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Publications from './components/Publications';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
