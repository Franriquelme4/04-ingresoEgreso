import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgreso } from '../models/ingreso-egreso.models';

@Pipe({
  name: 'ordenIngreso'
})
export class OrdenIngresoPipe implements PipeTransform {

  transform(itemns: IngresoEgreso[]): IngresoEgreso[] {
    return itemns.sort((a, b) => {
      if (a.tipo == 'ingreso') {
        return -1
      } else {
        return 1;
      }
    });
  }

}
