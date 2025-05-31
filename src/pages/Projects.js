import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      image: '/assets/project1.jpg',
      role: 'Frontend Developer',
      description:
        'Built a responsive portfolio site using React to showcase my projects and skills with smooth navigation.',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      image: '/assets/project2.jpg',
      role: 'Full Stack Developer',
      description:
        'Developed a full-stack e-commerce app with product listings, shopping cart, and secure payment integration.',
    },
    {
      id: 3,
      title: 'Task Management App',
      image: '/assets/project3.jpg',
      role: 'Lead Developer',
      description:
        'Led development of a task management tool with real-time collaboration and notifications using Firebase.',
    },
  ];

  return (
    <div className="projects" style={{ padding: '2rem',fontSize: '0.8rem', lineHeight: '3', color: 'black' }}>
      <h2 style={{ marginBottom: 'rem', fontSize: '3rem' }}>Projects</h2>
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {projects.map(({ id, title, image, role, description }) => (
          <div
            key={id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '0.5rem',
              width: '400px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={image}
              alt={title}
              style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
            />
            <h3>{title}</h3>
            <p>
              <strong>Role:</strong> {role}
            </p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
