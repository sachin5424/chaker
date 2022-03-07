import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [NavigationComponent, DashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule
  ]
})
export class AdminModule { }
