import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from './MeasurementSlider';
import { selectMeasurementsById } from './measurementsSlice';
import { fetchTasks } from '../task/tasksSlice';

const SingleMeasurementPage = ({ match }) => {
  const { recordId } = match.params;
  const dispatch = useDispatch();
  const record = useSelector(state => selectMeasurementsById(state, recordId));

  const tasks = useSelector(state => state.tasks.tasks);
  const taskStatus = useSelector(state => state.tasks.status);
  
  const token = useSelector(state => state.auth.authToken);

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks({ token }));
    }
  }, [dispatch, taskStatus])

  if (taskStatus === 'succeeded') {
    const [ coding, movie, project, reading, running ] = tasks.slice().
      sort((a, b) => {
        if (a.name < b.name ) return -1;
        if (a.name > b.name ) return 1;
        return 0; 
      });
    console.log( coding, movie, project, reading, running );
  }

  if (!record) {
      return (
          <section>
              <h2>Record not found!</h2>
          </section>
      );
  }

  return (
      <section>
          <article className="record">
              <Slider title={record.created_at} recordId={record.id} />
              <h2>{record.created_at}</h2>
              <ul>
                  <li>Project: {record.project}</li>
                  <li>Coding: {record.coding}</li>
                  <li>Reading: {record.reading}</li>
                  <li>Running: {record.running}</li>
                  <li>Movie: {record.movie}</li>
              </ul>
          </article>
      </section>
  );
};

export default SingleMeasurementPage;
