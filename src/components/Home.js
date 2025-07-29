    import React from 'react';
    import './Home.css';
    import myPhoto from "/Users/dushyanthasrani/Desktop/my_portfolio/my-portfolio/src/Dush.jpg";

    function Home() {
    return (
        <section id="home" className="home-section">
        <div className="home-box">
            <div className="home-image">
            <img src={myPhoto} alt="Dushyanth Asrani" />
            </div>
            <div className="home-text">
    <h2>Hello, I'm <span className="highlight">Dushyanth Asrani</span></h2>
    <p className="title-line">Software & Data Engineer</p>
    <p className="tagline"> Specializing in Analytics and Machine Learning </p>

    <div className="home-buttons">
        <a
        href="https://github.com/dush1999/"
        className="btn github"
        target="_blank"
        rel="noopener noreferrer"
        >
        View GitHub
        </a>
    </div>
    </div>
        </div>
        </section>
    );
    }

    export default Home;
