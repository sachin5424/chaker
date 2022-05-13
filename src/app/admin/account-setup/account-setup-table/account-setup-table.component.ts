import { Component, Input, OnInit } from '@angular/core';
import { AccountSetupService } from '../account-setup.service';

@Component({
  selector: 'app-account-setup-table',
  templateUrl: './account-setup-table.component.html',
  styleUrls: ['./account-setup-table.component.css']
})
export class AccountSetupTableComponent implements OnInit {
   password:boolean = false;
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() Delete_Item_Permissions:any
  @Input() Update_Item_Permissions:any
  @Input() View_Item_Permissions:any
  temp:any ={}
  displayedColumns:string[] =[
    'username', 'gender','mobile','email','password','role','company','application',
    'account','status','action','edit'
  ]
  dataSource:any;
  constructor(private _accountSetupService: AccountSetupService) { 
   
  }

  ngOnInit(): void {
    this.getUserList()
    // alert(this.Delete_Item_Permissions)
  }
 
  passwordToggle(id:any){
    // alert("ok"+id)
    //  this.password !== this.password
    if(this.temp[id] == true){
      this.temp[id] = false
    }
    else{ 
      this.temp[id] = true
    }
    console.log(this.temp);
    
    // this.password = true
 
  }

  getUserList(){
    this._accountSetupService.getUserList().subscribe((res:any)=>{
      console.log(res,"????");
      this.dataSource = res.data
      
    })
  }


 
}
