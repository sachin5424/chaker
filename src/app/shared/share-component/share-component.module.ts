import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyComponent } from './verify/verify.component';
import { AngularMaterialModule } from '../angular-material.module';
 


@NgModule({
  declarations: [
  
    VerifyComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    VerifyComponent
  ]
})
export class ShareComponentModule { }
