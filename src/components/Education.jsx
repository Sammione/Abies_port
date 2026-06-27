import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master Data Science and Business Analyst",
      institution: "University of Plymouth",
      grade: "Distinction",
    },
    {
      degree: "BSc Geology",
      institution: "University of Benin (Uniben)",
      grade: "Second Class",
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Academic Background</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="bento-panel education-card">
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <div className="edu-meta">
                  <span className="edu-grade">{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
