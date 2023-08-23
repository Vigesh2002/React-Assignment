import React from 'react';
import './style.css';
import 'animate.css';

export default function Messege() {
  const d = new Date();
  let messege = '';
  if (d.getHours() >= 5 && d.getHours() <= 11 && d.getMinutes() <= 59) {
    messege = 'Good Morning, Have a nice day!';
  } else if (d.getHours() >= 12 && d.getHours() <= 15) {
    messege = 'Good Afternoon, Hope you are having a GoodDay!';
  } else if (d.getHours() >= 12 && d.getMinutes() >= 1 && d.getHours() <= 19) {
    messege = 'Good Evening, Have a cup of Tea!';
  } else {
    messege = 'Good Night, Sweet Dreams!';
  }

  return (
    <>
      <h2 className="four animate__animated animate__hinge">{messege}</h2>
    </>
  );
}
