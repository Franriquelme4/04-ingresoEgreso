import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.models';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { setUser, unSetUser } from '../auth/auth.actions';
import { Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  userSubscriptions:Subscription | undefined;

  constructor(public auth: AngularFireAuth,public fireStore:AngularFirestore,private store:Store<AppState>) {
  }
  ngOnDestroy(): void {
  }

  initAuthListener(){
    this.auth.authState.subscribe(fuser =>{
      if(fuser){
       this.userSubscriptions = this.fireStore.doc(`${fuser?.uid}/usuario`).valueChanges()
          .subscribe((fireUser:any)=>{
            const usuarioData:Usuario = {
              uid:fireUser.uid,
              nombre:fireUser.nombre,
              email:fireUser.email
            }
            this.store.dispatch(setUser({user:{...usuarioData}}))

          })
      }else{
        this.userSubscriptions?.unsubscribe();
        this.store.dispatch(unSetUser())
      }

    })

  }


  crearUsuario(nombre:string,correo:string,password:string){
    return  this.auth.createUserWithEmailAndPassword(correo,password).then(({user})=>{

      const usuario:Usuario = {
        uid:user?.uid,
        nombre:nombre,
        email:correo
      }


      return this.fireStore.doc(`${user?.uid}/usuario`).set({...usuario})

    })
  }

  login(correo:string,password:string){
    return  this.auth.signInWithEmailAndPassword(correo,password);
  }

  logout(){
    return this.auth.signOut();
  }
  isAuth(){
    return this.auth.authState.pipe(
      map(fbuser=>fbuser!=null)
    );
  }
}
