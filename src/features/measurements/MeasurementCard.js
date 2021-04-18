import React from 'react';
import Slider from './MeasurementSlider';

const MeasurementCard = ({ record }) => {
  const { id, project, coding, reading, running, movie, created_at } = record;
  return (
    <section>
        <article className="record">
            <Slider title={created_at} recordId={id} />
            <h2>{created_at}</h2>
            <ul>
                <li>Project: {project}</li>
                <li>Coding: {coding}</li>
                <li>Reading: {reading}</li>
                <li>Running: {running}</li>
                <li>Movie: {movie}</li>
            </ul>
        </article>
  </section>
  );
};

export default MeasurementCard;
