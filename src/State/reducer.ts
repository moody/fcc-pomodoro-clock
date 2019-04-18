import { State, Actions } from './types';
import { Reducer } from 'redux';
import * as Consts from '../constants';
import { minutesToSeconds } from '../utils';

export const initialState: State = {
  breakLength: Consts.BREAK_LENGTH_DEFAULT,
  sessionLength: Consts.SESSION_LENGTH_DEFAULT,
  currentTime: minutesToSeconds(Consts.SESSION_LENGTH_DEFAULT),
  isBreak: false,
  isRunning: false
};

const reducer: Reducer<State, Actions> = (
  state: State = initialState,
  action
) => {
  const newState = { ...state };

  if (action.type === 'INCREMENT_BREAK_LENGTH') {
    newState.breakLength = Math.min(
      Consts.BREAK_LENGTH_MAX,
      state.breakLength + 1
    );
    newState.currentTime = state.isBreak
      ? minutesToSeconds(newState.breakLength)
      : state.currentTime;
  } else if (action.type === 'DECREMENT_BREAK_LENGTH') {
    newState.breakLength = Math.max(
      Consts.BREAK_LENGTH_MIN,
      state.breakLength - 1
    );
    newState.currentTime = state.isBreak
      ? minutesToSeconds(newState.breakLength)
      : state.currentTime;
  } else if (action.type === 'INCREMENT_SESSION_LENGTH') {
    newState.sessionLength = Math.min(
      Consts.SESSION_LENGTH_MAX,
      state.sessionLength + 1
    );
    newState.currentTime = state.isBreak
      ? state.currentTime
      : minutesToSeconds(newState.sessionLength);
  } else if (action.type === 'DECREMENT_SESSION_LENGTH') {
    newState.sessionLength = Math.max(
      Consts.SESSION_LENGTH_MIN,
      state.sessionLength - 1
    );
    newState.currentTime = state.isBreak
      ? state.currentTime
      : minutesToSeconds(newState.sessionLength);
  } else if (action.type === 'SET_CURRENT_TIME') {
    newState.currentTime = Math.max(0, action.value);
  } else if (action.type === 'SET_IS_BREAK') {
    newState.isBreak = action.value;
  } else if (action.type === 'TOGGLE') {
    newState.isRunning = !state.isRunning;
  } else if (action.type === 'RESET') {
    return { ...initialState };
  }

  return newState;
};

export default reducer;
