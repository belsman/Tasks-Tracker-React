import React from 'react';

const Movie = ({ handleNextForm, handlePreviousForm }) => (
  <div>
    <p>How many hours of movies did you watch?</p>
    <button onClick={() => handlePreviousForm()}>Previous</button>
    <button onClick={() => handleNextForm()}>Next</button>
  </div>
);

export default Movie;
