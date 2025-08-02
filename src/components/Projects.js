import React from 'react';
import './Projects.css';
import car1 from '../images/car1.jpg';
import youtube1 from '../images/youtube1.jpeg';
import speed1 from '../images/speed1.jpg';
import ae from '../images/ae.jpeg';
import ad1 from '../images/ad1.jpeg';
import costs from '../images/costs.jpeg';
// import placeholder from '../images/placeholder.jpg';

const projectData = [
  {
    title: 'Self-Driving Car Simulation',
    link: 'https://github.com/dush1999/self_driving_car',
    image: car1, 
    description: 'Designed and implemented a deep learning model using PyTorch for real-time autonomous control of a self-driving car, integrating reinforcement learning for optimized obstacle detection and navigation.',
  },
  {
    title: 'Youtube Data Engineering',
    link: '',
    image: youtube1,
    description: 'Built a data ingestion pipeline and ETL system for centralizing YouTube data in AWS, with dashboards for reporting and insights.',
  },
  {
    title: 'Object Speed Detection',
    link: 'https://github.com/dush1999/speed_detection',
    image: speed1,
    description: 'Created a YOLOv8-based system to track vehicles and calculate speed in real-time from video streams.',
  },
  {
    title: 'AE Group - Freelance',
    link: 'https://ae-group.in',
    image: ae,
    description: 'Developed a responsive React website using Figma designs, integrating clean layout and UI/UX principles for AE Group.',
  },
  {
    title: 'RelevantReach: Personalized Ads',
    link: 'https://github.com/dush1999/-Personalized-Ads-for-Customers---RelevantReach',
    image: ad1,
    description: 'This project focused on generating advertisements in a more efficient and personalized manner, making them more relatable to customers while helping companies save resources by delivering only relevant ads. We utilized S-ARIMA for time series forecasting to predict customer spending patterns, allowing us to tailor advertisements accordingly.Used S-ARIMA for forecasting spending patterns to improve ad targeting; recognized for "Best Content" in two hackathons.',
  },
  {
    title: 'Predictive Modeling for Logistics',
    link: 'https://github.com/dush1999/-Predictive-Modeling-for-Transportation-Costs-and-Logistics-Efficiency',
    image: costs,
    description: 'Cleaned and modeled logistic data to reduce delivery costs by 15% using Python and regression models.',
  }
];

function ProjectSection() {
  return (
    <section id="projects" className="project-section">
      <h2 className="project-title">Projects</h2>
      <p className="project-subtitle">A selection of my Data Engineering and Machine Learning work.</p>

      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
            </a>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
