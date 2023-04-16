import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.models';
import { IngresoEgresoService } from 'src/app/services/ingreso-egreso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit,OnDestroy {
  products:any = {};
  ingresosEgresos:IngresoEgreso[] = [];
  ingresoEgresoSubs:Subscription | undefined;
constructor(private store:Store<AppState>,private ingresoService:IngresoEgresoService){


}
  ngOnDestroy(): void {
    this.ingresoEgresoSubs?.unsubscribe();
  }
  ngOnInit(){
    this.store.select('ingresoEgreso').subscribe(({itemns})=>{
      console.log(itemns);

      this.ingresosEgresos = itemns

    })
  }


  eliminar(uid:string){

   this.ingresoService.borrarItemns(uid)
    .then(response=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El item fue eliminado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error=>{
      console.log(error);

    })



  }




}
