import React from 'react';
import './LodgeGrid.css';

const Card = ({ title, description }) => (
  <div className="cardL">
    <h2>{title}</h2>
    <div className="card-content">
      <p>{description}</p>
      <br></br>
      <button className="card-button">Apply</button>
    </div>
  </div>
);

const LodgeGrid = () => {
  const cards = [
    { title: 'Lodge Name', description: 'Fully Booked' },
    { title: 'Lodge Name', description: '1 Bed Left.' },
    { title: 'Lodge Name', description: 'Available.' },
    // Add more cards as needed
  ];

  return (
    <div className="card-grid">

        <h1>Hello Lodges</h1>
        <br></br>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default LodgeGrid;
