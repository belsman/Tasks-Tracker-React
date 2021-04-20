import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { RightIcon } from '../../Icons';
import style from './measurementsStyle.module.css';

const MeasurementSummary = ({ record, expectedTotal }) => {
  const {
    movie, project, running, reading, coding,
  } = record;
  const recordTotal = [movie, project, running, reading, coding]
    .reduce((total, num) => total + num);

  const percentage = parseInt(((expectedTotal - recordTotal) / expectedTotal) * 100);

  const color = percentage < 50 ? 'tomato' : '#5cb85c';

  return (
    <div className={style.recordSummary}>
      <div
        className={style.recordSummary2}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ width: 50, paddingRight: 3 }}>
          <CircularProgressbar
            value={percentage}
            text=""
            styles={buildStyles({
              pathColor: `${color}`,
              trailColor: '#d6d6d6',
            })}
          />
        </div>
        <div style={{ paddingLeft: 3 }}>
          <span className={style.timestamp}>{format(new Date(record.created_at), 'MMM dd, yyyy')}</span>
          <span className={style.duration}>
            Hours:
            {recordTotal}
          </span>
        </div>
      </div>
      <span className={style.recordSummary3}>
        <span>
          <span className={style.timeGain}>
            {expectedTotal - recordTotal}
            {' '}
          </span>
          <span className={style.unit}>Hours</span>
        </span>
        <span className={style.toDetailLink}>
          <Link to={`/records/${record.id}`}><RightIcon /></Link>
        </span>
      </span>
    </div>
  );
};

export default MeasurementSummary;
