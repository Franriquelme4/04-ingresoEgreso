import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardIngresoComponent } from './dashboard-ingreso/dashboard-ingreso.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NgChartsModule } from 'ng2-charts';
import { CardModule } from 'primeng/card';
import { StoreModule } from '@ngrx/store';
import { ingresoEgresoReducer } from './ingresoEgreso.reducer';



@NgModule({
  declarations: [
    DashboardIngresoComponent,
    DetalleComponent,
    EstadisticaComponent,
    IngresoEgresoComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    TableModule,
    NgChartsModule,
    CardModule,
    StoreModule.forFeature('ingresoEgreso',ingresoEgresoReducer)
  ]
})
export class IngresoEgresoModule { }
