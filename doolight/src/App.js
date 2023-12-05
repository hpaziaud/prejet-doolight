import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const trailRef = useRef(null);

  const handleMouseMove = (event) => {
    
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.background = 'yellow' ;
    trail.style.left = `${event.clientX}px`;
    trail.style.top = `${event.clientY}px`;

    trailRef.current.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 1000);
  };

  const handleMouseOver = (event) => {
    const randomColor = getRandomColor();
    event.target.style.color = randomColor;
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div ref={trailRef} className="trail-container"></div>
        <label htmlFor="nom" onMouseOver={handleMouseOver}>
          Nom :
        </label>
        <input type="text" id="nom" name="nom" required />

        <label htmlFor="prenom" onMouseOver={handleMouseOver}>
          Prénom :
        </label>
        <input type="text" id="prenom" name="prenom" required />

        <label htmlFor="age" onMouseOver={handleMouseOver}>
          Âge :
        </label>
        <input type="number" id="age" name="age" required />
        <input type="submit" value="Soumettre" />
      </header>
    </div>
  );
}

export default App;