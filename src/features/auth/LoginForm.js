import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from './authSlice';
import style from './auth.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);
    dispatch(loginUserAsync(bodyFormData));
  };

  return (
    <form className={style.formELement} name="registration-form" method="POST" onSubmit={submitHandler}>
      <label className={style.formLabel} htmlFor="username">
        Username
        <input
          className={style.formGroup}
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
        />
      </label>
      <label className={style.formLabel} htmlFor="password">
        Password
        <input
          className={style.formGroup}
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />
      </label>
      <button className={style.btn} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
