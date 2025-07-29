import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        color: "#fff",
      }}
    >
      <Header />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
