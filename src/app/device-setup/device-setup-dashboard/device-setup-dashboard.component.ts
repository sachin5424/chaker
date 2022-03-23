import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceSetupAddEditComponent } from '../device-setup-add-edit/device-setup-add-edit.component';
import { DeviceSetupTableComponent } from '../device-setup-table/device-setup-table.component';


@Component({
  selector: 'app-device-setup-dashboard',
  templateUrl: './device-setup-dashboard.component.html',
  styleUrls: ['./device-setup-dashboard.component.css']
})
export class DeviceSetupDashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(): void {
    let dialogRef = this.dialog.open(DeviceSetupAddEditComponent, {
      width: '85%',
      height: '85%',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

