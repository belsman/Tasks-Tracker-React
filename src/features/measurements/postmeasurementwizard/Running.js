import React, { useState } from 'react';

const Running = ({ handleNextForm, addDataPoint }) => {

  const [duration, setDuration] = useState(0.0);

  const submitValueNextHandler = () => {
    const dataPoint = { 'running': duration };
    addDataPoint(dataPoint);
    return handleNextForm();
  };

  return (
    <div>
      <h4 className="prompt">RUNNING</h4>
      <input type="number" name="running" value={duration} onChange={e => setDuration(e.target.value)} />
      <button onClick={submitValueNextHandler}>Next</button>
    </div>
  );
}

export default Running;
