import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BreakLength } from './BreakLength';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    value: 5,
    increment: jest.fn(),
    decrement: jest.fn()
  };

  const enzymeWrapper = shallow(<BreakLength {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  test('header', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('#break-label')).toHaveLength(1);
    expect(enzymeWrapper.find('h1').text()).toBe('Break Length');
  });

  test('content', () => {
    const { enzymeWrapper, props } = setup();
    const content = enzymeWrapper.find('div.BreakLength-content');
    expect(content).toHaveLength(1);

    // length value
    expect(content.find('#break-length').text()).toBe(props.value.toString());

    // increment & decrement buttons
    for (let key of ['#break-increment', '#break-decrement']) {
      const button = content.find(key);
      expect(button).toHaveLength(1);
      button.simulate('click');
    }
    expect(props.increment.mock.calls.length).toBe(1);
    expect(props.decrement.mock.calls.length).toBe(1);
  });
});
