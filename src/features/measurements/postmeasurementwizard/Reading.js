import React from 'react';

const Reading = ({ handleNextForm, handlePreviousForm }) => (
  <div>
    <p>How many chapters did you cover today?</p>
    <button onClick={() => handlePreviousForm()}>Previous</button>
    <button onClick={() => handleNextForm()}>Next</button>
  </div>
);

export default Reading;
