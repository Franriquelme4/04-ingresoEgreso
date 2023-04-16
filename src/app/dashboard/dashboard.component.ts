import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import { setItems } from '../ingreso-egreso/ingresoEgreso.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  userSubs:Subscription;
  ingresoEgresoSubs:Subscription | undefined;
  constructor(private store:Store<AppState>,private service:IngresoEgresoService){
    this.userSubs = this.store.select('user').pipe(
      filter(auth=>auth.user!=null)
    ).subscribe(({user})=>{
       this.ingresoEgresoSubs = this.service.initIngresoEgresoListener(user?.uid).subscribe(ingresoEgreso =>{
        this.store.dispatch(setItems({ingresoEgreso:ingresoEgreso}))

       })
    })

  }
  ngOnDestroy(): void {
 this.userSubs.unsubscribe();
 this.ingresoEgresoSubs?.unsubscribe();
  }
  ngOnInit(): void {

  }
}
