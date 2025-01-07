import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {DisplayUsersComponent} from "./user/display-users/display-users.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateComponent} from "./user/create/create.component";
import {ManageAccountsComponent} from "./account/manage-accounts/manage-accounts.component";


@NgModule({
  declarations: [
    DisplayUsersComponent,
    CreateComponent,
    ManageAccountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})

export class AdminModule { }
