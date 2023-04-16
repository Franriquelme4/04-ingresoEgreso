import { createAction, props } from '@ngrx/store';
import { Usuario } from '../models/usuario.models';
import { IngresoEgreso } from '../models/ingreso-egreso.models';

export const setItems = createAction(
  '[IngresoEgreso] setItems',
  props<{ ingresoEgreso: IngresoEgreso[] }>()
);

export const unSetItems = createAction('[IngresoEgreso] inSetItems');
