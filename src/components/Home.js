import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-box">
        <div className="home-image">
          <img src="/Dush.jpg" alt="Dushyanth Asrani Gopal" />
        </div>
        <div className="home-text">
          <h2 className="section-heading">
            Hello, I'm <span className="highlight">Dushyanth Asrani</span>
          </h2>
          <p className="title-line">Master's Student in AI at USF</p>
          <p className="tagline">Specializing in Analytics and Machine Learning</p>
          <p className="title-line">Data Engineer Intern/Co-op @ Tenet Health</p>
          <p className="title-line">Former Research Assistant @USF CUTR (ACME)</p>
          <p className="title-line">Former Data Engineer/Analyst @ Accenture / Cognizant</p>

          <div className="home-buttons">
            <a href="https://github.com/dush1999/" className="btn github" target="_blank" rel="noopener noreferrer">
              View GitHub
            </a>
            <a href="https://www.linkedin.com/in/dushyanth-asrani/" className="btn github" target="_blank" rel="noopener noreferrer">
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
