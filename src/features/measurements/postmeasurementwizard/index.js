import React, { useState } from 'react';

import Intro from './Intro';
import WizardForm from './WizardForm';
import Finished from './Finished';

export default function AddMeasurementsWizard() {
  const [currentFormIndex, setCurrentFormIndex] = useState(0);
  const [allFormData, setAllFormData] = useState({});

  const addDataPoint = (dataName, dataValue) => setAllFormData(
    (state) => ({ ...state, [dataName]: dataValue }),
  );

  const nextCurrentForm = () => setCurrentFormIndex((state) => state + 1);
  const previousCurrentForm = () => setCurrentFormIndex((state) => state - 1);

  const wizards = ['running', 'reading', 'coding', 'project', 'movie']
    .map((wizardTitle) => (
      <WizardForm
        name={wizardTitle}
        key={wizardTitle}
        nextForm={nextCurrentForm}
        prevForm={previousCurrentForm}
        addDataPoint={addDataPoint}
      />
    ));

  const formComponents = [
    <Intro handleNextForm={nextCurrentForm} key="intro" />,
    ...wizards,
    <Finished
      key="finished"
      handlePreviousForm={previousCurrentForm}
      formData={allFormData}
    />,
  ];

  return (
    formComponents[currentFormIndex]
  );
}
