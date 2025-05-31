import React from 'react';

export default function Services() {
  const services = [
    { id: 1, name: 'Web Development', icon: '🌐', description: 'Building responsive and high-performance websites.' },
    { id: 2, name: 'Mobile App Development', icon: '📱', description: 'Creating sleek and user-friendly mobile applications.' },
    { id: 3, name: 'UI/UX Design', icon: '🎨', description: 'Designing intuitive interfaces that delight users.' },
  ];

  return (
    <div
      className="services"
      style={{
        padding: '2rem',
        maxWidth: '700px',
        margin: 'auto',
        backgroundColor: '#f0f8ff',
        borderRadius: '12px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#007acc' }}>
        Services I Offer
      </h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map(({ id, name, icon, description }) => (
          <li
            key={id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              padding: '1rem',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <span
              style={{
                fontSize: '2rem',
                marginRight: '1rem',
              }}
              aria-label={name}
              role="img"
            >
              {icon}
            </span>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#333' }}>{name}</h3>
              <p style={{ margin: 0, color: '#555' }}>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
