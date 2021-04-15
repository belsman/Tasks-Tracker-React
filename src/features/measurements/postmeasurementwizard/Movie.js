import React from 'react';

const Movie = ({ handleNextForm }) => (
  <div>
    <p>How many hours of movies did you watch?</p>
    <button onClick={() => handleNextForm()}>Next</button>
  </div>
);

export default Movie;
