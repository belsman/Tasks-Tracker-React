import React, { useState } from 'react';

const Coding = ({ handleNextForm, handlePreviousForm, addDataPoint }) => {
  const [duration, setDuration] = useState(0.0);

  const submitValueNextHandler = () => {
    const dataPoint = { 'coding': duration };
    addDataPoint(dataPoint);
    return handleNextForm();
  };

  return (
    <div>
      <h4 className="prompt">CODING</h4>
      <input type="number" name="coding" value={duration} onChange={e => setDuration(e.target.value)} />
      <button onClick={() => handlePreviousForm()}>Previous</button>
      <button onClick={submitValueNextHandler}>Next</button>
    </div>
  );
};

export default Coding;
