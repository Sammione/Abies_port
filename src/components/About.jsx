import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-editorial-grid">
          <div className="about-visual glass-panel">
            <div className="abstract-shape"></div>
            <div className="abstract-shape secondary-shape"></div>
            <h2 className="visual-title">Innovating<br/>at the<br/>Edge of Data.</h2>
          </div>
          
          <div className="about-content-wrapper">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>A Journey of Innovation</h2>
            <div className="glass-panel about-text-panel">
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
              
              <div className="editorial-stats">
                <div className="ed-stat">
                  <span className="ed-stat-num">Expert</span>
                  <span className="ed-stat-label">Data & AI</span>
                </div>
                <div className="ed-stat">
                  <span className="ed-stat-num">50+</span>
                  <span className="ed-stat-label">Models Deployed</span>
                </div>
                <div className="ed-stat">
                  <span className="ed-stat-num">12</span>
                  <span className="ed-stat-label">Publications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
