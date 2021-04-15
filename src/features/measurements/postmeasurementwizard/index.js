import React, { useState } from 'react';

import Intro from './Intro';
import Running from './Running';
import Reading from './Reading';
import Coding from './Coding';
import Project from './Project';
import Movie from './Movie';
import Finished from './Finished';

export default function AddMeasurementsWizard() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [allFormData, setallFormData] = useState([]);

  const nextCurrentForm = () => setCurrentFormIndex(state => state + 1);
  const previousCurrentForm = () => setCurrentFormIndex(state => state - 1);

  const formComponents = [
    <Intro handleNextForm={nextCurrentForm} />,
    <Running handleNextForm={nextCurrentForm} />,
    <Reading handleNextForm={nextCurrentForm} handlePreviousForm={previousCurrentForm}/>,
    <Coding handleNextForm={nextCurrentForm} handlePreviousForm={previousCurrentForm}/>,
    <Project handleNextForm={nextCurrentForm} handlePreviousForm={previousCurrentForm}/>,
    <Movie handleNextForm={nextCurrentForm} handlePreviousForm={previousCurrentForm}/>,
    <Finished handlePreviousForm={previousCurrentForm} />
  ];

  return (
    formComponents[currentFormIndex]
  );
};
