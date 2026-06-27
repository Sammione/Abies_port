import React from 'react';
import './Projects.css';

const projectList = [
  {
    title: "AI-Powered Healthcare Assistant",
    description: "An intelligent virtual assistant for clinical settings, utilizing Large Language Models to streamline patient triage and provide preliminary medical guidance.",
    tags: ["LLMs", "Python", "React", "FastAPI"],
    highlight: true,
    icon: "🏥",
    color: "blue"
  },
  {
    title: "Disease Prediction Engine",
    description: "A robust ML pipeline for early disease detection using electronic health records. Deep learning models achieve high-accuracy diagnoses.",
    tags: ["PyTorch", "Pandas", "Scikit-Learn"],
    highlight: false,
    icon: "🔬",
    color: "purple"
  },
  {
    title: "Enterprise Chatbot Architecture",
    description: "A scalable, intent-driven chatbot reducing human agent load by 40% while maintaining high customer satisfaction scores.",
    tags: ["NLP", "TensorFlow", "Node.js"],
    highlight: false,
    icon: "🤖",
    color: "cyan"
  },
  {
    title: "E-Commerce Recommender System",
    description: "Collaborative filtering and content-based recommendation engine that increased conversion rates by 25%.",
    tags: ["Apache Spark", "Python", "AWS"],
    highlight: true,
    icon: "🛒",
    color: "pink"
  },
  {
    title: "Customer Churn Predictor",
    description: "Advanced predictive model leveraging behavioral data to identify at-risk customers and enable proactive retention strategies.",
    tags: ["XGBoost", "SQL", "Data Analytics"],
    highlight: false,
    icon: "📊",
    color: "blue"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-label">// featured work</span>
        <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className={`bento-panel project-card proj-color-${project.color} ${project.highlight ? 'proj-highlight' : ''}`}>
              <div className="project-top">
                <span className="proj-icon">{project.icon}</span>
                <span className="proj-arrow">↗</span>
              </div>
              <h3 className="proj-title">{project.title}</h3>
              <p className="proj-desc">{project.description}</p>
              <div className="proj-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
