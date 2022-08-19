import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from 'src/app/device-setup/device.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _deviceService: DeviceService) { }
  id: any
  spinner: any
  data: any = {}
  Latval:any 
  power: any
  dataSource:any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDeviceDetail()
  }


  getDeviceDetail() {
    this._deviceService.deviceDetail(this.id).subscribe((res: any) => {
      console.log(res);
      this.data = res.data[0]
      this.dataSource= this.data.timelog
      this.power = this.data.power
      this.Latval = res.data[0].location
      console.log(this.Latval , "lat");
      
    })
  }

 


  powerUpdate(e:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want power change..?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result: any) => {
      if (result.value) {
         const value:boolean = e == true?false:true;
        this._deviceService.updatePower(this.id, value).subscribe((res: any) => {
          console.log(res);
          Swal.fire('Saved!', '', 'success')
          this.spinner = false;
          this.getDeviceDetail()
        }, (err: any) => {
          console.log(err);
          this.spinner = false;
          console.log(err, "error>>>>>>>>>");
          const errors: any = err.error.errors;
          // errors.map((item: any) => {
          //   this.formError[item.param] = item.msg;
          // })
          // if (this.formError['zoneName']) {

          Swal.fire('Cancelled', 'error');
          // }

        })


      }

    })
  }
}