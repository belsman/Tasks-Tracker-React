import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import pretty from 'pretty';
import { act } from 'react-dom/test-utils';

/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { RightIcon, LeftIcon } from '../../components/Icons';
import style from './singleRecord.module.css';
import { selectAllMeasurements } from './measurementsSlice';
/* eslint-enable no-unused-vars */

import Slider from './MeasurementSlider';

jest.mock('./measurementsSlice', () => ({
  selectAllMeasurements(fn) {
    return fn;
  },
}));

jest.mock('react-router-dom', () => ({
  useHistory() {
    return [];
  },
}));

jest.mock('react-redux', () => ({
  useSelector() {
    return [
      {
        id: 1,
        running: 1,
        reading: 2,
        project: 3,
        coding: 4,
        movie: 5,
        created_at: '2013-03-10T02:00:00Z',
      },
      {
        id: 2,
        running: 1,
        reading: 2,
        project: 3,
        coding: 4,
        movie: 5,
        created_at: '2013-03-10T02:00:00Z',
      },
    ];
  },
}));

jest.mock('date-fns', () => ({
  format() {
    return (
      'March 13th, 1962'
    );
  },
}));

jest.mock('../../components/Icons', () => ({
  RightIcon() {
    return (
      <div>An Icon</div>
    );
  },
  LeftIcon() {
    return (
      <div>An Icon</div>
    );
  },
}));

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    render(<Slider record="1223445677" recordId={1} />, container);
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with with the correct timestamp for a given the record', () => {
  const slideBtns = document.querySelectorAll('button');
  expect(slideBtns).toHaveLength(2);
});

it('should render the expected output', () => {
  act(() => {
    render(<Slider record="1223445677" recordId={1} />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
