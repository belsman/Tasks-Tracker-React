import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectAllMeasurements } from './measurementsSlice';

const Slider = ({ title, recordId }) => {

    const history = useHistory();
    const measurements = useSelector(selectAllMeasurements);

    let recordIndex = measurements.findIndex(record => record.id === recordId);

    const prevClicked = () => {
        recordIndex = recordIndex - 1;
        history.push(`/records/${measurements[recordIndex].id}`);
    };

    const nextClicked = () => {
        recordIndex = recordIndex + 1;
        history.push(`/records/${measurements[recordIndex].id}`);
    };
    
    const hasNext = recordIndex + 1 < measurements.length - 1;
    const hasPrev = recordIndex - 1 >= 0;

    return (
        <div>
            <button onClick={prevClicked} disabled={!hasPrev}>Prev</button>
            <span>{title}</span>
            <button onClick={nextClicked} disabled={!hasNext}>Next</button>
        </div>
    );
}

export default Slider;
