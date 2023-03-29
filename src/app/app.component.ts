import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


interface Item {
  name: string
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ingreso Engreso';


  constructor(private authService:AuthService){
    this.authService.initAuthListener();

  }
}
