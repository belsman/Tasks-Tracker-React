import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from './authSlice';

export default () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);
    dispatch(loginUserAsync(bodyFormData));
    return;
  };

  return (
    <form name="registration-form" method="POST" onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="username"/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"/>
      <button type="submit">Login</button>
    </form>
  );
}
