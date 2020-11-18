import React from "react";

const BeyCard = ({bey}) => {
  
  return (
    <div className="card">
    <h1>{bey.name}</h1>
    <img src={bey.img} alt="beyonce"/>
    </div>
    ); 
};

export default BeyCard;
