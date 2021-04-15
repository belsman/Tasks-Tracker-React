import React from 'react';

const Finished = ({ handlePreviousForm }) => (
  <div>
    <button onClick={() => handlePreviousForm()}>Previous</button>
    <button onClick={() => 'Next'}>Submit</button>
  </div>
);

export default Finished;
