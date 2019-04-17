import reducer, { initialState } from './reducer';
import * as actions from './actions';
import * as types from './types';
import { SESSION_LENGTH_MAX, SESSION_LENGTH_MIN } from '../../constants';

const getInitialState = (): types.State => ({ ...initialState });

test('returns initial state', () => {
  const expected = getInitialState();
  expect(reducer(undefined, {} as any)).toEqual(expected);
});

test('reduces increment action', () => {
  let expected = getInitialState();
  expected.value++;
  expect(reducer(undefined, actions.increment())).toEqual(expected);

  // Clamps to max value
  for (let i = 0; i < SESSION_LENGTH_MAX; i++)
    expected = reducer(expected, actions.increment());
  expect(expected.value).toEqual(SESSION_LENGTH_MAX);
});

test('reduces decrement action', () => {
  let expected = getInitialState();
  expected.value--;
  expect(reducer(undefined, actions.decrement())).toEqual(expected);

  // Clamps to min value
  for (let i = 0; i < SESSION_LENGTH_MAX; i++)
    expected = reducer(expected, actions.decrement());
  expect(expected.value).toEqual(SESSION_LENGTH_MIN);
});

test('reduces reset action', () => {
  const state = getInitialState();
  state.value = 8;
  expect(reducer(state, actions.reset())).toEqual(getInitialState());
});
