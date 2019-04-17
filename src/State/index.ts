import { combineReducers, Reducer } from 'redux';

import breakLengthReducer, {
  initialState as initialBreakLengthState
} from './BreakLength/reducer';
import { State as BreakLengthState } from './BreakLength/types';

import sessionLengthReducer, {
  initialState as initialSessionLengthState
} from './SessionLength/reducer';
import { State as SessionLengthState } from './SessionLength/types';

export interface ApplicationState {
  breakLength: BreakLengthState;
  sessionLength: SessionLengthState;
}

export const getInitialState = (): ApplicationState => ({
  breakLength: { ...initialBreakLengthState },
  sessionLength: { ...initialSessionLengthState }
});

const rootReducer: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  breakLength: breakLengthReducer,
  sessionLength: sessionLengthReducer
});

export default rootReducer;
