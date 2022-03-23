import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceSetupAddEditComponent } from './device-setup-add-edit/device-setup-add-edit.component';
import { DeviceSetupDashboardComponent } from './device-setup-dashboard/device-setup-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceSetupDashboardComponent
  },
  {
    path: "add",
    component: DeviceSetupAddEditComponent
  },
  {
    path:"edit/:id",
    component:DeviceSetupAddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceSetupRoutingModule { }
