import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Card from './components/Card';
import ProfileBarImage from './assets/ProfileBar.jpg';

const App = () => {
  const cards = [
    {
      imageUrl: ProfileBarImage,
      name: 'Dan',
      description: 'UX Developer and Designer',
    },
    {
      imageUrl: ProfileBarImage,
      name: 'Charlie',
      description: 'Web Developer',
    },
    {
      imageUrl: ProfileBarImage,
      name: 'Tammy',
      description: 'Technical Writer',
    },
  ];

  return (
    <div>
      <Header />
      <Introduction />
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            name={card.name}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;