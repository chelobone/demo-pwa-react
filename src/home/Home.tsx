import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Home = () => {
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Navigate to customer info
        </a>
      </header>
    </div>
    );
}

export default Home;
