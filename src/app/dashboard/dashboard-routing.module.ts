import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { DashboardIngresoComponent } from '../ingreso-egreso/dashboard-ingreso/dashboard-ingreso.component';

const routes: Routes = [
  {path:'',component:DashboardIngresoComponent},
  {path:'ingreso-egreso',component:IngresoEgresoComponent},
  {path:'detalle',component:DetalleComponent},
  {path:'estadistica',component:EstadisticaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
