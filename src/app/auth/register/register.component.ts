import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb:FormBuilder,
    private service:AuthService,
    private router:Router
    ) {
    this.registerForm = this.fb.group({
      nombre:['',Validators.required],
      correo:['',Validators.required],
      password:['',Validators.required],
    })

  }

  ngOnInit(): void {

  }

  submit(){
    if(this.registerForm.invalid)return;

    const {nombre,correo,password} =   this.registerForm.value;

    this.service.crearUsuario(nombre,correo,password)
    .then(credenciales =>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error=>{
      console.log(error);

    })


  }

}
