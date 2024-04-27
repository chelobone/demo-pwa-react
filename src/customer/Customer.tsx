import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Customer = () => {
    console.log(process.env);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Información de cliente actualizada v4
                </p>
            </header>
        </div>
    );
}

export default Customer;
