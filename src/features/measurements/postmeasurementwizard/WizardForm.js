import React, { useState } from 'react';
import FooterNavigation from '../../../FooterNavigation';
import Title from './Title';
import style from './addMeasurement.module.css';

const WizardForm = ({
  name, nextForm, prevForm, addDataPoint,
}) => {
  const [duration, setDuration] = useState(0.0);

  const submitValueNextHandler = () => {
    addDataPoint(name, duration);
    setDuration(0.0);
    return nextForm();
  };

  return (
    <div>
      <FooterNavigation />
      <Title />
      <header className={style.recordLabel}>{name}</header>
      <div className={style.recordForm}>
        <input type="number" name={name} value={duration} onChange={e => setDuration(e.target.value)} />
      </div>
      <div className={style.wizardSliders}>
        <button className={style.prevBtn} type="button" onClick={() => prevForm()}>Prev</button>
        <button className={style.nextBtn} type="button" onClick={submitValueNextHandler}>Next</button>
      </div>
    </div>
  );
};

export default WizardForm;
