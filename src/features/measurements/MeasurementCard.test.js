import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import pretty from 'pretty';
import { act } from 'react-dom/test-utils';

/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  RunningIcon, MovieIcon, CodingIcon, ReadingIcon, ProjectIcon,
} from '../../components/Icons';
import Slider from './MeasurementSlider';

import MeasurementCard from './MeasurementCard';

jest.mock('react-circular-progressbar', () => ({
  CircularProgressbar() {
    return (
      <div>A Dummy progressbar</div>
    );
  },
  buildStyles() {},
}));

jest.mock('../../components/Icons', () => ({
  RunningIcon() { return '<Icon />'; },
  MovieIcon() { return '<Icon />'; },
  CodingIcon() { return '<Icon />'; },
  ReadingIcon() { return '<Icon />'; },
  ProjectIcon() { return '<Icon />'; },
}));

jest.mock('./MeasurementSlider', () => function Slider() {
  return '<Slider />';
});

const record = {
  id: 1,
  running: 1,
  reading: 2,
  project: 3,
  coding: 4,
  movie: 5,
  created_at: '2013-03-10T02:00:00Z',
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    render(<MeasurementCard record={record} dailyTarget={20} />, container);
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders the the progress pane', () => {
  const progressPane = document.querySelector('div.progressPane');
  expect(progressPane).not.toBeNull();
});

it('renders the correct number of tasks items', () => {
  const taskItems = document.querySelectorAll('li.taskItem');
  expect(taskItems).toHaveLength(5);
});

it('renders a Title for the project', () => {
  const projectTitle = document.querySelector('span.title');
  expect(projectTitle.textContent).toBe('Project');
});

it('renders a Value for the project', () => {
  const projectValue = document.querySelector('span.value');
  expect(projectValue.textContent).toBe('3h');
});

it('should render the expected output', () => {
  act(() => {
    render(<MeasurementCard record={record} dailyTarget={20} />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
