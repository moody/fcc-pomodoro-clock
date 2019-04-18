import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Counter from '../Counter/Counter';
import Timer from '../Timer/Timer';

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

    const counters = content.find('div.App-counters');
    expect(counters.find(Counter)).toHaveLength(2);

    const timer = content.find('div.App-timer');
    expect(timer.find(Timer)).toHaveLength(1);
  });

  test('footer', () => {
    const { enzymeWrapper } = setup();
    const footer = enzymeWrapper.find('footer');
    expect(footer).toHaveLength(1);
    expect(footer.hasClass('App-footer')).toBe(true);
    expect(footer.find('p').text()).toBe('Coded by Justin Moody');
  });
});
