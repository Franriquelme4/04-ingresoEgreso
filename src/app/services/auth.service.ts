import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {
  }

  crearUsuario(nombre:string,correo:string,password:string){
    return  this.auth.createUserWithEmailAndPassword(correo,password);
  }

  login(correo:string,password:string){
    return  this.auth.signInWithEmailAndPassword(correo,password);
  }

  logout(){
    return this.auth.signOut();
  }
}
