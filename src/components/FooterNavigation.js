import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  AddMeasurementIcon, ListMeasurementIcon, ProgressIcon, LogOutIcon,
} from './Icons';

import { logout } from '../features/auth/authSlice';
import style from './footerNav.module.css';

const FooterNavigation = () => {
  const checkActiveLink = (path) => (match, location) => location.pathname === path;
  const dispatch = useDispatch();

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

        <NavLink to="#" onClick={() => dispatch(logout())}>
          <LogOutIcon />
        </NavLink>
      </div>
    </nav>
  );
};

export default FooterNavigation;
