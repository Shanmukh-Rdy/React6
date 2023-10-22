import React from 'react'; 
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header bg-primary text-white py-5 text-center">
        <h1 className="name">Shanmukha Reddy V</h1>
        <p className="job-title">Full Stack Developer</p>
      </header>

      <section className="about py-5">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
          I specialize in web development, with expertise in JavaScript, React, Node.js, and database management. I'm driven by the opportunity to create innovative solutions and make a positive impact on the digital world.
          </p>
        </div>
      </section>

      <section className="contact py-5 bg-primary text-white">
        <div className="container">
          <h2 className="section-title text-white">Contact Me</h2>
          <p>Email: shanmukhareddy51@gmail.com</p>
          <p>Contact: +91 7702273678</p>
          <p>GitHub: <a href="https://github.com/Shanmukh-Rdy" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        </div>
      </section>
    </div>
  );
}

export default App;