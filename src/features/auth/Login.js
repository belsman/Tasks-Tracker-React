import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import style from './auth.module.css';

export default () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = (value) => {
    return (e) => {
      setToggle(value);
      document.querySelectorAll(`.${style.tabButtons}`)
        .forEach( btn => btn.classList.remove(`${style.active}`));
      e.target.classList.add(`${style.active}`);
    }
  }
  return (
    <>
      <header className={style.nav}>
        <span className="h2">Tasks Tracker</span>
      </header>
      <section className={style.section}>
        <div className={style.tab}>
          <button className={style.tabButtons} onClick={toggleHandler(true)}>Login</button>
          <button className={style.tabButtons} onClick={toggleHandler(false)}>Register</button>
        </div>

        {toggle ? <LoginForm /> : <RegistrationForm />}
      </section>
    </>
  )
}
