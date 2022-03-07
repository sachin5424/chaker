import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceSetupRoutingModule } from './device-setup-routing.module';
import { DeviceSetupDashboardComponent } from './device-setup-dashboard/device-setup-dashboard.component';
import { DeviceSetupTableComponent } from './device-setup-table/device-setup-table.component';
import { DeviceSetupAddEditComponent } from './device-setup-add-edit/device-setup-add-edit.component';


@NgModule({
  declarations: [
    DeviceSetupDashboardComponent,
    DeviceSetupTableComponent,
    DeviceSetupAddEditComponent
  ],
  imports: [
    CommonModule,
    DeviceSetupRoutingModule
  ]
})
export class DeviceSetupModule { }
