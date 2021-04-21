import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import { selectAllMeasurements } from './measurementsSlice';
import { RightIcon, LeftIcon } from '../../components/Icons';
import style from './singleRecord.module.css';

const Slider = ({ title, recordId }) => {
  const history = useHistory();
  const measurements = useSelector(selectAllMeasurements)
    .filter(measured => measured !== null);

  let recordIndex = measurements.findIndex(record => record.id === recordId);

  const prevClicked = () => {
    recordIndex -= 1;
    history.push(`/records/${measurements[recordIndex].id}`);
  };

  const nextClicked = () => {
    recordIndex += 1;
    history.push(`/records/${measurements[recordIndex].id}`);
  };

  const hasNext = recordIndex + 1 <= measurements.length - 1;
  const hasPrev = recordIndex - 1 >= 0;

  return (
    <div className={style.slider}>
      <button type="button" onClick={prevClicked} disabled={!hasPrev}>
        <LeftIcon />
      </button>
      <span>{format(new Date(title), 'MMMM dd, yyyy')}</span>
      <button type="button" onClick={nextClicked} disabled={!hasNext}>
        <RightIcon />
      </button>
    </div>
  );
};

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  recordId: PropTypes.number.isRequired,
};

export default Slider;
