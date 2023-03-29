import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule} from 'primeng/menubar'

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    MenubarModule



  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
