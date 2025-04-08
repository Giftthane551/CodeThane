import React from 'react';
import './About.css';

const About = () => {
  const coFounders = [
    {
      id: 1,
      name: 'Phathutshedzo Netshifhefhe',
      title: 'CEO & Co-Founder',
      imageUrl: 'Pexel.jpg',
      bio: 'Phathutshedzo has over 20 years of experience in the tech industry and is passionate about innovation and leadership.',
    },
    {
      id: 2,
      name: 'Fulufhelo Matshaba',
      title: 'COO & Co-Founder',
      imageUrl: 'https://github.com/TechswatDevelopers/Media/raw/main/IMG-20230418-WA0029.jpg',
      bio: 'Jane is a tech enthusiast with a deep knowledge of software engineering and a passion for building scalable systems.',
    },
   
    // Add more co-founders as needed
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <h2>Basic Intelligent Systems</h2>
      <p>BIS is a software company specializing in accommodation management through its platform called My System Accommodation (MSA). The MSA system enables individuals to register for accommodation and book their stay at various types of properties, including student accommodations, hotels, lodges, and apartments/flats.</p>
      <p>Meet the co-founders who are driving our vision forward.</p>
      <div className="co-founders-grid">
        {coFounders.map(coFounder => (
          <div key={coFounder.id} className="co-founder-card">
            <img src={coFounder.imageUrl} alt={`${coFounder.name}`} className="co-founder-image" />
            <h2 className="co-founder-name">{coFounder.name}</h2>
            <h3 className="co-founder-title">{coFounder.title}</h3>
            <p className="co-founder-bio">{coFounder.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
