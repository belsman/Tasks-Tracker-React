import React, { useState } from 'react';

const Movie = ({ handleNextForm, handlePreviousForm, addDataPoint }) => {
  const [duration, setDuration] = useState(0.0);

  const submitValueNextHandler = () => {
    const dataPoint = { 'movie': duration };
    addDataPoint(dataPoint);
    return handleNextForm();
  };

  return (
    <div>
      <h4 className="prompt">movie</h4>
      <input type="number" name="movie" value={duration} onChange={e => setDuration(e.target.value)} />
      <button onClick={() => handlePreviousForm()}>Previous</button>
      <button onClick={submitValueNextHandler}>Next</button>
    </div>
  );
};

export default Movie;

