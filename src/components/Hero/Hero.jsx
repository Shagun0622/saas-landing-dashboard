import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Perfect Circles */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="hero-container">
        <h1 className="hero-heading">
          Beautiful Landing Page<br />Design for You
        </h1>

        <p className="hero-subtitle">
          A good design is not only aesthetically pleasing, but also<br />
          functional. It should be able to solve the problem
        </p>

        <button className="hero-button">
          Download Template
        </button>
      </div>

      {/* Gradient Wave Background - Outside hero-container */}
      <div className="dashboard-wave-bg">
        <svg
          className="wave-bg-svg"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hourglassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF9898" />
              <stop offset="100%" stopColor="#8054FF" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#hourglassGradient)"
            d="M0,0 C360,120 1080,120 1440,0 L1440,500 C1080,380 360,380 0,500 Z"
          />
        </svg>
      </div>

      <div className="hero-container dashboard-container">
        <div className="dashboard-preview">
          {/* Pink gradient corner - bottom left */}
          <div className="gradient-corner gradient-left"></div>
          {/* Purple gradient corner - bottom right */}
          <div className="gradient-corner gradient-right"></div>
          
          <div className="preview-grid">
            {/* Row 1 - 3 cards */}
            <div className="preview-card card-tasks">
              <div className="card-icon-squid">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="12" cy="10" r="3" fill="#666"/>
                  <circle cx="20" cy="10" r="3" fill="#666"/>
                  <circle cx="16" cy="20" r="3" fill="#666"/>
                  <line x1="12" y1="10" x2="16" y2="20" stroke="#666" strokeWidth="2"/>
                  <line x1="20" y1="10" x2="16" y2="20" stroke="#666" strokeWidth="2"/>
                </svg>
              </div>
              <div className="task-list">
                <div className="task-item">
                  <div className="checkbox"></div>
                  <div className="task-lines">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                  </div>
                </div>
                <div className="task-item">
                  <div className="checkbox"></div>
                  <div className="task-lines">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                  </div>
                </div>
                <div className="task-item">
                  <div className="checkbox"></div>
                  <div className="task-lines">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                  </div>
                </div>
                <div className="task-item">
                  <div className="checkbox"></div>
                  <div className="task-lines">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="preview-card card-chart">
              <div className="card-mini-header">
                <div className="header-lines">
                  <div className="h-line"></div>
                  <div className="h-line"></div>
                </div>
                <div className="header-icon"></div>
              </div>
              <div className="donut-container">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="40" fill="none" stroke="#2a2a35" strokeWidth="16"/>
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="40" 
                    fill="none" 
                    stroke="url(#donutGradient)" 
                    strokeWidth="16"
                    strokeDasharray="180 251"
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                  />
                  <defs>
                    <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f093b0" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="preview-card card-users">
              <div className="card-mini-header">
                <div className="header-lines">
                  <div className="h-line"></div>
                  <div className="h-line"></div>
                </div>
                <div className="header-icon"></div>
              </div>
              <div className="user-list">
                <div className="user-row">
                  <div className="user-avatar avatar-pink"></div>
                  <div className="user-info">
                    <div className="info-line"></div>
                    <div className="info-line short"></div>
                  </div>
                </div>
                <div className="user-row">
                  <div className="user-avatar avatar-yellow"></div>
                  <div className="user-info">
                    <div className="info-line"></div>
                    <div className="info-line short"></div>
                  </div>
                </div>
                <div className="user-row">
                  <div className="user-avatar avatar-purple"></div>
                  <div className="user-info">
                    <div className="info-line"></div>
                    <div className="info-line short"></div>
                  </div>
                </div>
                <div className="user-row">
                  <div className="user-avatar avatar-gray"></div>
                  <div className="user-info">
                    <div className="info-line"></div>
                    <div className="info-line short"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - 3 cards */}
            <div className="preview-card card-small">
              <div className="avatar-bottom"></div>
              <div className="bottom-text"></div>
            </div>

            <div className="preview-card card-bars">
              <div className="bar-chart">
                <div className="bar" style={{height: '30%'}}></div>
                <div className="bar" style={{height: '50%'}}></div>
                <div className="bar" style={{height: '65%'}}></div>
                <div className="bar" style={{height: '80%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
              </div>
            </div>

            <div className="preview-card card-empty"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;