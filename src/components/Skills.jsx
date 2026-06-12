import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Core Expertise</h2>
        <div className="bento-skills">
          <div className="skill-bento-card bento-large glass-panel">
            <h3 className="bento-title">Artificial Intelligence</h3>
            <p className="bento-desc">Architecting intelligent systems using state-of-the-art Generative AI and advanced deep learning methodologies.</p>
            <div className="skill-tags">
              <span className="skill-tag">Large Language Models (LLMs)</span>
              <span className="skill-tag">Natural Language Processing</span>
              <span className="skill-tag">Computer Vision</span>
              <span className="skill-tag">Generative AI</span>
            </div>
          </div>
          
          <div className="skill-bento-card bento-medium glass-panel">
            <h3 className="bento-title">Machine Learning</h3>
            <p className="bento-desc">Building robust, scalable predictive models from experimental design to production deployment.</p>
            <div className="skill-tags">
              <span className="skill-tag">PyTorch</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Scikit-Learn</span>
              <span className="skill-tag">XGBoost</span>
            </div>
          </div>

          <div className="skill-bento-card bento-wide glass-panel">
            <h3 className="bento-title">Data Analysis & Visualization</h3>
            <p className="bento-desc">Transforming complex, high-dimensional datasets into actionable insights and strategic business intelligence.</p>
            <div className="skill-tags">
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Statistical Modeling</span>
              <span className="skill-tag">Tableau</span>
              <span className="skill-tag">PowerBI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
