import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAsync } from './authSlice';
import style from './auth.module.css';

export default () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);
    bodyFormData.append('email', email);
    dispatch(registerUserAsync(bodyFormData));
  };

  return (
    <form className={style.formELement} name="registration-form" onSubmit={submitHandler}>
      <label className={style.formLabel} htmlFor="username">
        Username
        <input
          className={style.formGroup}
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          required
        />
      </label>

      <label className={style.formLabel} htmlFor="email">
        Email
        <input
          className={style.formGroup}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          required
        />
      </label>

      <label className={style.formLabel} htmlFor="password">
        Password
        <input
          className={style.formGroup}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          required
        />
      </label>

      <button className={style.btn} type="submit">Register</button>
    </form>
  );
};
