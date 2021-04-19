import React from 'react';
//import { Link } from 'react-router-dom';
import { AddMeasurementIcon, ListMeasurementIcon, ProgressIcon, MoreIcon } from './Icons';

import style from './footerNav.module.css';

const FooterNavigation = () => (
  <nav className={style.nav}>
    <div className={style.navLinks}>
      <a href="">
        <AddMeasurementIcon />
      </a>

      <a href="" className="navActive">
        <ListMeasurementIcon />
      </a>

      <a href="">
        <ProgressIcon />
      </a>

      <a href="">
        <MoreIcon />
      </a>
    </div>
  </nav>
);

export default FooterNavigation;
