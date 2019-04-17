import { Action } from 'redux';

export interface State {
  breakLength: number;
  sessionLength: number;
  currentTime: number;
  isBreak: boolean;
  isRunning: boolean;
}

export interface IncrementBreakLengthAction extends Action {
  type: 'INCREMENT_BREAK_LENGTH';
}

export interface DecrementBreakLengthAction extends Action {
  type: 'DECREMENT_BREAK_LENGTH';
}

export interface IncrementSessionLengthAction extends Action {
  type: 'INCREMENT_SESSION_LENGTH';
}

export interface DecrementSessionLengthAction extends Action {
  type: 'DECREMENT_SESSION_LENGTH';
}

export interface SetCurrentTimeAction extends Action {
  type: 'SET_CURRENT_TIME';
  value: number;
}

export interface SetIsBreakAction extends Action {
  type: 'SET_IS_BREAK';
  value: boolean;
}

export interface ToggleAction extends Action {
  type: 'TOGGLE';
}

export interface ResetAction extends Action {
  type: 'RESET';
}

export type Actions =
  | IncrementBreakLengthAction
  | DecrementBreakLengthAction
  | IncrementSessionLengthAction
  | DecrementSessionLengthAction
  | SetCurrentTimeAction
  | SetIsBreakAction
  | ToggleAction
  | ResetAction;
