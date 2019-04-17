import reducer, { initialState } from './reducer';
import * as actions from './actions';
import * as types from './types';
import * as Consts from '../constants';

const getInitialState = (): types.State => ({ ...initialState });

test('returns initial state', () => {
  const expected = getInitialState();
  expect(reducer(undefined, {} as any)).toEqual(expected);
});

describe('breakLength', () => {
  test('reduces increment', () => {
    let expected = getInitialState();
    expected.breakLength++;
    expect(reducer(undefined, actions.incrementBreakLength())).toEqual(
      expected
    );

    // Clamps to max value
    for (let i = 0; i < Consts.BREAK_LENGTH_MAX; i++)
      expected = reducer(expected, actions.incrementBreakLength());
    expect(expected.breakLength).toEqual(Consts.BREAK_LENGTH_MAX);
  });

  test('reduces decrement', () => {
    let expected = getInitialState();
    expected.breakLength--;
    expect(reducer(undefined, actions.decrementBreakLength())).toEqual(
      expected
    );

    // Clamps to min value
    for (let i = 0; i < Consts.BREAK_LENGTH_MAX; i++)
      expected = reducer(expected, actions.decrementBreakLength());
    expect(expected.breakLength).toEqual(Consts.BREAK_LENGTH_MIN);
  });
});

describe('sessionLength', () => {
  test('reduces increment', () => {
    let expected = getInitialState();
    expected.sessionLength++;
    expect(reducer(undefined, actions.incrementSessionLength())).toEqual(
      expected
    );

    // Clamps to max value
    for (let i = 0; i < Consts.SESSION_LENGTH_MAX; i++)
      expected = reducer(expected, actions.incrementSessionLength());
    expect(expected.sessionLength).toEqual(Consts.SESSION_LENGTH_MAX);
  });

  test('reduces decrement', () => {
    let expected = getInitialState();
    expected.sessionLength--;
    expect(reducer(undefined, actions.decrementSessionLength())).toEqual(
      expected
    );

    // Clamps to min value
    for (let i = 0; i < Consts.SESSION_LENGTH_MAX; i++)
      expected = reducer(expected, actions.decrementSessionLength());
    expect(expected.sessionLength).toEqual(Consts.SESSION_LENGTH_MIN);
  });
});

test('setCurrentTime', () => {
  const expected = getInitialState();
  expected.currentTime = 1337;
  expect(
    reducer(undefined, actions.setCurrentTime(expected.currentTime))
  ).toEqual(expected);

  // clamps to 0
  expected.currentTime = 0;
  expect(reducer(undefined, actions.setCurrentTime(-1525))).toEqual(expected);
});

test('setIsBreak', () => {
  const expected = getInitialState();
  expected.isBreak = true;
  expect(reducer(undefined, actions.setIsBreak(true))).toEqual(expected);
});

test('toggle', () => {
  const expected = getInitialState();
  expected.isRunning = true;
  expect(reducer(undefined, actions.toggle())).toEqual(expected);
});

test('reset', () => {
  const state: types.State = {
    breakLength: 2,
    sessionLength: 45,
    currentTime: 2321,
    isBreak: false,
    isRunning: true
  };
  expect(reducer(state, actions.reset())).toEqual(getInitialState());
});
