import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import pretty from 'pretty';
import { act } from 'react-dom/test-utils';

/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import style from './auth.module.css';
import { loginUserAsync } from './authSlice';
/* eslint-enable no-unused-vars */

import LoginForm from './LoginForm';

jest.mock('./authSlice', () => ({
  loginUserAsync(fn) {
    return fn;
  },
}));

jest.mock('react-redux', () => ({
  useDispatch(fn) {
    return fn;
  },
}));

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    render(<LoginForm />, container);
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders a Login input username field', () => {
  const username = document.querySelector('input#username');
  expect(username).not.toBeNull();
});

it('renders a Login password field', () => {
  const password = document.querySelector('input#password');
  expect(password).not.toBeNull();
});

it('should render the expected output', () => {
  act(() => {
    render(<LoginForm />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
