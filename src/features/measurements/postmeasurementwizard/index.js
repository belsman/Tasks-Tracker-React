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
  const [allFormData, setAllFormData] = useState({});

  const addDataPoint = (dataName, dataValue) => setAllFormData(
     state => ({ ...state, [dataName]: dataValue }) );

  const nextCurrentForm = () => setCurrentFormIndex(state => state + 1);
  const previousCurrentForm = () => setCurrentFormIndex(state => state - 1);

  const formComponents = [
    <Intro handleNextForm={nextCurrentForm} />,
    <Running handleNextForm={nextCurrentForm}
      addDataPoint={addDataPoint} 
    />,
    <Reading handleNextForm={nextCurrentForm}
      handlePreviousForm={previousCurrentForm}
      addDataPoint={addDataPoint}
    />,
    <Coding handleNextForm={nextCurrentForm}
     handlePreviousForm={previousCurrentForm}
      addDataPoint={addDataPoint}
    />,
    <Project handleNextForm={nextCurrentForm}
      handlePreviousForm={previousCurrentForm}
      addDataPoint={addDataPoint}
    />,
    <Movie handleNextForm={nextCurrentForm}
      handlePreviousForm={previousCurrentForm}
      addDataPoint={addDataPoint}
    />,
    <Finished handlePreviousForm={previousCurrentForm}
      formData={allFormData}
    />
  ];

  return (
    formComponents[currentFormIndex]
  );
};
