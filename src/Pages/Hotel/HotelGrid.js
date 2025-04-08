import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HotelGrid.css';

const Card = ({ title, description ,Location }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/Checkin'); // Replace '/next-page' with the actual path you want to navigate to
  };

  return (
    <div className="cardH">
      <h2>{title}</h2>
      <div className="card-content">
        <p>{description}</p>
        <p>{Location}</p>
        <br />
        <button className="card-button" onClick={handleApplyClick}>
          Apply
        </button>
      </div>
    </div>
  );
};

const HotelGrid = () => {
  const cards = [
    { title: 'MGB', description: 'Available', Location:'Location: Thohoyandou,Limpopo 0950' },
    { title: 'Accommodation Name', description: '1 Bed Left.' },
    { title: 'Accommodation Name', description: 'Available.' },
    // Add more cards as needed
  ];

  return (
    <div className="card-gridH">
      <h2>Select your Hotel Below</h2>
      <br />
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} Location={card.Location} />
      ))}
    </div>
  );
};

export default HotelGrid;
