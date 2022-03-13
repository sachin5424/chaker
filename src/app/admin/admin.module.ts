import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { HomeComponent } from './home/home.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { ShareComponentModule } from '../shared/share-component/share-component.module';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [NavigationComponent, DashboardComponent, HomeComponent, DeviceDetailComponent, ReportComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    ShareComponentModule
  ]
})
export class AdminModule { }
