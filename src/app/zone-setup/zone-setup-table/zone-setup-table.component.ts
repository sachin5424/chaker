import { Component, Input, OnInit } from '@angular/core';
import { fadeOut, blub } from '../../shared/template.animations';
import { MatTableDataSource } from '@angular/material/table';
import { ZoneSetupService } from '../zone-setup.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-zone-setup-table',
  templateUrl: './zone-setup-table.component.html',
  styleUrls: ['./zone-setup-table.component.css'],
  animations: [fadeOut, blub],
})
export class ZoneSetupTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'longitude', 'status', 'stime', 'action', 'delete'];
  dataSource: any;
  @Input() adddata!: any;
  constructor(private _htp: ZoneSetupService) {
    console.log(this.adddata, "jhgfds");

  }
  onClose(event: any) {
    // this.sendData =event;
    console.log(event, "table");

  }
  ngOnInit(): void {
    this.ZoneSetupList();
    this._htp.addDataShared.subscribe((res: any) => {
      console.log(res, "??????????");
      // this.dataSource.data.push(res.data);
      this.dataSource = [...this.dataSource, res.data];
      // this.dataSource._updateChangeSubscription();
      // this.dataSource = new MatTableDataSource(res.da)

    });

    this._htp.addDataShared.subscribe((data:any)=>{
      console.log(data,"??update value");
       const elementIndex:any = this.dataSource.findIndex(((obj:any) => obj._id == data._id));
        console.log(elementIndex,"????");
       this.dataSource[elementIndex].zoneName = data.zoneName
    });
  }
  onRowClick(row: any) {
    this.dataSource = new MatTableDataSource(this.dataSource.data.filter((d: any) => d.id !== row.id));
  }

  ZoneSetupList() {
    this._htp.ZoneSetupList().subscribe(
      {
        next: (data: any) => {
          this.dataSource = data.data

        }
      }
    )
  }
  ZoneSetupDelete(iteam: any) {

    Swal.fire({
      // title: 'Are you sure?',
      text: `Do you want ${iteam.zoneName} to be deleted.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this._htp.ZoneSetupDelete(iteam._id).subscribe(
          {
            next: (data: any) => {
              this.dataSource = this.dataSource.filter((value: any) => {
                return value._id != iteam._id;
              });

            }
          }
        );


      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', '', 'warning');
      }
    });

  }
  updateZoneSetUp(iteam:any){
    this._htp.updateDataShared.next(iteam);
  }
}
