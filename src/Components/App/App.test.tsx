import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import BreakLength from '../BreakLength/BreakLength';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {};
  const enzymeWrapper = shallow(<App {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  test('header', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('header').hasClass('App-header')).toBe(true);
    expect(enzymeWrapper.find('h1').text()).toBe('Pomodoro Clock');
  });

  test('content', () => {
    const { enzymeWrapper } = setup();
    const content = enzymeWrapper.find('div.App-content');
    expect(content).toHaveLength(1);
    expect(content.find(BreakLength)).toHaveLength(1);
  });
});
