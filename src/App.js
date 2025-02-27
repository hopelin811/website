import React from 'react';
import './App.css';
import hopeImage from './Images/hope.jpeg';

function Logo() {
  return (
    <div className="logo">
      <span className="logo-text">HL</span>
    </div>
  );
}

function MenuTab() {
  return (
    <div className="menu-tab">
      <a href="/blogs" className="menu-link">BLOGS</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Logo />
      <MenuTab />
      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">HOPE LIN</h1>
          <div className="subtitle-container">
            <a href="https://www.linkedin.com/in/hope-lin/" className="social-link">LinkedIn</a>
            <span className="divider">•</span>
            <a href="tel:4157228004" className="social-link">415.722.8004</a>
          </div>
          <div className="tagline">
            <span> Software Engineer</span>
            <span className="separator"></span>
            <span>Amazon</span>
          </div>
          <div className="profile-image-container">
            <img 
              src={hopeImage} 
              alt="Hope Lin" 
              className="profile-image"
            />
          </div>
        </section>

        <section className="work-section">
          <div className="section-header">
            <h2>Selected Work</h2>
            <span className="year">2024</span>
          </div>
          <div className="work-grid">
            <div className="work-item">
              <div className="work-image"></div>
              <h3>AWS Infrastructure</h3>
              <p>Cloud Architecture</p>
            </div>
            <div className="work-item">
              <div className="work-image"></div>
              <h3>E-Commerce Platform</h3>
              <p>Full Stack Development</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-header">
            <h2>About</h2>
          </div>
          <div className="about-content">
            <p className="large-text">
              Creative courage fuels winning solutions. 
              I help companies find what makes them unique and 
              capture that story through code.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="section-header">
            <h2>Let's Work Together</h2>
          </div>
          <div className="contact-content">
            <a href="mailto:hopelin0811@gmail.com" className="contact-link">Email Me</a>
            <a href="https://github.com/hopelin811" className="contact-link">GitHub</a>
            <a href="https://www.linkedin.com/in/hope-lin/" className="contact-link">LinkedIn</a>
          </div>
        </section>
      </main>
    </div>git remote add origin https://github.com/hopelin811/website.git
git branch -M main
git push -u origin main
  );
}

export default App;
