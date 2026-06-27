import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science",
      field: "Data Science & Business Analytics",
      institution: "University of Plymouth",
      grade: "Distinction",
      color: "blue"
    },
    {
      degree: "Bachelor of Science",
      field: "Geology",
      institution: "University of Benin (Uniben)",
      grade: "Second Class",
      color: "purple"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <span className="section-label">// academic background</span>
        <h2 className="section-title">Education &amp; <span className="gradient-text">Qualifications</span></h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className={`bento-panel education-card edu-${edu.color}`}>
              <div className="edu-body">
                <span className="edu-degree-level">{edu.degree}</span>
                <h3 className="edu-field">{edu.field}</h3>
                <p className="edu-institution">{edu.institution}</p>
              </div>
              <div className="edu-footer">
                <span className="edu-grade-badge">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
