// Grid.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Grid.css'

const Grid = () => {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    if (id === 2) {
      navigate('/HotelGrid'); // Navigate to the Contact page when button ID is 2
    } if (id === 3) {
        navigate('/LodgeGrid'); // Navigate to the Contact page when button ID is 3
      }
      if (id === 1) {
        navigate('/StudentGrid'); // Navigate to the Contact page when button ID is 1
      }
      if (id === 4) {
        navigate('/CardGrid'); // Navigate to the Contact page when button ID is 4
      }
    // You can add other button IDs and their corresponding navigation here if needed
  };

  const buttons = [
    { id: 1, label: 'Student Accommodation', imageUrl: 'pexels-yankrukov-8199169.jpg' },
    { id: 2, label: 'Hotel', imageUrl: 'pexels-bohlemedia-2288281.jpg' },
    { id: 3, label: 'Lodge', imageUrl: 'Maungani.jpg' },
    { id: 4, label: 'Apartments/Flats', imageUrl: 'Apartments.png' },
  ];

  return (
    <div className='Grid-Background'>
      <div className="button-grid">
        {buttons.map(button => (
          <button
            key={button.id}
            className="grid-button"
            style={{ backgroundImage: `url(${button.imageUrl})` }}
            onClick={() => handleButtonClick(button.id)} // Attach click handler
          >
            <span className="button-label">{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Grid;
