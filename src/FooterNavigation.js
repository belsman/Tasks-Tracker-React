import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AddMeasurementIcon, ListMeasurementIcon, ProgressIcon, MoreIcon,
} from './Icons';

import style from './footerNav.module.css';

const FooterNavigation = () => {
  const checkActiveLink = path => (match, location) => location.pathname === path;

  return (
    <nav className={style.nav}>
      <div className={style.navLinks}>
        <NavLink
          to="/"
          activeClassName="navActive"
          isActive={checkActiveLink('/')}
        >
          <AddMeasurementIcon />
        </NavLink>

        <NavLink
          to="/records"
          activeClassName="navActive"
          isActive={checkActiveLink('/records')}
        >
          <ListMeasurementIcon />
        </NavLink>

        <NavLink to="#">
          <ProgressIcon />
        </NavLink>

        <NavLink to="#">
          <MoreIcon />
        </NavLink>
      </div>
    </nav>
  );
};

export default FooterNavigation;
