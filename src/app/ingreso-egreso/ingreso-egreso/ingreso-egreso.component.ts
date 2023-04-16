import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.models';
import { IngresoEgresoService } from 'src/app/services/ingreso-egreso.service';
import { isLoading, stopLoading } from 'src/app/shared/ui.actions';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.css']
})
export class IngresoEgresoComponent implements OnDestroy{
  loading:boolean = false;
  ingresoForm:FormGroup;
  uiSupscription!: Subscription;
   constructor(private fb:FormBuilder,private service:IngresoEgresoService,private store:Store<AppState>){
    this.ingresoForm = this.fb.group({
      descripcion:['',Validators.required],
      monto:[0,Validators.required],
      tipo:['',Validators.required]
    })
    this.uiSupscription = this.store.select('ui').subscribe(ui=>{
      this.loading = ui.isLoading
    } )
  }

ngOnDestroy(): void {
  this.uiSupscription.unsubscribe();
}

  guardar(){
    if (this.ingresoForm.invalid) return;
    this.store.dispatch(isLoading())
    const ingresoEgreso:IngresoEgreso = {
      descripcion:this.ingresoForm.value.descripcion,
      monto:this.ingresoForm.value.monto,
      tipo:this.ingresoForm.value.tipo
    }
    this.service.crearIngresoEgreso(ingresoEgreso);
    this.store.dispatch(stopLoading())
  }
}
