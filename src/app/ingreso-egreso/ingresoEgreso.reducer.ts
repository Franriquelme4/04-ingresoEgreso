import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from '../models/usuario.models';
import { IngresoEgreso } from '../models/ingreso-egreso.models';
import { setItems,unSetItems } from './ingresoEgreso.actions';


export interface State {
  itemns: IngresoEgreso[];
}

export const initialState:State = {
  itemns:[]
}
export const ingresoEgresoReducer = createReducer(
  initialState,
  on(setItems, (state, { ingresoEgreso }) => {
    return { ...state, itemns: [...ingresoEgreso] };
  }),
  on(unSetItems,(state =>({...state,itemns:[]})))
);
