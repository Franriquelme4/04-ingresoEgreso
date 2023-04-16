import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';
import * as ui from './shared/ui.reducer';
import * as auth from './auth/auth.reducer';
import * as ingreso from './ingreso-egreso/ingresoEgreso.reducer';

export interface AppState {
  ui: ui.State,
  user:auth.State,
  ingresoEgreso:ingreso.State,
}

export const appReduceres:ActionReducerMap<AppState> = {
  ui: ui.uiReducer,
  user:auth.authReducer,
  ingresoEgreso:ingreso.ingresoEgresoReducer
}
