import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Home = () => {
  const getOnLineStatus = () =>
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
        ? navigator.onLine
        : true;

  const forceSwUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.update().then(() => {

        });
      });
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {getOnLineStatus()? "Online":"Offline"}
        </p>
        <label hidden={true} id="btnActualizar">Existe una nueva versión de la app. Favor cierre todas las pestañas asociadas y vuelva a cargar la app.</label>
      </header>
    </div>
  );


}

export default Home;
