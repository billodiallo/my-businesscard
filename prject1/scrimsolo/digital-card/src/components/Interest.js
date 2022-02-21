import React from 'react';
import styleinterest from '../styles/Interest.module.css';

function Interest() {
  return (
    <main className={styleinterest.interest}>
      <h1 className={styleinterest.header1}>Interest</h1>
      <p className={styleinterest.text1}>
        Web development, React, RoR,databases
      </p>
    </main>
  );
}

export default Interest;
