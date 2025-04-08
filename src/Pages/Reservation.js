// About.js
import React from "react";
import Grid from "./Grid";

const Reservation = () => {
  return (
    <div>
        <div  className="Header-Welcome">
        <h2>Welcome To MSA(My System Accommodation)</h2>
       
        </div>

        <div className="textf">
         <p >Select Accommodation Below You Would like to Apply For</p>
         </div>
        
      <Grid/>
    </div>
  );
};

export default Reservation;