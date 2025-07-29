import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        <div className="education-card">
          <h3>M.S. in Artificial Intelligence and Business Analytics</h3>
          <h4>University of South Florida</h4>
          <p className="education-duration">Aug 2024 – May 2026 · Tampa, FL</p>
          <p className="education-info"> GPA: 3.89/4.00<p className="education-info">
            Coursework: Advanced Database, Machine Learning, statistics with R, Data Visualization, Data Warehousing, Cloud.
          </p>
          </p>
        </div>
        <div className="education-card">
          <h3>B.Tech in Electronic and Communication Engineering</h3>
          <h4>SRM Institute of Science and Technology</h4>
          <p className="education-duration">July 2017 – May 2021 · Chennai, India</p>
          <p className="education-info">
            GPA: 8.51 / 10
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
