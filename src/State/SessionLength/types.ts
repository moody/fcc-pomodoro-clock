import { Action } from 'redux';

export interface State {
  /** Current value of the SessionLength component. */
  value: number;
}

export interface IncrementAction extends Action {
  type: '@@sessionLength/INCREMENT';
}

export interface DecrementAction extends Action {
  type: '@@sessionLength/DECREMENT';
}

export interface ResetAction extends Action {
  type: '@@sessionLength/RESET';
}

export type Actions = IncrementAction | DecrementAction | ResetAction;
