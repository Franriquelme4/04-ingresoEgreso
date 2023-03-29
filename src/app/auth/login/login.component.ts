import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.service.login(email, password)
      .then(credenciales => {
        console.log(credenciales);
        this.router.navigate(['/app']);
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al hacer login',
          text: 'Something went wrong!',
        })
      })
  }

}
