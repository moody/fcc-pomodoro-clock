import { State, Actions } from './types';
import { Reducer } from 'redux';
import * as Consts from '../constants';

export const initialState: State = {
  breakLength: Consts.BREAK_LENGTH_DEFAULT,
  sessionLength: Consts.SESSION_LENGTH_DEFAULT,
  currentTime: Consts.SESSION_LENGTH_DEFAULT * 60, // convert to seconds
  isBreak: false,
  isRunning: false
};

const reducer: Reducer<State, Actions> = (
  state: State = initialState,
  action
) => {
  if (action.type === 'INCREMENT_BREAK_LENGTH') {
    return {
      ...state,
      breakLength: Math.min(state.breakLength + 1, Consts.BREAK_LENGTH_MAX)
    };
  } else if (action.type === 'DECREMENT_BREAK_LENGTH') {
    return {
      ...state,
      breakLength: Math.max(state.breakLength - 1, Consts.BREAK_LENGTH_MIN)
    };
  } else if (action.type === 'INCREMENT_SESSION_LENGTH') {
    return {
      ...state,
      sessionLength: Math.min(
        state.sessionLength + 1,
        Consts.SESSION_LENGTH_MAX
      )
    };
  } else if (action.type === 'DECREMENT_SESSION_LENGTH') {
    return {
      ...state,
      sessionLength: Math.max(
        state.sessionLength - 1,
        Consts.SESSION_LENGTH_MIN
      )
    };
  } else if (action.type === 'SET_CURRENT_TIME') {
    return { ...state, currentTime: Math.max(0, action.value) };
  } else if (action.type === 'SET_IS_BREAK') {
    return { ...state, isBreak: action.value };
  } else if (action.type === 'TOGGLE') {
    return { ...state, isRunning: !state.isRunning };
  } else if (action.type === 'RESET') {
    return { ...initialState };
  }

  return state;
};

export default reducer;
