import React from "react";

interface CardProps {
  id: string;
  // Add any other properties of the card here
}

const Card: React.FC<CardProps> = ({ id }) => {
  return (
    <div>
      <h3>Card ID: {id}</h3>
      {/* Render other card properties here */}
    </div>
  );
};

export default Card;
