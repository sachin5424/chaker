import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubZoneService } from 'src/app/sub-zone/sub-zone.service';
import { ZoneSetupService } from "../../zone-setup/zone-setup.service";
import { DeviceService } from '../device.service';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-device-setup-add-edit',
  templateUrl: './device-setup-add-edit.component.html',
  styleUrls: ['./device-setup-add-edit.component.css']
})
export class DeviceSetupAddEditComponent implements OnInit {

  constructor(private _SubZoneService: SubZoneService, private _zoneService: ZoneSetupService, private _deviceService: DeviceService, private route: ActivatedRoute, private router: Router//
  ) { }
  spinner: boolean = false;
  update: Boolean = false;
  zoneList: any
  subZoneList: any
  formError: any = {}
  get_data: any = {}
  deviceType: any
  id: any
  ngOnInit(): void {
    this.getZoneList()
    this.getSubZoneList()
    if (this.route.snapshot.paramMap.get('id')) {
      var id = this.route.snapshot.paramMap.get('id');
      this.getDeviceDetail(id)
    }
  }
  getDeviceDetail(id: any) {
    this._deviceService.deviceDetail(id).subscribe((res: any) => {
      console.log(res);
      this.get_data = res.data[0]
      this.setValue()
      this.update = true
    })
  }


  // form() {
  //   if (this.update) {

  // }
  // else {
  deviceSetupForm = new FormGroup({
    zoneId: new FormControl(null, [Validators.required]),
    subZoneId: new FormControl(null, [Validators.required]),
    imeiNumber: new FormControl(null, [Validators.required]),
    simNumber: new FormControl(null, [Validators.required]),
    PumpHp: new FormControl(null, [Validators.required]),
    operatorName: new FormControl(null, [Validators.required]),
    operatorNumber: new FormControl(null, [Validators.required]),
    installationDate: new FormControl(null, [Validators.required]),
    serviceOverDate: new FormControl(null, [Validators.required]),
    smsNumber: new FormControl(null, []),
    smsStatus: new FormControl(null, []),
    applicationType: new FormControl(null, [Validators.required]),
    place: new FormControl(null, [Validators.required]),
    deviceType: new FormControl(null, [Validators.required]),

  });
  // }
  // }
  setValue() {
    console.log(this.get_data.installationDate, "date");
    var installationDate = this.formatDate(this.get_data.installationDate)
    var serviceOverDate = this.formatDate(this.get_data.serviceOverDate)
    this.deviceSetupForm.patchValue({

      zoneId: this.get_data.zoneId._id,
      subZoneId: this.get_data.subZoneId._id,
      imeiNumber: this.get_data.imeiNumber,
      simNumber: this.get_data.simNumber,
      PumpHp: this.get_data.PumpHp,
      operatorName: this.get_data.operatorName,
      operatorNumber: this.get_data.operatorNumber,
      installationDate: installationDate,
      serviceOverDate: serviceOverDate,
      smsNumber: this.get_data.smsNumber,
      smsStatus: this.get_data.smsStatus,
      applicationType: this.get_data.applicationType,
      place: this.get_data.place,
      deviceType: this.get_data.deviceType,
    });
  }
  private formatDate(date: any) {
    let newDate = new Date(date);
    return newDate.toJSON().split('T')[0];
  }
  getZoneList() {
    this._zoneService.ZoneSetupList().subscribe((res: any) => {
      console.log(res, "zone list");
      this.zoneList = res.data
    })
  }

  getSubZoneList() {
    this._SubZoneService.SubZoneList().subscribe((res: any) => {
      console.log(res, "subzone");
      this.subZoneList = res.data
    })
  }

  onSubmit() {
    if (this.deviceSetupForm.valid) {
      this.addZoneData()
    }
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
        if (this.deviceSetupForm.valid) {
          this._deviceService.AddDevice(this.deviceSetupForm.value).subscribe(
            {
              next: (data: any) => {
                Swal.fire('Saved!', '', 'success')
                this.spinner = false;
                this._deviceService.addDataShared.next(data);
              },
              error: (err) => {
                this.spinner = false;
                console.log(err, "error>>>>>>>>>");
                const errors: any = err.error.errors;
                if (errors) {
                  errors.map((item: any) => {
                    this.formError[item.param] = item.msg;
                  })
                }
                if (this.formError) {
                  // console.log(this.formError);
                  Swal.fire('Cancelled', Object.keys(this.formError)[0] + " " + this.formError[Object.keys(this.formError)[0]], 'error').then((err) => {
                    console.log(err, "error");
                    errors.map((item: any) => {
                      this.formError[item.param] = item.msg;
                    })
                  });
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


  updateDevice() {
    // console.log(this.deviceSetupForm.value)
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result: any) => {
      if (result.value) {
        if (this.deviceSetupForm.valid) {
          this._deviceService.deviceUpdate(this.get_data._id, this.deviceSetupForm.value).subscribe(
            {
              next: (data: any) => {
                Swal.fire('Saved!', '', 'success')
                this.spinner = false;

                this._deviceService.addDataShared.next(data);
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
}
