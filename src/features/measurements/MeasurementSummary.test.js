import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import pretty from 'pretty';
import { act } from 'react-dom/test-utils';

/* eslint-disable no-unused-vars */
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { RightIcon } from '../../components/Icons';
import MeasurementSummary from './MeasurementSummary';

/* eslint-enable no-unused-vars */
jest.mock('react-router-dom', () => ({
  Link() {
    return (
      <div>A Dummy Link</div>
    );
  },
}));

jest.mock('date-fns', () => ({
  format() {
    return (
      'March 13th, 1962'
    );
  },
}));

jest.mock('react-circular-progressbar', () => ({
  CircularProgressbar() {
    return (
      <div>A Dummy progressbar</div>
    );
  },
  buildStyles() {},
}));

jest.mock('../../components/Icons', () => ({
  RightIcon() {
    return (
      <div>An Icon</div>
    );
  },
}));

const record = {
  id: 1,
  running: 1,
  reading: 1,
  project: 1,
  coding: 1,
  movie: 1,
  created_at: '2013-03-10T02:00:00Z',
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    render(<MeasurementSummary record={record} expectedTotal={11} />, container);
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with with the correct timestamp for a given the record', () => {
  const timestamp = document.querySelector('span.timestamp');
  expect(timestamp.textContent).toBe('March 13th, 1962');
});

it('renders with with the correct unit as Hours', () => {
  const unit = document.querySelector('span.unit');
  expect(unit.textContent).toBe('Hours');
});

it('renders with with the correct duration as sum of total time spent', () => {
  const duration = document.querySelector('span.duration');
  expect(duration.textContent).toBe('Hours:5');
});

it('renders with with the correct time gain as a difference of 11 and 5', () => {
  const timeGain = document.querySelector('span.timeGain');
  expect(timeGain.textContent).toBe('6 ');
});

it('should render the expected output', () => {
  act(() => {
    render(<MeasurementSummary record={record} expectedTotal={11} />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
