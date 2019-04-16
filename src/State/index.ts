import { combineReducers, Reducer } from 'redux';
import breakLengthReducer, {
  initialState as initialBreakLengthState
} from './BreakLength/reducer';
import { State as BreakLengthState } from './BreakLength/types';

export interface ApplicationState {
  breakLength: BreakLengthState;
}

export const getInitialState = (): ApplicationState => ({
  breakLength: { ...initialBreakLengthState }
});

const rootReducer: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  breakLength: breakLengthReducer
});

export default rootReducer;
