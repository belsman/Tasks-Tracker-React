import React from 'react';

const Intro = ({ handleNextForm }) => (
  <div>
    <p>Welcome back! Let's add your measurement for today.</p>
    <button onClick={() => handleNextForm()}>Go</button>
  </div>
);

export default Intro;
