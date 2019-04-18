import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { initialState } from '../../State/reducer';
import { Timer, Props } from './Timer';

Enzyme.configure({ adapter: new Adapter() });

const setup = (toMerge = {}) => {
  const props = {
    ...initialState,
    ...toMerge,

    setCurrentTime: jest.fn(),
    setIsBreak: jest.fn(),
    toggle: jest.fn(),
    reset: jest.fn()
  };

  const enzymeWrapper = Enzyme.shallow(<Timer {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('header', () => {
    test('during session', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('#timer-label')).toHaveLength(1);
      expect(enzymeWrapper.find('h1').text()).toBe('Session');
    });

    test('during break', () => {
      const { enzymeWrapper } = setup({ isBreak: true });
      expect(enzymeWrapper.find('#timer-label')).toHaveLength(1);
      expect(enzymeWrapper.find('h1').text()).toBe('Break');
    });
  });

  test('content', () => {
    const { enzymeWrapper, props } = setup();
    const content = enzymeWrapper.find('div.Timer-content');
    expect(content).toHaveLength(1);

    // time text
    expect(content.find('#time-left').text()).toBe(props.sessionLength + ':00');

    // controls
    const controls = content.find('div.Timer-controls');
    expect(controls).toHaveLength(1);

    const toggleButton = controls.find('#start_stop');
    expect(toggleButton).toHaveLength(1);
    toggleButton.simulate('click');
    expect(props.toggle.mock.calls.length).toBe(1);

    const resetButton = controls.find('#reset');
    expect(resetButton).toHaveLength(1);
    resetButton.simulate('click');
    expect(props.reset.mock.calls.length).toBe(1);
  });
});
