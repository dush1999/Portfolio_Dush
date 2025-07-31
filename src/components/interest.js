import React from 'react';
import './interest.css';
import { FaBrain, FaChartBar, FaShieldAlt } from 'react-icons/fa';

const Interest = () => {
  const projects = [
    {
      title: 'GutMeal – Unlock the Power of Gut',
      icon: <FaBrain />,
      duration: 'July 2024 – August 2024',
      description: [
        'Built an AI Pharmacological model using XGBoost and statistical modeling for personalized meal planning, achieving 78% accuracy.',
        'Integrated food allergy constraints to improve dietary relevance in 80% of cases.',
        'Improved model precision by 5% via feature engineering and one-hot encoding of pharmacological data.'
      ],
      link: 'https://github.com/dush1999/gutmeal-ai', // 🔁 Add your actual GitHub or demo link here
    },
    {
      title: 'Privacy-Preserving LM on CH-MNIST',
      icon: <FaShieldAlt />,
      duration: 'March 2025 – April 2025',
      description: [
        'Developed a ResNet-based pipeline with shadow/target training setup to evaluate membership inference risks, reducing attack AUC from 0.74 to 0.50.',
        'Trained models with and without differential privacy using Opacus DP-SGD, demonstrating the privacy-utility trade-off.',
        'Achieved 95% (non-DP) vs. 84% (DP) accuracy while securing against adversarial attacks.'
      ],
      link: 'https://github.com/dush1999/privacy-chmnist',
    },
    {
      title: 'Tableau Dashboard: Traffic Congestion Analysis',
      icon: <FaChartBar />,
      duration: 'Jan 2025 – May 2025',
      description: [
        'Created a real-time congestion analysis dashboard using Tableau integrated with automated SharePoint updates.',
        'Cleaned, modeled, and joined traffic, speed, and certainty data using Python and Excel for better storytelling.',
        'Improved city-wide reporting speed and policy decision-making with automated insights.'
      ],
      link: 'https://public.tableau.com/app/profile/dush1999',
    },
  ];

  return (
    <section id="ml-projects" className="ml-projects-section">
      <h2 className="ml-projects-title">ML & Data Engineering Projects</h2>
      <div className="ml-projects-grid">
        {projects.map((project, index) => (
          <div className="ml-project-card" key={index}>
            <div className="ml-project-icon">{project.icon}</div>
            <h3 className="ml-project-name">{project.title}</h3>
            <p className="ml-project-duration">{project.duration}</p>
            <ul>
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a className="ml-project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              View Project ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interest;
