import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MeasurementSummary from './MeasurementSummary';
import FooterNavigation from '../../components/FooterNavigation';

import { fetchMeasurements, selectAllMeasurements } from './measurementsSlice';
import { fetchTasks } from '../task/tasksSlice';

const MeasurementsList = () => {
  const dispatch = useDispatch();

  const measurements = useSelector(selectAllMeasurements);
  const measurementsStatus = useSelector(state => state.measurements.status);
  const error = useSelector(state => state.measurements.error);

  const tasks = useSelector(state => state.tasks.tasks);
  const taskStatus = useSelector(state => state.tasks.status);

  const token = useSelector(state => state.auth.authToken);

  useEffect(() => {
    if (measurementsStatus === 'idle') {
      dispatch(fetchMeasurements({ token }));
    }

    if (taskStatus === 'idle') {
      dispatch(fetchTasks({ token }));
    }
  }, [dispatch, measurementsStatus, taskStatus]);

  let content;
  let expectedTotalTime;

  if (taskStatus === 'succeeded') {
    expectedTotalTime = tasks.map(task => task.daily_target)
      .reduce((total, num) => total + num);
  }

  if (measurementsStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (measurementsStatus === 'succeeded') {
    const dateOrderedMeasurements = measurements.slice()
      .sort((m1, m2) => (new Date(m2.created_at) - new Date(m1.created_at)));
    if (measurements.length > 0) {
      content = dateOrderedMeasurements.map(
        measured => (
          <MeasurementSummary
            key={measured.id}
            record={measured}
            expectedTotal={expectedTotalTime}
          />
        ),
      );
    } else {
      content = <div><h4>No Record Found!</h4></div>;
    }
  } else if (measurementsStatus === 'failure') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <FooterNavigation />
      <header className="header">
        Time Tracker
      </header>
      {content}
    </section>
  );
};

export default MeasurementsList;
