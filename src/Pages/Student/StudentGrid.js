import React from 'react';
import './StudentGrid.css';

const Card = ({ title, description }) => (
  <div className="cardS">
    <h2>{title}</h2>
    <div className="card-content">
      <p>{description}</p>
      <br></br>
      <button className="card-button">Apply</button>
    </div>
  </div>
);

const StudentGrid = () => {
  const cards = [
    { title: 'Student Accommodation', description: 'Fully Booked' },
    { title: 'Student Accommodation', description: '1 Bed Left.' },
    { title: 'Student Accommodation', description: 'Available.' },
    // Add more cards as needed
  ];

  return (
    <div className="card-grid">

        <h1>Hello Student Accommodation</h1>
        <br></br>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default StudentGrid;
