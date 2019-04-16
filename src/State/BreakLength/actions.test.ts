import * as action from './actions';

test('incrementAction', () => {
  expect(action.increment()).toEqual({
    type: '@@breakLength/INCREMENT'
  });
});

test('decrementAction', () => {
  expect(action.decrement()).toEqual({
    type: '@@breakLength/DECREMENT'
  });
});

test('resetAction', () => {
  expect(action.reset()).toEqual({
    type: '@@breakLength/RESET'
  });
});
