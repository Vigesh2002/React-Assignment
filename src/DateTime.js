import React from 'react';
import './style.css';
import 'animate.css';
import Messege from './Messege';

export default function DateTime() {
  const d = new Date();

  return (
    <>
      <h3 className="three animate__animated animate__flip">{d.toString()}</h3>
      <Messege />
    </>
  );
}
