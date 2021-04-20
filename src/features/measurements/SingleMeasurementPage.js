import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMeasurements, selectMeasurementsById } from './measurementsSlice';
import { fetchTasks } from '../task/tasksSlice';
import MeasurementCard from './MeasurementCard';
import FooterNavigation from '../../components/FooterNavigation';

const SingleMeasurementPage = ({ match }) => {
  const { recordId } = match.params;
  const dispatch = useDispatch();

  const record = useSelector(state => selectMeasurementsById(state, recordId));

  const measurementsStatus = useSelector(state => state.measurements.status);
  const measurementEerror = useSelector(state => state.measurements.error);

  const tasks = useSelector(state => state.tasks.tasks);
  const taskStatus = useSelector(state => state.tasks.status);

  const token = useSelector(state => state.auth.authToken);

  let totalDailyTarget;

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks({ token }));
    }

    if (measurementsStatus === 'idle') {
      dispatch(fetchMeasurements({ token }));
    }
  }, [dispatch, taskStatus, measurementsStatus]);

  if (taskStatus === 'succeeded') {
    totalDailyTarget = tasks.map(task => task.daily_target)
      .reduce((total, num) => total + num);
  }

  let content;

  if (measurementsStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (measurementsStatus === 'succeeded') {
    if (!record) {
      content = <div><h4>No Record Found!</h4></div>;
    } else {
      content = (
        <MeasurementCard
          record={record}
          dailyTarget={totalDailyTarget}
        />
      );
    }
  } else if (measurementsStatus === 'failure') {
    content = <div>{measurementEerror}</div>;
  }

  return (
    <div>
      <FooterNavigation />
      <header className="header">
        Time Tracker
      </header>
      {content}
    </div>
  );
};

SingleMeasurementPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recordId: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default SingleMeasurementPage;
