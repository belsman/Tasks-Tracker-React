import React from 'react';
import { useSelector } from 'react-redux';

import { selectMeasurementsById } from './measurementsSlice';

const SingleMeasurementPage = ({ match }) => {
  const { recordId } = match.params;
  const record = useSelector(state => selectMeasurementsById(state, recordId));

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
