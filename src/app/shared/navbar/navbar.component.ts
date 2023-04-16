import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  usuario:any='';
  constructor(private store:Store<AppState>) {
    this.store.select('user').subscribe(({user})=>{
      this.usuario = user?.email;

    })
   }

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
          {label: 'New', icon: 'pi pi-plus', url: 'https://primeng.org'},
          {label: 'Open', icon: 'pi pi-download', routerLink: ['/menu']},
          {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
      ]
  }];
  }

}
