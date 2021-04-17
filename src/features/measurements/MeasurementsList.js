import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllMeasurements } from './measurementsSlice';

const MeasurementsList = () => {
    const measurements = useSelector(selectAllMeasurements);
    
    let content;

    if (measurements.length > 0) {
        content = measurements.map(measured =>{
            return (
                <div key={measured.id}>
                    <h4>{measured.created_at}</h4>
                    <span>View Details</span>
                </div>
            );
        });
    } else {
        content = <div><h4>No Record Found!</h4></div>;
    }

    return (
      <section>
        <h2>Records</h2>
        {content}
      </section>
    )
};

export default MeasurementsList;
