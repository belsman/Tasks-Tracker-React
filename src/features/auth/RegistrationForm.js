import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAsync } from './authSlice';

export default () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    dispatch(registerUserAsync());
  };

  return (
    <form name="registration-form" onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" value={username}
       onChange={e => setUsername(e.target.value)} placeholder="username"
       required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={email}
       onChange={e => setEmail(e.target.value)} placeholder="email"
       required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={password}
       onChange={e => setPassword(e.target.value)} placeholder="password"
       required/>

      <button type="submit">Register</button>
    </form>
  );
}
