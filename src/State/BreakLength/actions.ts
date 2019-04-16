import { ActionCreator } from 'redux';
import { IncrementAction, ResetAction, DecrementAction } from './types';

export const increment: ActionCreator<IncrementAction> = () => ({
  type: '@@breakLength/INCREMENT'
});

export const decrement: ActionCreator<DecrementAction> = () => ({
  type: '@@breakLength/DECREMENT'
});

export const reset: ActionCreator<ResetAction> = () => ({
  type: '@@breakLength/RESET'
});
