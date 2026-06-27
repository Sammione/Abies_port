import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Core Expertise</h2>
        <div className="bento-skills">
          <div className="bento-panel skill-bento-card bento-large">
            <h3 className="bento-title">Artificial Intelligence</h3>
            <p className="bento-desc">Architecting intelligent systems using state-of-the-art Generative AI and advanced deep learning methodologies.</p>
            <div className="skill-tags">
              <span className="tech-badge">Large Language Models (LLMs)</span>
              <span className="tech-badge">Natural Language Processing</span>
              <span className="tech-badge">Computer Vision</span>
              <span className="tech-badge">Generative AI</span>
            </div>
          </div>
          
          <div className="bento-panel skill-bento-card bento-medium">
            <h3 className="bento-title">Machine Learning</h3>
            <p className="bento-desc">Building robust, scalable predictive models from experimental design to production deployment.</p>
            <div className="skill-tags">
              <span className="tech-badge">PyTorch</span>
              <span className="tech-badge">TensorFlow</span>
              <span className="tech-badge">Scikit-Learn</span>
              <span className="tech-badge">XGBoost</span>
            </div>
          </div>

          <div className="bento-panel skill-bento-card bento-wide">
            <h3 className="bento-title">Data Analysis & Visualization</h3>
            <p className="bento-desc">Transforming complex, high-dimensional datasets into actionable insights and strategic business intelligence.</p>
            <div className="skill-tags">
              <span className="tech-badge">Pandas</span>
              <span className="tech-badge">NumPy</span>
              <span className="tech-badge">Statistical Modeling</span>
              <span className="tech-badge">Tableau</span>
              <span className="tech-badge">PowerBI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
