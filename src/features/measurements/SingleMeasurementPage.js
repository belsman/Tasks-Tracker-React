import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {  fetchMeasurements, selectMeasurementsById } from './measurementsSlice';
import { fetchTasks } from '../task/tasksSlice';
import MeasurementCard from './MeasurementCard';
import FooterNavigation from '../../FooterNavigation';

const SingleMeasurementPage = ({ match }) => {
  const { recordId } = match.params;
  const dispatch = useDispatch();

  const record = useSelector(state => selectMeasurementsById(state, recordId));
  
  const measurementsStatus = useSelector(state => state.measurements.status );
  const measurementEerror = useSelector(state => state.measurements.error);

  const tasks = useSelector(state => state.tasks.tasks);
  const taskStatus = useSelector(state => state.tasks.status);
  
  const token = useSelector(state => state.auth.authToken);

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks({ token }));
    }

    if (measurementsStatus === 'idle') {
      dispatch(fetchMeasurements({ token }));
    }
  }, [dispatch, taskStatus, measurementsStatus]);

  if (taskStatus === 'succeeded') {
    const [ coding, movie, project, reading, running ] = tasks.slice().
      sort((a, b) => {
        if (a.name < b.name ) return -1;
        if (a.name > b.name ) return 1;
        return 0; 
      });
    console.log( coding, movie, project, reading, running );
  }

  let content;

  if (measurementsStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (measurementsStatus === 'succeeded') {
      
      if (!record) {
        content = <div><h4>No Record Found!</h4></div>;;
      } else {
          content = <MeasurementCard record={record} />
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

export default SingleMeasurementPage;
