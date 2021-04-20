import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import FooterNavigation from '../../../components/FooterNavigation';

import style from './addMeasurement.module.css';

const Intro = ({ handleNextForm }) => (
  <div>
    <FooterNavigation />
    <Title />
    <div className={style.introText}>
      <p>
        Welcome to the Task Tracker App! Let&apos;s add the number of hours expended
        on your pre-determined daily routines!
      </p>
    </div>
    <button type="button" className={style.introBtn} onClick={() => handleNextForm()}>Go</button>
  </div>
);

Intro.propTypes = {
  handleNextForm: PropTypes.func.isRequired,
};

export default Intro;
