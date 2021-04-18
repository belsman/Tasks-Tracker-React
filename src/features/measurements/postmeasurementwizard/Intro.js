import React from 'react';
import Title from './Title';

import style from './addMeasurement.module.css';

const Intro = ({ handleNextForm }) => (
  <div className={style.intro}>
    <Title />
    <div className={style.introText}>
      <p>
        Welcome to the Task Tracker App! Let's add the number of hours expended 
        on your pre-determined daily routines!
      </p>
    </div>
    <button type="button" className={style.introBtn} onClick={() => handleNextForm()}>Go</button>
  </div>
);

export default Intro;
