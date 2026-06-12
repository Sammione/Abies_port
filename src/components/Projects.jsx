import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "AI-Powered Healthcare Assistant",
      description: "An intelligent virtual assistant designed for clinical settings, utilizing Large Language Models to streamline patient triage and provide preliminary medical guidance.",
      tags: ["LLMs", "Python", "React", "FastAPI"],
      highlight: true
    },
    {
      title: "Health Care Disease Prediction",
      description: "A robust machine learning pipeline for early disease detection using electronic health records (EHR). Integrates deep learning models for high-accuracy predictions.",
      tags: ["PyTorch", "Pandas", "Scikit-Learn"],
      highlight: false
    },
    {
      title: "Enterprise Chatbot Architecture",
      description: "A scalable, intent-driven chatbot deployed across customer service channels, reducing human agent load by 40% while maintaining high CSAT scores.",
      tags: ["NLP", "TensorFlow", "Node.js"],
      highlight: false
    },
    {
      title: "E-Commerce Recommender System",
      description: "A collaborative filtering and content-based recommendation engine that personalized the shopping experience, resulting in a 25% increase in conversion rates.",
      tags: ["Apache Spark", "Python", "AWS"],
      highlight: true
    },
    {
      title: "Customer Churn Prediction",
      description: "An advanced predictive model leveraging historical user behavioral data to identify at-risk customers, allowing proactive retention strategies.",
      tags: ["XGBoost", "Data Analytics", "SQL"],
      highlight: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Work</h2>
        <div className="projects-editorial-grid">
          {projectList.map((project, index) => (
            <div key={index} className={`glass-panel project-editorial-card ${project.highlight ? 'project-highlight' : 'project-standard'}`}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
