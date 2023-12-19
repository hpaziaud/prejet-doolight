import react from 'react';
import React, { useState } from 'react';

function Formulair() {
  
    const bouton = { etat: true };
    const logins= ["julien","langlace"];
    const exo29identifiant = "snake"
    const exo29passwrd = "1234"
   
   
    return (
     
        
        <header className="App-header">
      <form method="post" action="">
    
  <ls>
    <label htmlFor="identifiant" >
      identifiant :
    </label>
    <input type="text" id="identifiant" name="nom" required />
  
    <label htmlFor="password" >
      password :
    </label>
    <input type="text" id="password" name="prenom" required />
  
    <input type="submit" value="submit" />
    </ls>
  </form>
  <div>l'identifiant est : {exo29identifiant}, 
  le password est : {exo29passwrd} </div>
  
  
  <div>
    {bouton.etat ? (
      <p>Le bouton est activé</p>
    ) : (
      <p>Le bouton est désactivé
        <ul>
          {
            logins.map(login=> (
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
   
      
    ); 





}
export default Formulair;