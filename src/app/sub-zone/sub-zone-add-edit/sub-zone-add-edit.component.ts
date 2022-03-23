import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubZoneService } from '../sub-zone.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sub-zone-add-edit',
  templateUrl: './sub-zone-add-edit.component.html',
  styleUrls: ['./sub-zone-add-edit.component.css']
})
export class SubZoneAddEditComponent implements OnInit {
  spinner: boolean = false;
  formError: any = {};
  upDateData: any = {}
  check_update: boolean = false
  form: any
  @Output() addData: EventEmitter<any> = new EventEmitter();
  formAddData: any = this.addData
  latitdude: any;
  longitude: any;
  constructor(private _SubZoneService: SubZoneService) {
    this._SubZoneService.updateDataShared.subscribe((data: any) => {
      this.upDateData = data;
      console.log(data, "update");
      this.createForm();
      this.check_update = true
      // this.latitdude = this.upDateData.location.coordinates[0]
      // this.longitude = this.upDateData.location.coordinates[1]

    });
    
  }
name:any
  newForm() {
    this.check_update = false;
    this._SubZoneService.updateDataShared.unsubscribe();
    this.createForm()
  }
  createForm() {
    this.form = new FormGroup({
      status: new FormControl(false),
      zoneName: new FormControl(this.upDateData.zoneName ? this.upDateData.zoneName : null, [Validators.required]),
      latitude: new FormControl(this.latitdude?this.latitdude:null, [Validators.required]),
      longitude: new FormControl(this.longitude?this.longitude:null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.createForm()
  }
  onSubmit() {
    this.spinner = true;
    this.check_update == false ? this.addZoneData() : this.subZoneUpdate()

  }
  addZoneData() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result: any) => {
      if (result.value) {

        if (this.form.valid) {
          this._SubZoneService.SubZoneAdd(this.form.value).subscribe(
            {
              next: (data: any) => {
                Swal.fire('Saved!', '', 'success')
                this.spinner = false;

                this._SubZoneService.addDataShared.next(data);
              },
              error: (err) => {
                this.spinner = false;
                console.log(err, "error>>>>>>>>>");
                const errors: any = err.error.errors;
                errors.map((item: any) => {
                  this.formError[item.param] = item.msg;
                })
                if (this.formError['zoneName']) {

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
  subZoneUpdate() {
    this.spinner = true;
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (this.form.valid) {
          this._SubZoneService.SubZoneUpdate(this.upDateData._id, this.form.value).subscribe(
            {
              next: (data: any) => {
                Swal.fire('Saved!', '', 'success')
                this.spinner = false;
                this._SubZoneService.NewUpdateDataShared.next(data.data)
                // this._SubZoneService.addDataShared.next(data);
              },
              error: (err) => {
                this.spinner = false;
                console.log(err, "error>>>>>>>>>");
                const errors: any = err.error.errors;
                errors.map((item: any) => {
                  this.formError[item.param] = item.msg;
                })
                if (this.formError['zoneName']) {

                  Swal.fire('Cancelled', this.formError.zoneName, 'error');
                }
              },
            }
          )
        }

      } else if (result.isDenied) {
        this.spinner = false;
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'This process is irreversible.',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, go ahead.',
    //   cancelButtonText: 'No, let me think',
    // }).then((result:any) => {
    //   if (result.value) {

    //     if(this.form.valid){
    //       this._SubZoneService.SubZoneUpdate(this.upDateData._id,this.form.value).subscribe(
    //         {
    //           next:(data:any)=>{
    //             Swal.fire('Removed!', 'Product removed successfully.', 'success');
    //             this.spinner = false;
    //             this._SubZoneService.NewUpdateDataShared.next(data.data)
    //             // this._SubZoneService.addDataShared.next(data);
    //           },
    //           error: (err)=>{
    //             this.spinner = false;
    //             console.log(err,"error>>>>>>>>>");
    //             const errors:any = err.error.errors;
    //             errors.map((item:any) =>{
    //                 this.formError[item.param] = item.msg;
    //             })
    //             if(this.formError['zoneName']){

    //               Swal.fire('Cancelled', this.formError.zoneName, 'error');
    //             }
    //           },
    //         }
    //       )
    //     }
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     this.spinner = false;
    //     Swal.fire('Cancelled', 'Product still in our database.)', 'error');
    //   }
    // });
  }

}
