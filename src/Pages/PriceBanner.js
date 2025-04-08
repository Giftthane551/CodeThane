
import React, { useState, useEffect } from 'react';
import './PriceBanner.css';


const PriceBanner = () => {
    const [index, setIndex] = useState(0);
    const banners = [
      '1 Adult and Children =R1,670',
      ' 2 Adults =R2,120 ',
      '2 Adults And Children =R 3,500',
      '1 Adults =R650  Per Night',
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [banners.length]);
  
    return (
      <div className="banner-container">
        <div className="banner-content">{banners[index]}</div>
      </div>
    );
  };
  
  export default PriceBanner;
  
