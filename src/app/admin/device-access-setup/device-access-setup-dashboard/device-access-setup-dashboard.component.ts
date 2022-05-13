import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DeviceAccessPermissionComponent} from '../device-access-permission/device-access-permission.component'

@Component({
  selector: 'app-device-access-setup-dashboard',
  templateUrl: './device-access-setup-dashboard.component.html',
  styleUrls: ['./device-access-setup-dashboard.component.css']
})
export class DeviceAccessSetupDashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog()
  }
 
  openDialog() {
    const dialogRef = this.dialog.open(DeviceAccessPermissionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
