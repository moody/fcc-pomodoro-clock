import { Action } from 'redux';

export interface State {
  /** Current value of the BreakLength component. */
  value: number;
}

export interface IncrementAction extends Action {
  type: '@@breakLength/INCREMENT';
}

export interface DecrementAction extends Action {
  type: '@@breakLength/DECREMENT';
}

export interface ResetAction extends Action {
  type: '@@breakLength/RESET';
}

export type Actions = IncrementAction | DecrementAction | ResetAction;
