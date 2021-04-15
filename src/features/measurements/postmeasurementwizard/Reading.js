import React from 'react';

const Reading = ({ handleNextForm }) => (
  <div>
    <p>How many chapters did you cover today?</p>
    <button onClick={() => handleNextForm()}>Next</button>
  </div>
);

export default Reading;
