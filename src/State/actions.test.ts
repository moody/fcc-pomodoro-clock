import * as action from './actions';

test('incrementBreakLength', () => {
  expect(action.incrementBreakLength()).toEqual({
    type: 'INCREMENT_BREAK_LENGTH'
  });
});

test('decrementBreakLength', () => {
  expect(action.decrementBreakLength()).toEqual({
    type: 'DECREMENT_BREAK_LENGTH'
  });
});

test('incrementSessionLength', () => {
  expect(action.incrementSessionLength()).toEqual({
    type: 'INCREMENT_SESSION_LENGTH'
  });
});

test('decrementSessionLength', () => {
  expect(action.decrementSessionLength()).toEqual({
    type: 'DECREMENT_SESSION_LENGTH'
  });
});

test('setCurrentTime', () => {
  expect(action.setCurrentTime(123)).toEqual({
    type: 'SET_CURRENT_TIME',
    value: 123
  });
});

test('setIsBreak', () => {
  expect(action.setIsBreak(true)).toEqual({
    type: 'SET_IS_BREAK',
    value: true
  });
});

test('toggle', () => {
  expect(action.toggle()).toEqual({
    type: 'TOGGLE'
  });
});

test('reset', () => {
  expect(action.reset()).toEqual({
    type: 'RESET'
  });
});
