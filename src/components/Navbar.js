import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'black', padding: '1rem 2rem',display: 'flex',alignItems: 'center',justifyContent: 'space-between', }}>
     <img src="/assets/logo.jpg" alt="My Logo"  style={{ width: '100px', height: '70px', }} 
      />
      <Link to="/" style={{ color: '#fff', marginLeft: '50rem' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', marginLeft: '0rem' }}>About</Link>
      <Link to="/projects" style={{ color: '#fff', marginLeft: '0rem' }}>Projects</Link>
      <Link to="/services" style={{ color: '#fff', marginLeft: '0rem' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
    </nav>
  );
} 