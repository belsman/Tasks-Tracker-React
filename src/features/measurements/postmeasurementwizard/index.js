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

  const formComponents = [
    <Intro handleNextForm={nextCurrentForm} />,
    <Running handleNextForm={nextCurrentForm} />,
    <Reading handleNextForm={nextCurrentForm} />,
    <Coding handleNextForm={nextCurrentForm} />,
    <Project handleNextForm={nextCurrentForm} />,
    <Movie handleNextForm={nextCurrentForm} />,
    <Finished />
  ];

  return (
    formComponents[currentFormIndex]
  );
};
