import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.models';
import { IngresoEgresoService } from 'src/app/services/ingreso-egreso.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-dashboard-ingreso',
  templateUrl: './dashboard-ingreso.component.html',
  styleUrls: ['./dashboard-ingreso.component.css']
})
export class DashboardIngresoComponent implements OnInit{

  ingresos = 0;
  egresos = 0;
  totalIngresos = 0;
  totalEgresos = 0;
doughnutChartLabels: string[] = [ 'Ingresos', 'Egresos' ];
doughnutChartData: ChartData<'doughnut'> = {
  datasets: []
};
doughnutChartType: ChartType = 'doughnut';

    // events
  constructor(private store:Store<AppState>,private ingresoService:IngresoEgresoService){
  }
  ngOnInit(): void {
    this.store.select('ingresoEgreso').subscribe(({itemns})=>{
      this.generarEstadistica(itemns);
    })
  }

  generarEstadistica(itemns:IngresoEgreso[]){

    itemns.forEach(({descripcion,monto,tipo})=>{
console.log(tipo);

      if (tipo =='ingreso') {
        this.ingresos++;
        this.totalIngresos = this.totalIngresos + monto;
      } else {
        this.egresos++;
        this.totalEgresos = this.totalEgresos + monto;
      }

    })

    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ this.totalEgresos, this.totalIngresos] }
      ]
    };

  }



}
