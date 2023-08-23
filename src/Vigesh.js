import React from 'react';
import './style.css';
import 'animate.css';
import DateTime from './DateTime';

export default function Vigesh(props) {
  return (
    <>
      <ul className="one animate__animated animate__fadeInTopLeft">
        {props.movie.map((movie, index) => {
          return (
            <li className="two" key={index}>
              {movie}
            </li>
          );
        })}
      </ul>
      <DateTime />
    </>
  );
}
