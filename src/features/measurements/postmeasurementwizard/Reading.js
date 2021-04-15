import React, { useState } from 'react';

const Reading = ({ handleNextForm, handlePreviousForm, addDataPoint }) => {

  const [duration, setDuration] = useState(0.0);

  const submitValueNextHandler = () => {
    const dataPoint = { 'reading': duration };
    addDataPoint(dataPoint);
    return handleNextForm();
  };

  return (
    <div>
      <h4 className="prompt">READING</h4>
      <input type="number" name="reading" value={duration} onChange={e => setDuration(e.target.value)} />
      <button onClick={() => handlePreviousForm()}>Previous</button>
      <button onClick={submitValueNextHandler}>Next</button>
    </div>
  );
}

export default Reading;
