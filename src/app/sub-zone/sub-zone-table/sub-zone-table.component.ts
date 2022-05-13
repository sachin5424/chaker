import { Component, Input, OnInit } from '@angular/core';
import {fadeOut,blub} from '../../shared/template.animations';
import {   MatTableDataSource } from '@angular/material/table';
import {SubZoneService} from '../sub-zone.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sub-zone-table',
  templateUrl: './sub-zone-table.component.html',
  styleUrls: ['./sub-zone-table.component.css'],
  animations: [fadeOut, blub],
})
export class SubZoneTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','longitude','status','stime','action','delete',];
  dataSource:any;
  @Input() Update_Permissions:boolean = false
  @Input() Delete_Permissions:boolean = false;
  @Input() View_Permissions:boolean = false
  @Input() adddata!: any;
  constructor(private _SubZoneService:SubZoneService) { 
    console.log(this.adddata,"jhgfds");
    this._SubZoneService.NewUpdateDataShared.subscribe((data:any)=>{
      console.log(data,"??update value");
       const elementIndex:any = this.dataSource.findIndex(((obj:any) => obj._id == data._id));
        console.log(elementIndex,"????");
       this.dataSource[elementIndex].zoneName = data.zoneName
    });
  }
  onClose(event:any){
    // this.sendData =event;
    console.log(event,"table");
    
  }
  ngOnInit(): void {
    if(this.View_Permissions == false){
       this.dataSource = []
    }
    else{
      this.ZoneSetupList();
      
    }
    console.log(this.View_Permissions);
    
   
    this._SubZoneService.addDataShared.subscribe((data:any)=>{
   
      this.dataSource = [...this.dataSource,data.data]
    });
   
 


  }
  onRowClick(row:any) {
    this.dataSource = new MatTableDataSource(this.dataSource.data.filter((d:any) => d.id !== row.id));
  }

  ZoneSetupList(){
     this._SubZoneService.SubZoneList().subscribe(
       {
         next: (data:any)=>{
           this.dataSource = data.data
           console.log(this.dataSource,"data");
           
         }
       }
     )
  }
  ZoneSetupDelete(iteam:any){
    
    Swal.fire({
      // title: 'Are you sure?',
      text: `Do you want ${iteam.zoneName} to be deleted.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this._SubZoneService.SubZoneDelete(iteam._id).subscribe(
          {
            next: (data:any)=>{
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.dataSource = this.dataSource.filter((value:any)=>{
                return value._id != iteam._id;
              });
             
            },
        

           
          }
        )
  
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled','', 'warning');
      }
    });
   
 }

 ZoneSetupEdit(iteam:any){

   this._SubZoneService.updateDataShared.next(iteam);
 }

}
