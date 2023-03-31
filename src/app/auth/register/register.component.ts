import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/services/auth.service';
import { isLoading, stopLoading } from 'src/app/shared/ui.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  loading:boolean = false;
  uiSupscription!: Subscription;

  constructor(private fb:FormBuilder,
    private service:AuthService,
    private router:Router,
    private store:Store<AppState>
    ) {
    this.registerForm = this.fb.group({
      nombre:['',Validators.required],
      correo:['',Validators.required],
      password:['',Validators.required],
    })

    this.uiSupscription = this.store.select('ui').subscribe(ui=>{
      this.loading = ui.isLoading
    } )
  }
  ngOnDestroy(): void {
    this.uiSupscription.unsubscribe();
  }

  ngOnInit(): void {

  }

  submit(){
    if(this.registerForm.invalid)return;
    this.store.dispatch(isLoading())

    const {nombre,correo,password} =   this.registerForm.value;

    this.service.crearUsuario(nombre,correo,password)
    .then(credenciales =>{
      console.log(credenciales);
      this.store.dispatch(stopLoading())

      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: 'Your work has been saved',
      //   showConfirmButton: false,
      //   timer: 1500
      // })

      this.router.navigate(['/login'])
    })
    .catch(error=>{
      this.store.dispatch(stopLoading())

      console.log(error);

    })


  }

}
