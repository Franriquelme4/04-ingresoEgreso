import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReduceres } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OrdenIngresoPipe } from './pipes/orden-ingreso.pipe';
import { AuthModule } from './auth/auth.module';
import { IngresoEgresoModule } from './ingreso-egreso/ingreso-egreso.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    OrdenIngresoPipe
  ],
  imports: [
    DashboardModule,
    IngresoEgresoModule,
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReduceres),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


