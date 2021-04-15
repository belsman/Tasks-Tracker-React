import React from 'react';

const Coding = ({ handleNextForm }) => (
  <div>
    <p>How many challenges did you solve today!</p>
    <button onClick={() => handleNextForm()}>Next</button>
  </div>
);

export default Coding;
