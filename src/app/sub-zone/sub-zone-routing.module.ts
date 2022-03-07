import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubZoneDashboardComponent } from './sub-zone-dashboard/sub-zone-dashboard.component';

const routes: Routes = [
  {
    path: '', component:SubZoneDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubZoneRoutingModule { }
