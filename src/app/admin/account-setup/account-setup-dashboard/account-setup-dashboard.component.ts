import { Component, OnInit } from '@angular/core';
import { AccountSetupService } from '../account-setup.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-account-setup-dashboard',
  templateUrl: './account-setup-dashboard.component.html',
  styleUrls: ['./account-setup-dashboard.component.css']
})
export class AccountSetupDashboardComponent implements OnInit {
   permissions: any =[];
   users_permissions: any =[];
   VIEW_PERMISSIONS:Boolean = false;
   DELETE_PERMISSIONS:Boolean = false;
   ADD_PERMISSIONS:Boolean = false
   UPDATE_PERMISSIONS:Boolean = false
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns:string[] =[
    'username', 'gender','mobile','email','password','role','company','application',
    'account','status','action'
  ]
  dataSource = ELEMENT_DATA;
  constructor(private _http:AccountSetupService) { 
    this._http.CheckSubZonePermission().subscribe((res:any)=>{

      res.data.map((value:any)=>{
        this.permissions = [...this.permissions,...value.permissions]
      })
      console.log(this.permissions,"?>:?>:>");
      this.permissions.map((value:any)=>{
        console.log(value,".");
        
        if(value.model_name == 'users'){
            this.users_permissions.push(value)
        }
        this.users_permissions.map((value:any)=>{
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
      console.log(this.users_permissions,"?>:?>:>,users_permissions");
    })
  }

  ngOnInit(): void {
  }


}



