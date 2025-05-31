import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home" style={{ textAlign: 'center', padding: '2rem', color: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome to My Portfolio</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>Empowering digital experiences through code.</p>
      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        I'm <strong>Keshav Ratnia</strong>, a passionate developer focused on building modern, user-friendly applications.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/about" style={buttonStyle}>About Me</Link>
        <Link to="/projects" style={buttonStyle}>My Projects</Link>
        <Link to="/contact" style={{ ...buttonStyle, backgroundColor: '#333' }}>Contact</Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  backgroundColor: '#18b8c4',
  color: '#fff',
  borderRadius: '4px',
};
