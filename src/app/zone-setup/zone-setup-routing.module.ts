import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneSetupDashboardComponent } from './zone-setup-dashboard/zone-setup-dashboard.component';


const routes: Routes = [
  {
    path: '',  
    component:ZoneSetupDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneSetupRoutingModule { }
