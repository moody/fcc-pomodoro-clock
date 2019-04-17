import { State, Actions } from './types';
import { Reducer } from 'redux';
import {
  SESSION_LENGTH_MAX,
  SESSION_LENGTH_MIN,
  SESSION_LENGTH_DEFAULT
} from '../../constants';

export const initialState: State = {
  value: SESSION_LENGTH_DEFAULT
};

const reducer: Reducer<State, Actions> = (
  state: State = initialState,
  action
) => {
  if (action.type === '@@sessionLength/INCREMENT') {
    return {
      value: Math.min(state.value + 1, SESSION_LENGTH_MAX)
    };
  } else if (action.type === '@@sessionLength/DECREMENT') {
    return {
      value: Math.max(state.value - 1, SESSION_LENGTH_MIN)
    };
  } else if (action.type === '@@sessionLength/RESET') {
    return { ...initialState };
  }

  return state;
};

export default reducer;
