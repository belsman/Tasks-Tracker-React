import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

export default () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button onClick={() => setToggle(true)}>Login</button>
      <button onClick={() => setToggle(false)}>Register</button>

      {toggle ? <LoginForm /> : <RegistrationForm />}
    </>
  )
}
