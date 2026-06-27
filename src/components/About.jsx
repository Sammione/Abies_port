import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        
        <div className="about-grid">
          <div className="bento-panel about-main-text">
            <p className="about-text">
              My journey is deeply rooted in core software engineering principles combined with advanced data science. 
              I have extensive experience architecting cutting-edge Artificial Intelligence and Machine Learning systems,
              focusing on delivering scalable, high-impact solutions from end to end.
            </p>
            <p className="about-text">
              Today, I specialize in the intersection of Data Engineering and AI, with a profound focus on 
              transforming the healthcare sector. My work empowers medical professionals through predictive analytics 
              and intelligent automation, ensuring data-driven decisions save lives.
            </p>
          </div>

          <div className="about-stats-grid">
            <div className="bento-panel stat-card">
              <span className="stat-num">Data & AI</span>
              <span className="stat-label">Core Focus</span>
            </div>
            <div className="bento-panel stat-card">
              <span className="stat-num">50+</span>
              <span className="stat-label">Models Deployed</span>
            </div>
            <div className="bento-panel stat-card">
              <span className="stat-num">12</span>
              <span className="stat-label">Publications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
