import * as action from './actions';

test('increment', () => {
  expect(action.increment()).toEqual({
    type: '@@sessionLength/INCREMENT'
  });
});

test('decrement', () => {
  expect(action.decrement()).toEqual({
    type: '@@sessionLength/DECREMENT'
  });
});

test('reset', () => {
  expect(action.reset()).toEqual({
    type: '@@sessionLength/RESET'
  });
});
