import React from 'react';
import './style.css';
import 'animate.css';
import Vigesh from './Vigesh.js';

export default function App() {
  let arr = [
    'Intersteller',
    'Oppenheimer',
    'Dark Knight',
    'Shawshank Redemption',
    'After',
  ];

  return (
    <div>
      <div class="wrapper">
        <h1 className="nine animate__animated animate__backInUp">
          React Assignment
        </h1>
        <p className="ten animate__animated animate__bounceInRight">
          My favourite Movies
        </p>
        <Vigesh movie={arr} />
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
        <div>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  );
}
