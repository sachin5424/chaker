import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceAccessSetupTableComponent } from './device-access-setup-table/device-access-setup-table.component';
import { DeviceAccessSetupDashboardComponent } from './device-access-setup-dashboard/device-access-setup-dashboard.component';
import { DeviceAccessSetupEditComponent } from './device-access-setup-edit/device-access-setup-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { DeviceAccessPermissionComponent } from './device-access-permission/device-access-permission.component';




const routes:Routes  = [
  {
    path:"",
    component:DeviceAccessSetupDashboardComponent
  },
  {
    path:"add-account",
    component:DeviceAccessSetupEditComponent
  },
 

]

@NgModule({
  declarations: [
    DeviceAccessSetupTableComponent,
    DeviceAccessSetupDashboardComponent,
    DeviceAccessSetupEditComponent,
    DeviceAccessPermissionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularMaterialModule
  ]
})
export class DeviceAccessSetupModule { }
