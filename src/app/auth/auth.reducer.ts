import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from '../models/usuario.models';
import { setUser, unSetUser } from './auth.actions';


export interface State {
  user: Usuario | null;
}

export const initialState:State = { user:null}
export const authReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => {
    return { ...state, user: { ...user } };
  }),
  on(unSetUser,(state =>({...state,user:null})))
);
