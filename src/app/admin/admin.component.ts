import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import {HeaderDashboardComponent} from "../layouts/headerDashboard/headerDashboard.component";
import {SidebarComponent} from "../layouts/sidebar/sidebar.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderDashboardComponent,
    SidebarComponent
  ],
  templateUrl: './admin.component.html'
})

export class AdminComponent {
  constructor() { }
}
