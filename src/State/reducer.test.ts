import reducer, { initialState } from './reducer';
import * as actions from './actions';
import * as types from './types';
import * as Consts from '../constants';
import { minutesToSeconds } from '../utils';

const getInitialState = (): types.State => ({ ...initialState });

test('returns initial state', () => {
  const expected = getInitialState();
  expect(reducer(undefined, {} as any)).toEqual(expected);
});

describe('breakLength', () => {
  test('reduces increment', () => {
    expect(
      reducer(
        { ...initialState, breakLength: 15 },
        actions.incrementBreakLength()
      ).breakLength
    ).toBe(16);
    expect(
      reducer(
        { ...initialState, breakLength: Consts.BREAK_LENGTH_MAX },
        actions.incrementBreakLength()
      ).breakLength
    ).toBe(Consts.BREAK_LENGTH_MAX);
  });

  test('reduces decrement', () => {
    expect(
      reducer(
        { ...initialState, breakLength: 2 },
        actions.decrementBreakLength()
      ).breakLength
    ).toBe(1);
    expect(
      reducer(
        { ...initialState, breakLength: Consts.BREAK_LENGTH_MIN },
        actions.decrementBreakLength()
      ).breakLength
    ).toBe(Consts.BREAK_LENGTH_MIN);
  });

  test('updates currentTime if isBreak', () => {
    expect(
      reducer(
        { ...initialState, isBreak: true, breakLength: 1 },
        actions.incrementBreakLength()
      ).currentTime
    ).toBe(120);
    expect(
      reducer(
        { ...initialState, isBreak: true, breakLength: 2 },
        actions.decrementBreakLength()
      ).currentTime
    ).toBe(60);
    expect(
      reducer(
        { ...initialState, isBreak: false, currentTime: -1 },
        actions.incrementBreakLength()
      ).currentTime
    ).toBe(-1);
    expect(
      reducer(
        { ...initialState, isBreak: false, currentTime: -1 },
        actions.decrementBreakLength()
      ).currentTime
    ).toBe(-1);
  });
});

describe('sessionLength', () => {
  test('reduces increment', () => {
    expect(
      reducer(
        { ...initialState, sessionLength: 15 },
        actions.incrementSessionLength()
      ).sessionLength
    ).toBe(16);
    expect(
      reducer(
        { ...initialState, sessionLength: Consts.SESSION_LENGTH_MAX },
        actions.incrementSessionLength()
      ).sessionLength
    ).toBe(Consts.SESSION_LENGTH_MAX);
  });

  test('reduces decrement', () => {
    expect(
      reducer(
        { ...initialState, sessionLength: 2 },
        actions.decrementSessionLength()
      ).sessionLength
    ).toBe(1);
    expect(
      reducer(
        { ...initialState, sessionLength: Consts.SESSION_LENGTH_MIN },
        actions.decrementSessionLength()
      ).sessionLength
    ).toBe(Consts.SESSION_LENGTH_MIN);
  });

  test('updates currentTime if not isBreak', () => {
    expect(
      reducer(
        { ...initialState, isBreak: false, sessionLength: 1 },
        actions.incrementSessionLength()
      ).currentTime
    ).toBe(120);
    expect(
      reducer(
        { ...initialState, isBreak: false, sessionLength: 2 },
        actions.decrementSessionLength()
      ).currentTime
    ).toBe(60);
    expect(
      reducer(
        { ...initialState, isBreak: true, currentTime: -1 },
        actions.incrementSessionLength()
      ).currentTime
    ).toBe(-1);
    expect(
      reducer(
        { ...initialState, isBreak: true, currentTime: -1 },
        actions.decrementSessionLength()
      ).currentTime
    ).toBe(-1);
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
