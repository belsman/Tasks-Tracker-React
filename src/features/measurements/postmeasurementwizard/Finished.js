import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

import Title from './Title';
import FooterNavigation from '../../../FooterNavigation';
import { addNewMeasurement } from '../measurementsSlice';
import style from './addMeasurement.module.css';

const Finished = ({ handlePreviousForm, formData }) => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(state => state.auth.authToken);

  const canSave = Object.values(formData).some(Boolean) && addRequestStatus === 'idle';

  const onSaveMeasurementClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        const resultAction = dispatch(addNewMeasurement({ token, formData }));
        unwrapResult(resultAction);
        history.push('/records');
      } catch (err) {
        console.error('Failed to save the measurement: ', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  return (
    <div>
      <FooterNavigation />
      <Title />
      <div className={style.finalWizard}>
        <button type="button" onClick={() => handlePreviousForm()}>Previous</button>
        <button type="button" className={style.submit} onClick={onSaveMeasurementClicked} disabled={!canSave}>Submit</button>
      </div>
    </div>
  );
};

export default Finished;
