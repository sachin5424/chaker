import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "dasboard",
        component: DashboardComponent,
      },
      {
        path: "zone-setup",
        loadChildren: () => import('../zone-setup/zone-setup.module').then(m => m.ZoneSetupModule)
      },
      {
        path: "sub-zone",
        loadChildren: () => import('../sub-zone/sub-zone.module').then(m => m.SubZoneModule)
      },
      {
        path: "device-setup",
        loadChildren: () => import('../device-setup/device-setup.module').then(m => m.DeviceSetupModule),

      },
      {
        path: "account-setup",
        loadChildren: () => import('./account-setup/account-setup.module').then(m => m.AccountSetupModule),

      },
      {
        path: "device-access-setup",
        loadChildren: () => import('./device-access-setup/device-access-setup.module').then(m => m.DeviceAccessSetupModule),

      },
      {
        path: "deviceDetail/:id",
        component: DeviceDetailComponent
      },
      {
        path: "report",
        component: ReportComponent
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
