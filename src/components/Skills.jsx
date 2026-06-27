import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: "Artificial Intelligence",
    description: "Architecting intelligent systems using state-of-the-art Generative AI and deep learning.",
    tags: ["Large Language Models", "Natural Language Processing", "Computer Vision", "Generative AI", "RAG Systems"],
    span: "large",
    color: "blue"
  },
  {
    category: "Machine Learning",
    description: "Building robust, scalable predictive models from design to production deployment.",
    tags: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost"],
    span: "medium",
    color: "purple"
  },
  {
    category: "Data Engineering",
    description: "Designing scalable pipelines and transforming raw data into strategic intelligence.",
    tags: ["Apache Spark", "Kafka", "dbt", "Airflow", "Pandas", "NumPy", "Tableau", "PowerBI"],
    span: "wide",
    color: "cyan"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-label">// what I do</span>
        <h2 className="section-title">Core <span className="gradient-text">Expertise</span></h2>
        <div className="bento-skills">
          {skillGroups.map((group, index) => (
            <div key={index} className={`bento-panel skill-card skill-${group.span} skill-color-${group.color}`}>
              <h3 className="skill-category">{group.category}</h3>
              <p className="skill-desc">{group.description}</p>
              <div className="skill-tags">
                {group.tags.map((tag, i) => (
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

export default Skills;
