import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IngresoEgreso } from '../models/ingreso-egreso.models';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  crearIngresoEgreso(ingresoEgreso: IngresoEgreso) {
    this.firestore.doc(`${this.authService.user.uid}/ingresos-egresos`)
      .collection('items')
      .add(ingresoEgreso)
      .then((response) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El ingreso/Egreso fue agregado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => console.log('Error', error))
  }

  initIngresoEgresoListener(uid:string | undefined){
    return this.firestore.collection(`${uid}/ingresos-egresos/items`)
    .snapshotChanges()
    .pipe(map(
      snapshot=>(snapshot.map(documento=>{
          const data:any = documento.payload.doc.data();
          return {
            uid:documento.payload.doc.id,
           ...data
          }
        })
    )
    ))
  }
  borrarItemns(uidItem:string){

   return this.firestore.doc(`${this.authService.user.uid}/ingresos-egresos/items/${uidItem}`).delete();



  }
}
