import { Action, createReducer, on } from '@ngrx/store';
import { isLoading,stopLoading } from './ui.actions';

export interface State {
  isLoading: boolean;
}

export const initiaState:State = {
  isLoading: false
}
export const uiReducer = createReducer(initiaState,
  on(isLoading,state =>({...state,isLoading:true})),
  on(stopLoading,state =>({...state,isLoading:false})))
