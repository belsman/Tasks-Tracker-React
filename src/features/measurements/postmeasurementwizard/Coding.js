import React from 'react';

const Coding = ({ handleNextForm, handlePreviousForm }) => (
  <div>
    <p>How many challenges did you solve today!</p>
    <button onClick={() => handlePreviousForm()}>Previous</button>
    <button onClick={() => handleNextForm()}>Next</button>
  </div>
);

export default Coding;
