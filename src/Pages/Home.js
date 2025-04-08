import React from 'react';
import "../Pages/Home.css";
import Banner from '../Banner';
import  "./Sign.css"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='Container'>
      <header>
        <h1>Welcome to My System Accommodation</h1>
        <p>Allow Us To Host Your Accommodation With Us , Your Home Is Detemined Here!</p>
    
      </header>
    
      <Banner/>
       <br></br>
      
       
       
    
    
        <p >© 2024 My Website. All rights reserved.</p>
   
    </div>
  );
};


export default Home;