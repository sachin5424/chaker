import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubZoneService } from '../sub-zone.service';

@Component({
  selector: 'app-sub-zone-dashboard',
  templateUrl: './sub-zone-dashboard.component.html',
  styleUrls: ['./sub-zone-dashboard.component.css']
})
export class SubZoneDashboardComponent implements OnInit {
  check_valid:any  [] =[]
  permissions: any[] =[]
  subZone_permissions: any =[]
  VIEW_PERMISSIONS: boolean  = false;
  DELETE_PERMISSIONS: boolean= false;
  UPDATE_PERMISSIONS: boolean = false;
  ADD_PERMISSIONS: boolean= false;
  constructor(private _http:SubZoneService,private _router:Router) { }

  ngOnInit(): void {
    console.log("ok;:");
    
    // this.checkPermissions()
    this.getPermission()
  }
  // checkPermissions(): void {
  //  this._http.CheckSubZonePermission().subscribe((res:any)=>{
  //    console.log(res,"??? zone permission");

  //    if(res.data.length ===0){
  //       // alert("ok")
  //       this._router.navigate(['/test'])
       
  //    }
  //    res.data.map((item:any)=>{
  //     // this.check_valid.push(item.module)
  //     this.check_valid = [...this.check_valid,...item.module]
  //    })
  //    if(!this.check_valid.includes('sub_zones')){
  //     this._router.navigate(['/test'])
  //    }

  //  });

   
  // }
  getPermission(){
    this._http.CheckSubZonePermission().subscribe((res:any)=>{

      res.data.map((value:any)=>{
        this.permissions = [...this.permissions,...value.permissions]
      })
      console.log(this.permissions,"?>:?>:>");
      this.permissions.map((value:any)=>{
        console.log(value,".");
        
        if(value.model_name == 'sub_zones'){
            this.subZone_permissions.push(value)
        }
        this.subZone_permissions.map((value:any)=>{
          if(value.method == 'GET'){
            this.VIEW_PERMISSIONS = true
          }
          if(value.method == 'DELETE'){
            this.DELETE_PERMISSIONS = true
          }
          if(value.method == 'PUT'){
            this.UPDATE_PERMISSIONS = true
          }
          if(value.method == 'POST'){
            this.ADD_PERMISSIONS = true
          }
         
        })
      })
      console.log(this.subZone_permissions,"?>:?>:>,subZone_permissions");
    })
  }
}
