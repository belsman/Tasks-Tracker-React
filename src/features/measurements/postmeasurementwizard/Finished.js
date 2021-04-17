import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

import { addNewMeasurement } from '../measurementsSlice';

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
        const resultAction = dispatch(addNewMeasurement({token, formData}));
        unwrapResult(resultAction);
        history.push('/tasks');
      } catch (err) {
        console.error('Failed to save the measurement: ', err)
      } finally {
        setAddRequestStatus('idle');
      }
    }
  }

  return (
    <div>
      <button onClick={() => handlePreviousForm()}>Previous</button>
      <button onClick={onSaveMeasurementClicked} disabled={!canSave}>Submit</button>
    </div>
  );
}

export default Finished;
