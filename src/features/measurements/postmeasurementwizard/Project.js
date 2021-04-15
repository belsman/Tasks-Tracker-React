import React, { useState } from 'react';

const Project = ({ handleNextForm, handlePreviousForm, addDataPoint }) => {
  const [duration, setDuration] = useState(0.0);

  const submitValueNextHandler = () => {
    const dataPoint = { 'project': duration };
    addDataPoint(dataPoint);
    return handleNextForm();
  };

  return (
    <div>
      <h4 className="prompt">PROJECT</h4>
      <input type="number" name="project" value={duration} onChange={e => setDuration(e.target.value)} />
      <button onClick={() => handlePreviousForm()}>Previous</button>
      <button onClick={submitValueNextHandler}>Next</button>
    </div>
  );
};

export default Project;
