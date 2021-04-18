import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMeasurements, selectAllMeasurements } from './measurementsSlice';

const MeasurementsList = () => {
    const dispatch = useDispatch();
    
    const measurements = useSelector(selectAllMeasurements);
    const measurementsStatus = useSelector(state => state.measurements.status );
    const error = useSelector(state => state.measurements.error);

    const token = useSelector(state => state.auth.authToken );

    useEffect(() => {
        if (measurementsStatus === 'idle') {
          dispatch(fetchMeasurements({ token }));
        }
      }, [dispatch, measurementsStatus]);
    
    let content;

    if (measurementsStatus === 'loading') {
      content = <div className="loader">Loading...</div>;
    } else if (measurementsStatus === 'succeeded') {
        const dateOrderedMeasurements = measurements.slice().sort((m1, m2) =>
         (new Date(m2.created_at) - new Date(m1.created_at)));
        if (measurements.length > 0) {
            content = dateOrderedMeasurements.map(measured =>{
                return (
                    <div key={measured.id}>
                        <h4>{measured.created_at}</h4>
                        <span>
                            <Link to={`/records/${measured.id}`}>
                                View Post
                            </Link>
                        </span>
                    </div>
                );
            });
        } else {
            content = <div><h4>No Record Found!</h4></div>;
        }
    } else if (measurementsStatus === 'failure') {
      content = <div>{error}</div>;
    }

    return (
      <section>
        <h2>Records</h2>
        {content}
      </section>
    )
};

export default MeasurementsList;
