import React from 'react';
import './Publications.css';

const publications = [
  {
    title: "Predictive Modeling of Infectious Disease Spread using Deep Learning",
    journal: "Journal of Public Health Informatics",
    year: "2024",
    description: "Proposed a novel neural network architecture to forecast outbreak trajectories using multi-modal healthcare data.",
    color: "blue"
  },
  {
    title: "AI-Driven Resource Allocation in Public Hospitals During Crises",
    journal: "Healthcare AI Analytics",
    year: "2023",
    description: "A framework for optimizing bed capacity and medical supplies using reinforcement learning.",
    color: "purple"
  },
  {
    title: "Ethical Considerations of Large Language Models in Patient Triage",
    journal: "International Conference on AI in Medicine",
    year: "2022",
    description: "Explored bias and transparency issues in deploying LLMs for preliminary clinical assessments.",
    color: "cyan"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="section">
      <div className="container">
        <span className="section-label">// research</span>
        <h2 className="section-title">Publications &amp; <span className="gradient-text">Research</span></h2>
        <div className="pub-list">
          {publications.map((pub, index) => (
            <div key={index} className={`bento-panel pub-item pub-color-${pub.color}`}>
              <div className="pub-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="pub-body">
                <h3 className="pub-title">{pub.title}</h3>
                <div className="pub-meta">
                  <span className="pub-journal">{pub.journal}</span>
                  <span className="pub-year">{pub.year}</span>
                </div>
                <p className="pub-description">{pub.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
