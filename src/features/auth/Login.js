import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import style from './auth.module.css';
import override from '../measurements/styledComponent';

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const toggleHandler = (value) => (e) => {
    setToggle(value);
    document.querySelectorAll(`.${style.tabButtons}`)
      .forEach((btn) => btn.classList.remove(`${style.active}`));
    e.target.classList.add(`${style.active}`);
  };

  if (status === 'loading') {
    return (
      <div className="loader">
        <ClipLoader color="#0000ff" css={override} size={150} />
      </div>
    );
  }

  return (
    <>
      <header className={style.nav}>
        <span className="h2">Tasks Tracker</span>
      </header>
      <section className={style.section}>
        <div className={style.tab}>
          <button type="button" className={style.tabButtons} onClick={toggleHandler(true)}>Login</button>
          <button type="button" className={style.tabButtons} onClick={toggleHandler(false)}>Register</button>
        </div>
        { error && <div className="error">Invalid Username or Password</div>}
        {toggle ? <LoginForm /> : <RegistrationForm />}
      </section>
    </>
  );
};

export default Login;
