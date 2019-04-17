import { State, Actions } from './types';
import { Reducer } from 'redux';
import {
  BREAK_LENGTH_MAX,
  BREAK_LENGTH_MIN,
  BREAK_LENGTH_DEFAULT
} from '../../constants';

export const initialState: State = {
  value: BREAK_LENGTH_DEFAULT
};

const reducer: Reducer<State, Actions> = (
  state: State = initialState,
  action
) => {
  if (action.type === '@@breakLength/INCREMENT') {
    return {
      value: Math.min(state.value + 1, BREAK_LENGTH_MAX)
    };
  } else if (action.type === '@@breakLength/DECREMENT') {
    return {
      value: Math.max(state.value - 1, BREAK_LENGTH_MIN)
    };
  } else if (action.type === '@@breakLength/RESET') {
    return { ...initialState };
  }

  return state;
};

export default reducer;
