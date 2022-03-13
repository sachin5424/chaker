import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeviceSetupAddEditComponent } from '../device-setup-add-edit/device-setup-add-edit.component';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-setup-table',
  templateUrl: './device-setup-table.component.html',
  styleUrls: ['./device-setup-table.component.css']
})
export class DeviceSetupTableComponent implements OnInit {

  constructor(private _deviceService: DeviceService, public dialog: MatDialog,) { }
  data: any = {};
  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this._deviceService.deviceList().subscribe((res: any) => {
      // console.log(res);
      this.data = res.data
    })
  }

  edit(data: any) {
    let dialogRef = this.dialog.open(DeviceSetupAddEditComponent, {
      data: {
        update: true,
        data: data
      },
      width: '85%',
      height: '85%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      this.getList()
    });
  }

}
