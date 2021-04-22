import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import ClipLoader from 'react-spinners/ClipLoader';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Title from './Title';
import FooterNavigation from '../../../components/FooterNavigation';
import { addNewMeasurement } from '../measurementsSlice';
import style from './addMeasurement.module.css';
import override from '../styledComponent';

const Finished = ({ handlePreviousForm, formData }) => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.auth.authToken);

  const addMeasurementStatus = useSelector((state) => state.measurements.addMeasurementStatus);

  const canSave = Object.values(formData).some(Boolean) && addRequestStatus === 'idle';

  const onSaveMeasurementClicked = async () => {
    if (canSave) {
      const resultAction = dispatch(addNewMeasurement({ token, formData }));
      try {
        setAddRequestStatus('pending');
        unwrapResult(resultAction);
        history.push('/records');
      } catch (err) {
        // eslint-disable-next-line
        console.error('Failed to save the measurement: ', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  let content;

  if (addMeasurementStatus === 'loading') {
    content = (
      <div className="loader">
        <ClipLoader color="#0000ff" css={override} size={150} />
      </div>
    );
  } else {
    content = (
      <div className={style.finalWizard}>
        <button type="button" onClick={() => handlePreviousForm()}>Previous</button>
        <button type="button" className={style.submit} onClick={onSaveMeasurementClicked} disabled={!canSave}>Submit</button>
      </div>
    );
  }

  return (
    <div>
      <FooterNavigation />
      <Title />
      {content}
    </div>
  );
};

Finished.propTypes = {
  handlePreviousForm: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    running: PropTypes.number,
    reading: PropTypes.number,
    project: PropTypes.number,
    coding: PropTypes.number,
    movie: PropTypes.number,
  }),
};

Finished.defaultProps = {
  formData: {},
};

export default Finished;
