import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private service:AuthService,private router:Router) { }

  displaySidebar = false;

  closeSidebar() {
    this.displaySidebar = false;
  }
  ngOnInit() {
    this.items = [{
        label: 'Ingreso y Egreso',
        items: [
            {label: 'Dashboard', icon: 'pi pi-chart-bar',routerLink: ['/app']},
            {label: 'Ingresos y Egresos', icon: 'pi pi-book', routerLink: ['/app/ingreso-egreso']},
            {label: 'Detalles', icon: 'pi pi-folder', routerLink: ['/app/detalle']},
            {label: 'Cerrar Sesion', icon: 'pi pi-backward', command:()=>this.logout()},
        ]
    }];
}

logout(){

  this.service.logout()
  .then(response =>{
    console.log(response);
    this.router.navigate(['/login']);
  })
  .catch(error=>{
    console.log(error);

  })

}



}
