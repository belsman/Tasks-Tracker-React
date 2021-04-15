import React from 'react';

const Running = ({ handleNextForm, handlePreviousForm }) => (
  <div>
    <p>How many km did you run today?</p>
    <button onClick={() => handleNextForm()}>Next</button>
  </div>
);

export default Running;
