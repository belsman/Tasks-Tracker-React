import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FooterNavigation from '../../../components/FooterNavigation';
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

  const increment = () => setDuration(duration + 1);

  const decrement = () => (duration - 1 < 0 ? duration : setDuration(duration - 1));

  return (
    <div>
      <FooterNavigation />
      <Title />
      <header className={style.recordLabel}>{name}</header>
      <div className={style.recordForm}>
        <button className={style.selectHour} type="button" onClick={decrement} disabled={duration === 0}>-</button>
        <span className={style.displayDuration}>{duration}</span>
        <button className={style.selectHour} type="button" onClick={increment}>+</button>
      </div>
      <div className={style.wizardSliders}>
        <button className={style.prevBtn} type="button" onClick={() => prevForm()}>Prev</button>
        <button className={style.nextBtn} type="button" onClick={submitValueNextHandler}>Next</button>
      </div>
    </div>
  );
};

WizardForm.propTypes = {
  name: PropTypes.string.isRequired,
  addDataPoint: PropTypes.func.isRequired,
  nextForm: PropTypes.func.isRequired,
  prevForm: PropTypes.func.isRequired,
};

export default WizardForm;
