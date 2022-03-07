import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubZoneRoutingModule } from './sub-zone-routing.module';
import { SubZoneTableComponent } from './sub-zone-table/sub-zone-table.component';
import { SubZoneDashboardComponent } from './sub-zone-dashboard/sub-zone-dashboard.component';
import { SubZoneAddEditComponent } from './sub-zone-add-edit/sub-zone-add-edit.component';
import { AngularMaterialModule } from '../shared/angular-material.module';


@NgModule({
  declarations: [
    SubZoneTableComponent,
    SubZoneDashboardComponent,
    SubZoneAddEditComponent
  ],
  imports: [
    CommonModule,
    SubZoneRoutingModule,
    AngularMaterialModule
  ]
})
export class SubZoneModule { }
