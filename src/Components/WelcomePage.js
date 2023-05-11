import React from 'react';
import './App.css';

function WelcomePage({handleClick}) {
  return (
    <div className="welcome-page">
      <h1 className="heading">Welcome to Prestige Time Pieces</h1>
      <p className="paragraph">Explore our collection of watches and find your perfect timepiece.</p>
      <ul className="list">
        <li>Over 1000 different models to choose from</li>
        <li>Free shipping on all orders</li>
        <li>24/7 customer support</li>
      </ul>
      <button className="button" onClick={handleClick}>Shop Now</button>
    </div>
  );
}

export default WelcomePage;


