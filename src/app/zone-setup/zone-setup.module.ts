import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneSetupRoutingModule } from './zone-setup-routing.module';
import { ZoneSetupDashboardComponent } from './zone-setup-dashboard/zone-setup-dashboard.component';
import { ZoneSetupTableComponent } from './zone-setup-table/zone-setup-table.component';
import { ZoneSetupAddEditComponent } from './zone-setup-add-edit/zone-setup-add-edit.component';
import { AngularMaterialModule } from '../shared/angular-material.module';


@NgModule({
  declarations: [
    ZoneSetupDashboardComponent,
    ZoneSetupTableComponent,
    ZoneSetupAddEditComponent
  ],
  imports: [
    CommonModule,
    ZoneSetupRoutingModule,
   AngularMaterialModule
  ]
})
export class ZoneSetupModule { }
