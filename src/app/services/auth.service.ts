import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.models';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth,public fireStore:AngularFirestore) {
  }

  initAuthListener(){
    this.auth.authState.subscribe(fuser =>{
      console.log(fuser?.email);
      console.log(fuser?.uid);
    })

  }


  crearUsuario(nombre:string,correo:string,password:string){
    return  this.auth.createUserWithEmailAndPassword(correo,password).then(({user})=>{

      const newUser = new Usuario(user?.uid,nombre,correo);

      return this.fireStore.doc(`${user?.uid}/usuario`).set({...newUser})

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
