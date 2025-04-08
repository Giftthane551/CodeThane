import React from 'react';
import './CardGrid.css';

const Card = ({ title, description }) => (
  <div className="cardA">
    <h2>{title}</h2>
    <div className="card-content">
      <p>{description}</p>
      <br></br>
      <button className="card-button">Apply</button>
    </div>
  </div>
);

const CardGrid = () => {
  const cards = [
    { title: 'Apartment/Flats Name', description: 'Fully Booked' },
    { title: 'Apartment/Flats Name', description: '1 Bed Left.' },
    { title: 'Apartment/Flats Name', description: 'Available.' },
    // Add more cards as needed
  ];

  return (
  <div className='Grid-Container'>
    <div className="card-grid">
      <h1>Hello Apartments</h1>
        <br></br>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  </div>

  );
};

export default CardGrid;
