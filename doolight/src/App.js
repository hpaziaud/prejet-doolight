import React, { useRef, useState } from 'react';
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
    trail.style.background = 'yellow';
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



  const bouton = { etat: true };
  const logins = ["julien", "langlace"];
  const exo29identifiant = "snake"
  const passwrd = "123456"
  



  // État initial du formulaire
  const [formData, setFormData] = useState({
    message1: '',
    message2: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // Gestionnaire de saisie pour mettre à jour l'état du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Comparaison avec la constante
    if (formData.message1 === passwrd) {

      console.log('Les données du formulaire sont égales à la constante.');
      setIsLoggedIn(true);
    } else {
    
      console.log('Les données du formulaire ne sont pas égales à la constante.');
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div ref={trailRef} className="trail-container"></div>
        <form onSubmit={handleSubmit} action="/your-post-endpoint">

          <ls>
            <label htmlFor="identifiant" onMouseOver={handleMouseOver}>
              identifiant :
            </label>
            <input
              type="text"
              name="message1"
              value={formData.message1}
              onChange={handleChange}
              required />

            <label htmlFor="password" onMouseOver={handleMouseOver}>
              password :
            </label>
            <input
              type="text"
              name="message2"
              value={formData.message2}
              onChange={handleChange} required />





            <button type="submit">Soumettre</button>
          </ls>
        </form>
        <div>l'identifiant est : {exo29identifiant} </div>

        <div>
          {isLoggedIn ? (
            <h1>bienvenue lutilisateur est connecter !</h1>
          ) : (<h1> veuillier vous connecter</h1>)



          }

        </div>



        <div>
          {bouton.etat ? (
            <p>Le bouton est activé</p>
          ) : (
            <p>Le bouton est désactivé
              <ul>
                {
                  logins.map(login => (
                    <li>
                      {login}
                    </li>
                  ))
                }
              </ul>
            </p>
          )}
        </div>





      </header>
    </div>

  );
}

export default App;