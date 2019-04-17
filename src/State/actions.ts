import { ActionCreator } from 'redux';
import {
  IncrementBreakLengthAction,
  DecrementBreakLengthAction,
  IncrementSessionLengthAction,
  DecrementSessionLengthAction,
  ResetAction,
  ToggleAction,
  SetIsBreakAction,
  SetCurrentTimeAction
} from './types';

export const incrementBreakLength: ActionCreator<
  IncrementBreakLengthAction
> = () => ({
  type: 'INCREMENT_BREAK_LENGTH'
});

export const decrementBreakLength: ActionCreator<
  DecrementBreakLengthAction
> = () => ({
  type: 'DECREMENT_BREAK_LENGTH'
});

export const incrementSessionLength: ActionCreator<
  IncrementSessionLengthAction
> = () => ({
  type: 'INCREMENT_SESSION_LENGTH'
});

export const decrementSessionLength: ActionCreator<
  DecrementSessionLengthAction
> = () => ({
  type: 'DECREMENT_SESSION_LENGTH'
});

export const setCurrentTime: ActionCreator<SetCurrentTimeAction> = (
  value: number
) => ({
  type: 'SET_CURRENT_TIME',
  value
});

export const setIsBreak: ActionCreator<SetIsBreakAction> = (
  value: boolean
) => ({
  type: 'SET_IS_BREAK',
  value
});

export const toggle: ActionCreator<ToggleAction> = () => ({
  type: 'TOGGLE'
});

export const reset: ActionCreator<ResetAction> = () => ({
  type: 'RESET'
});
