import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import pretty from 'pretty';
import { act } from 'react-dom/test-utils';

/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import style from './auth.module.css';
import { registerUserAsync } from './authSlice';
/* eslint-enable no-unused-vars */

import RegistrationForm from './RegistrationForm';

jest.mock('./authSlice', () => ({
  registerUserAsync(fn) {
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
    render(<RegistrationForm />, container);
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders a Registration input username field', () => {
  const username = document.querySelector('input#username');
  expect(username).not.toBeNull();
});

it('renders a Registration password field', () => {
  const password = document.querySelector('input#password');
  expect(password).not.toBeNull();
});

it('renders a Registration email field', () => {
  const password = document.querySelector('input#email');
  expect(password).not.toBeNull();
});

it('should render the expected output', () => {
  act(() => {
    render(<RegistrationForm />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
