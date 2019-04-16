import React from 'react';
import ReactDOM from 'react-dom';
import { BreakLength } from './BreakLength';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    value: 5,
    increment: jest.fn(),
    decrement: jest.fn()
  };
  ReactDOM.render(<BreakLength {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
