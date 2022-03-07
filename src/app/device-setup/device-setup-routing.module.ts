import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceSetupDashboardComponent } from './device-setup-dashboard/device-setup-dashboard.component';

const routes: Routes = [
  {
    path: '', component:DeviceSetupDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceSetupRoutingModule { }
