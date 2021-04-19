import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const MeasurementSummary = ({ record, expectedTotal }) => {
  const { movie, project, running, reading, coding } = record;
  const recordTotal = [ movie, project, running, reading, coding ]
    .reduce((total, num) => total + num);

  return (
    <div>
      <div>
        <span>{format(new Date(record.created_at), 'MMM dd, yyyy')}</span>
        <span>Hours: {recordTotal}</span>
      </div>
      <span>
        <span>{expectedTotal - recordTotal} Hours</span>
        <Link to={`/records/${record.id}`}>
          View Post
        </Link>
      </span>
    </div>
  );
}

export default MeasurementSummary;
