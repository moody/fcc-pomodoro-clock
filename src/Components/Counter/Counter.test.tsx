import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Counter } from './Counter';

Enzyme.configure({ adapter: new Adapter() });

const setup = (isRunning = false) => {
  const props = {
    id: 'break',
    isRunning,
    value: 0,
    increment: jest.fn(),
    decrement: jest.fn()
  };

  const enzymeWrapper = shallow(<Counter {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  test('header', () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper.find(`#${props.id}-label`)).toHaveLength(1);
    expect(
      enzymeWrapper
        .find('h1')
        .text()
        .toLowerCase()
    ).toBe(props.id + ' length');
  });

  test('content', () => {
    const { enzymeWrapper, props } = setup();
    const content = enzymeWrapper.find('div.Counter-content');
    expect(content).toHaveLength(1);

    // length value
    expect(content.find(`#${props.id}-length`).text()).toBe(
      props.value.toString()
    );

    // buttons
    expect(content.find(`#${props.id}-increment`)).toHaveLength(1);
    expect(content.find(`#${props.id}-decrement`)).toHaveLength(1);
  });

  describe('buttons', () => {
    test('dispatches actions', () => {
      const { enzymeWrapper, props } = setup();

      enzymeWrapper.find(`#${props.id}-increment`).simulate('click');
      expect(props.increment.mock.calls.length).toBe(1);

      enzymeWrapper.find(`#${props.id}-decrement`).simulate('click');
      expect(props.decrement.mock.calls.length).toBe(1);
    });

    test('disabled while isRunning', () => {
      const { enzymeWrapper, props } = setup(true);

      enzymeWrapper.find(`#${props.id}-increment`).simulate('click');
      expect(props.increment.mock.calls.length).toBe(0);

      enzymeWrapper.find(`#${props.id}-decrement`).simulate('click');
      expect(props.decrement.mock.calls.length).toBe(0);
    });
  });
});
