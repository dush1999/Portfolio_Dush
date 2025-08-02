import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-heading">KNOW ME BETTER</h2>

      <div className="about-card top-card">
        <img src="/Dush1.jpeg" alt="Dushyanth Asrani Gopal" className="about-photo" />
        <div className="about-header-text">
          <h2 className="about-name">Dushyanth Asrani Gopal</h2>
          <p className="about-title">Software & Data Engineer | ML & Analytics Enthusiast</p>
          <div className="about-contact-wrapper">
            <p className="about-contact">📧 dasranigopal@gmail.com</p>
            <p className="about-contact">📞 +1 813-568-5536</p>
            <p className="about-contact">🌎 Dallas, Texas, United States</p>
          </div>
        </div>
      </div>

      <div className="about-card bottom-card">
        <p>
          I’m Dushyanth Asrani Gopal, an M.S. student in Artificial Intelligence and Business Analytics at the University of South Florida, passionate about leveraging data for impact.
        </p>
        <p>
          With over 3 years of experience at Accenture and Cognizant, I’ve built scalable Snowflake data warehouses, optimized SQL procedures, automated SAP BRF+ workflows, and developed Python-based ETL pipelines on AWS.
        </p>
        <p>
          In the U.S., I’ve contributed to connected vehicle research by designing real-time Tableau dashboards. Currently, at Tenet Healthcare, I’m working as a Data Engineer Intern, building scalable GCP pipelines using BigQuery, Airflow, and Python to automate healthcare data ingestion and reporting.
        </p>
        <p>
          My interests lie in data engineering, analytics, and machine learning — using modern cloud platforms to drive reliable, actionable insights from data.
        </p>
      </div>
    </section>
  );
}

export default About;
