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
    <p className="title-line">Master's Student in AI at USF  </p>
    <p className="tagline"> Specializing in Analytics and Machine Learning </p>
    <p className="title-line">  Data Engineer Inter/Co-op @ Tenet Health</p>
    <p className="title-line">  Former Student Research Assitant @USF CUTR(ACME)</p>
    <p className="title-line">  Former Data Engineer/Analyst @Accenture @Cognizant</p>

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
