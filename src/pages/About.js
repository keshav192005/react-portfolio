import React from 'react';

// About page component
export default function About() {
  return (
    <div className="about">
      {/* Page Heading */}
      <h2 style={{ fontSize: '2rem', lineHeight: '3', color: 'black' }}>About Me</h2>

      {/* Headshot Image with border radius and ambient glow */}
      <img
        src="/assets/me.jpeg"
        alt="My headshot"
        style={{
          width: '400px',
          borderRadius: '10px', // Softens image corners
          boxShadow: '0 0 20px 10px rgba(255, 255, 255, 255)', // Bright white glow
        }}
      />

      {/* Introductory Paragraph */}
      <p style={{ fontSize: '1rem', lineHeight: '3', color: 'white' }}>
        Hi, I’m Keshav Ratnia, a passionate software developer dedicated to building intuitive and efficient web applications. 
        With a strong foundation in modern technologies and a love for problem-solving, I strive to create digital experiences 
        that make a difference. Welcome to my portfolio!
      </p>

      {/* Resume Download Button with hover effect */}
      <a
        href="/assets/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          border: '2px solid white',
          borderRadius: '8px',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.3)',
          textAlign: 'center',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginTop: '20px',
          transition: 'background-color 0.3s ease', // Smooth transition on hover
        }}
        // Inline hover effect using event handlers
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'}
      >
        View My Resume
      </a>
    </div>
  );
}
