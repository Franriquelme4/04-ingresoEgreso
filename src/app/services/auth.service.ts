import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {
  }

  initAuthListener(){
    this.auth.authState.subscribe(fuser =>{
      console.log(fuser?.email);
      console.log(fuser?.uid);
    })

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

  isAuth(){
    return this.auth.authState.pipe(
      map(fbuser=>fbuser!=null)
    );
  }
}
