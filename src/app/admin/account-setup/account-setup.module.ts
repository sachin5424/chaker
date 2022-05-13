import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSetupTableComponent } from './account-setup-table/account-setup-table.component';
import { AccountSetupDashboardComponent } from './account-setup-dashboard/account-setup-dashboard.component';
import { AccountSetupAddComponent } from './account-setup-add/account-setup-add.component';

import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { AccountSetupEditComponent } from './account-setup-edit/account-setup-edit.component';

const routes:Routes  = [
    {
      path:"",
      component:AccountSetupDashboardComponent
    },
    {
      path:"add-account",
      component:AccountSetupAddComponent
    },
    {
      path:"edit/:id",
      component:AccountSetupEditComponent
    },

]


@NgModule({
  declarations: [
    AccountSetupTableComponent,
    AccountSetupDashboardComponent,
    AccountSetupAddComponent,
    AccountSetupEditComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    
    RouterModule.forChild(routes)
  ]
})
export class AccountSetupModule { }
