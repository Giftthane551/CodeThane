import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [index, setIndex] = useState(0);
  const banners = [
    'Welcome to Basic Intelligent Systems',
    ' Get Your Accommodation ',
    ' Sign Up Now ',
    ' Contact us for more info!',
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

export default Banner;
