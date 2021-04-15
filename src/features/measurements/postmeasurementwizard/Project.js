import React from 'react';

const Project = ({ handleNextForm }) => (
  <div>
    <p>How many milestones of projects did you commit?</p>
    <button onClick={() => handleNextForm()}>Next</button>
  </div>
);

export default Project;
