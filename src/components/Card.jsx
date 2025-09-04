import React from 'react';
import '../styles/Card.css';
import ProgressBarImage from '../assets/ProfileBar.jpg';

const Card = ({ imageUrl = ProfileBarImage, name, description }) => {
  const cardClass = 'card';

  return (
    <div className={cardClass}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;