import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DeviceService } from 'src/app/device-setup/device.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VerifyComponent } from 'src/app/shared/share-component/verify/verify.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  DashboardTable: any
  dialogRef!: MatDialogRef<VerifyComponent>;

  spinner: any
  ngOnInit(): void {
    this.dashBoardList()
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private deviceService: DeviceService, public dialog: MatDialog) { }


  dashBoardList() {
    this.deviceService.deviceList().subscribe((res: any) => {
      console.log(res);
      this.DashboardTable = res.data

    })
  }


  powerUpdate(e: any, id: any): void {
    this.dialogRef = this.dialog.open(VerifyComponent, {
      // width: '40%',
      // height: '25%',
      // data: { name: this.name, animal: this.animal }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.dashBoardList()
      if (result.status == true) {
        this.onClick(e, id)
      } else {
        this.dashBoardList()
      }
      // this.animal = result;
    });
  }


  onClick(e: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want power change..?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result: any) => {
      if (result.value) {
        const value: boolean = e == true ? false : true;
        this.deviceService.updatePower(id, value).subscribe((res: any) => {
          console.log(res);
          Swal.fire('Saved!', '', 'success')
          this.spinner = false;
          this.dashBoardList()
        }, (err: any) => {
          console.log(err);
          this.spinner = false;
          console.log(err, "error>>>>>>>>>");
          const errors: any = err.error.errors;
          Swal.fire('Cancelled', 'error');

        })
      }

    })
  }

}
