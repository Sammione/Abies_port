import React from 'react';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      title: "Predictive Modeling of Infectious Disease Spread using Deep Learning",
      journal: "Journal of Public Health Informatics",
      year: "2024",
      description: "Proposed a novel neural network architecture to forecast outbreak trajectories using multi-modal healthcare data."
    },
    {
      title: "AI-Driven Resource Allocation in Public Hospitals During Crises",
      journal: "Healthcare AI Analytics",
      year: "2023",
      description: "A framework for optimizing bed capacity and medical supplies using reinforcement learning."
    },
    {
      title: "Ethical Considerations of Large Language Models in Patient Triage",
      journal: "International Conference on AI in Medicine",
      year: "2022",
      description: "Explored the bias and transparency issues in deploying LLMs for preliminary clinical assessments."
    }
  ];

  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item glass-panel">
              <div className="pub-header">
                <h3 className="pub-title">{pub.title}</h3>
                <span className="pub-year">{pub.year}</span>
              </div>
              <div className="pub-journal">{pub.journal}</div>
              <p className="pub-description">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
