import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SessionLength } from './SessionLength';
import { SESSION_LENGTH_DEFAULT } from '../../constants';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    value: SESSION_LENGTH_DEFAULT,
    increment: jest.fn(),
    decrement: jest.fn()
  };

  const enzymeWrapper = shallow(<SessionLength {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  test('header', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('#session-label')).toHaveLength(1);
    expect(enzymeWrapper.find('h1').text()).toBe('Session Length');
  });

  test('content', () => {
    const { enzymeWrapper, props } = setup();
    const content = enzymeWrapper.find('div.SessionLength-content');
    expect(content).toHaveLength(1);

    // length value
    expect(content.find('#session-length').text()).toBe(props.value.toString());

    // increment & decrement buttons
    for (let key of ['#session-increment', '#session-decrement']) {
      const button = content.find(key);
      expect(button).toHaveLength(1);
      button.simulate('click');
    }
    expect(props.increment.mock.calls.length).toBe(1);
    expect(props.decrement.mock.calls.length).toBe(1);
  });
});
