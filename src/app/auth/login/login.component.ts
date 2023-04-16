import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { isLoading, stopLoading } from '../../shared/ui.actions';
import { Subscription, timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy{
  loginForm: FormGroup;
  loading:boolean = false;
  uiSupscription!: Subscription;
  constructor(private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private store:Store<AppState>) {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
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
  login() {
    if (this.loginForm.invalid) return;

    this.store.dispatch(isLoading())

    const { email, password } = this.loginForm.value;
    this.service.login(email, password)
      .then(credenciales => {
        console.log(credenciales);
        // Swal.close();
        this.store.dispatch(stopLoading())
        this.router.navigate(['/app']);
      })
      .catch(error => {
        this.store.dispatch(stopLoading())
        Swal.fire({
          icon: 'error',
          title: 'Error al hacer login',
          text: 'Something went wrong!',
        })
      })
  }

}
