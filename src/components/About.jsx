import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <span className="section-label">// about me</span>
        <h2 className="section-title">Turning Data Into<br/><span className="gradient-text">Impact.</span></h2>
        
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
            <div className="about-divider"></div>
            <div className="about-highlights">
              <div className="highlight-item">Real-time ML pipelines at scale</div>
              <div className="highlight-item">Healthcare AI & predictive diagnostics</div>
              <div className="highlight-item">Generative AI & LLM fine-tuning</div>
            </div>
          </div>

          <div className="about-stats-grid">
            <div className="bento-panel stat-card stat-blue">
              <span className="stat-num">50+</span>
              <span className="stat-label">AI Models Deployed</span>
            </div>
            <div className="bento-panel stat-card stat-purple">
              <span className="stat-num">12</span>
              <span className="stat-label">Research Papers</span>
            </div>
            <div className="bento-panel stat-card stat-cyan">
              <span className="stat-num">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="bento-panel stat-card stat-pink">
              <span className="stat-num">∞</span>
              <span className="stat-label">Lines of Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
