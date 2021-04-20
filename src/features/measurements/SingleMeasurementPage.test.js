import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';

import { fetchMeasurements, selectMeasurementsById } from './measurementsSlice';
import { fetchTasks } from '../task/tasksSlice';
import MeasurementCard from './MeasurementCard';
import FooterNavigation from '../../components/FooterNavigation';
/* eslint-enable no-unused-vars */
import SingleMeasurementPage from './SingleMeasurementPage';

jest.mock('react-redux', () => ({
  useDispatch(fn) {
    return fn;
  },
  useSelector(fn) {
    return fn;
  },
}));

jest.mock('../../components/FooterNavigation', () => function override() {
  return '<div>Footer Navigation Card</div>';
});

jest.mock('./MeasurementCard', () => function override() {
  return '<div>Measurment Card</div>';
});

jest.mock('../task/tasksSlice', () => ({
    fetchTasks() {
        return [
          {
            name: 'running',
            description: 'Some text',
            daily_target: 2
          },
          {
            name: 'reading',
            description: 'Some text',
            daily_target: 1
          },
          {
            name: 'project',
            description: 'Some text',
            daily_target: 2
          },
          {
            name: 'movie',
            description: 'Some text',
            daily_target: 1
          },
          {
            name: 'coding',
            description: 'Some text',
            daily_target: 3
          }
        ]
    }
}));

jest.mock('./measurementsSlice', () => ({
    selectMeasurementsById() {
        return {
          id: 1,
          running: 1,
          reading: 1,
          project: 1,
          coding: 1,
          movie: 1,
          created_at: '2013-03-10T02:00:00Z'
        };
    },

    fetchMeasurements() {
        return [
          {
            id: 1,
            running: 1,
            reading: 1,
            project: 1,
            coding: 1,
            movie: 1,
            created_at: '2013-03-10T02:00:00Z'
          },
          {
            id: 2,
            running: 0,
            reading: 1,
            project: 0,
            coding: 1,
            movie: 0,
            created_at: '2013-03-11T02:00:00Z'
          }
        ]
    }
}));



let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const match = {
  params: {
    recordId: 1,
  },
};

it('renders with with the correct record details page for a give measurement', () => {
  act(() => {
    render(<SingleMeasurementPage match={match} />, container);
  });

  const h2 = document.querySelector('header.header');
  expect(h2.textContent).toBe('Time Tracker');
});
