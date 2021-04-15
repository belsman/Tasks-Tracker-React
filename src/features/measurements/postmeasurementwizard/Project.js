import React from 'react';

const Project = ({ handleNextForm, handlePreviousForm }) => (
  <div>
    <p>How many milestones of projects did you commit?</p>
    <button onClick={() => handlePreviousForm()}>Previous</button>
    <button onClick={() => handleNextForm()}>Next</button>
  </div>
);

export default Project;
