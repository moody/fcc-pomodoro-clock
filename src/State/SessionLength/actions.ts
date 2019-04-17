import { ActionCreator } from 'redux';
import { IncrementAction, ResetAction, DecrementAction } from './types';

export const increment: ActionCreator<IncrementAction> = () => ({
  type: '@@sessionLength/INCREMENT'
});

export const decrement: ActionCreator<DecrementAction> = () => ({
  type: '@@sessionLength/DECREMENT'
});

export const reset: ActionCreator<ResetAction> = () => ({
  type: '@@sessionLength/RESET'
});
