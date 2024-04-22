import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const NoPage = () => {
    console.log(process.env);
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Página no encontrada.
        </p>
      </header>
    </div>
    );
}

export default NoPage;
