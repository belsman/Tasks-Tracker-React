import React, { useState } from 'react';
import FooterNavigation from '../../../FooterNavigation';
import Title from './Title';
import style from './addMeasurement.module.css';

const Running = ({ handleNextForm, handlePreviousForm, addDataPoint }) => {

  const [duration, setDuration] = useState(0.0);

  const submitValueNextHandler = () => {
    addDataPoint('running', duration);
    return handleNextForm();
  };

  return (
    <div className={style.wizardWrapper}>
      <FooterNavigation />
      <Title />
      <header className={style.recordLabel}>Running</header>
        <div className={style.recordForm}>
          <input type="number" name="running" value={duration} onChange={e => setDuration(e.target.value)} />
        </div>
        <div className={style.wizardSliders}>
          <button className={style.prevBtn} type="button" onClick={() => handlePreviousForm()}>Prev</button>
          <button className={style.nextBtn} type="button" onClick={submitValueNextHandler}>Next</button>
        </div>
    </div>
  );
}

export default Running;
