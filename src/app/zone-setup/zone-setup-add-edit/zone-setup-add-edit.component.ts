import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ZoneSetupService} from '../zone-setup.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-zone-setup-add-edit',
  templateUrl: './zone-setup-add-edit.component.html',
  styleUrls: ['./zone-setup-add-edit.component.css']
})
export class ZoneSetupAddEditComponent implements OnInit {
  check_update:boolean = false;
  upDateData:any ={}
 form:any
 @Output() addData: EventEmitter<any> = new EventEmitter();
 formAddData:any = this.addData
  spinner: boolean=false
  formError: any ={}
  constructor(private _ZoneSetupService:ZoneSetupService) {  this.createForm();}

  ngOnInit(): void {
  
   this._ZoneSetupService.updateDataShared.subscribe((data:any)=>{
     this.upDateData= data;
     console.log(data,"setp zone");
     this.check_update = true
     this.createForm();

   })
  
  }
  createForm() {
    this.form = new FormGroup({
      status:new FormControl(false),
      zoneName:new FormControl(this.upDateData.zoneName?this.upDateData.zoneName:null,[Validators.required]),
     });
  }
  onSubmit(){
   this.spinner = true;
   this.check_update == false?this.newZoneSetUp():this.subZoneUpdate()
  }
  newZoneSetUp(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result:any) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
        if(this.form.valid){
          this._ZoneSetupService.ZoneSetupAdd(this.form.value).subscribe(
            {
              next:(data:any)=>{
                this.addData.emit(data);
                console.log(data);
                this.spinner = false;
                this._ZoneSetupService.addDataShared.next(data);
                
              }
            }
          )
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
  subZoneUpdate(){
    this._ZoneSetupService.addDataShared.unsubscribe()
    this.spinner = true;
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result:any) => {
      if (result.value) {
     
        if(this.form.valid){
          this._ZoneSetupService.ZoneSetupUpdate(this.upDateData._id,this.form.value).subscribe(
            {
              next:(data:any)=>{
                Swal.fire('Removed!', 'Product removed successfully.', 'success');
                this.spinner = false;
                // this._ZoneSetupService.NewUpdateDataShared.next(data.data)
                this._ZoneSetupService.addDataShared.next(data);
              },
              error: (err:any)=>{
                this.spinner = false;
                console.log(err,"error>>>>>>>>>");
                const errors:any = err.error.errors;
                errors.map((item:any) =>{
                    this.formError[item.param] = item.msg;
                })
                if(this.formError['zoneName']){

                  Swal.fire('Cancelled', this.formError.zoneName, 'error');
                }
              },
            }
          )
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.spinner = false;
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}
