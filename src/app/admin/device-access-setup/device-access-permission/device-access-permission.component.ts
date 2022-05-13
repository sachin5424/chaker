import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DeviceAccessSetUpService } from '../device-access-setup.service';

@Component({
  selector: 'app-device-access-permission',
  templateUrl: './device-access-permission.component.html',
  styleUrls: ['./device-access-permission.component.css']
})
export class DeviceAccessPermissionComponent implements OnInit {
  panelOpenState = true;
  userId:string | undefined;
  typesOfShoes: string[] = ['LIST', 'ADD', 'UPDATE', 'DELETE', ];
  typesOfShoes1: any[] = [{title:'List View'} ,{title:'Add'},{title:'Update'}];
  dataSource:any [] =[];
  data:any [] =[]
  dataId:any[] =[]
  userList:any[] = []
  testData:any [] =[];
  tempPermissionsID:any[] = [
    
]
  AddPermissionsArray:any[] = [];
  userForm = new FormGroup({
    userId:new FormControl()
  })
  checkedList: any;
  checklist:any;
  masterSelected: any;
  constructor(private _http: DeviceAccessSetUpService) { }

  ngOnInit(): void {
    this.tempPermissionsID = [
      "623acc4d5d498d065a8edb92"
    ];
    this.allPermissionData();
    this.getUserList()

  }

  allPermissionData(){
    this._http.getPermissionDeviceAccess().subscribe((res:any)=>{
      //console.log(res.data,"???");
      this.testData = res.data;
       this.checkUncheckAll()
      res.data.map((item:any)=>{
       //console.log(item.model_name);
       
       this.data.push(item.model_name)
     
      
      });
      this.data = [...new Set(this.data)]
      //console.log(this.data);
      
    })
  }

  getUserList() {
     this._http.getUserList().subscribe((res:any)=>{
       this.userList =res.data
       //console.log(res.data,"???>>?user list");
       
     })
  }
  test(id:string){
    this.AddPermissionsArray.push(id);
    //console.log(this.AddPermissionsArray);
    //console.log(this.userForm.value);
  }
  
  addPermission(){
    if(this.userForm.valid){
      const options:any ={
        userId:this.userForm.value.userId,
        permissions:this.AddPermissionsArray
      };
      this._http.addPermissions(options).subscribe((res:any)=>{
        alert('done')
        //console.log(res,"??>?>?");
        
      })
      //console.log(options,"?");
      
    }
  }

  getCheckedItemList(){
   
    this.checkedList = this.tempPermissionsID
    // for (var i = 0; i < this.checklist.length; i++) {
    //   if(this.checklist[i].isSelected)
    //   this.checkedList.push(this.checklist[i]);
    // }
    // this.checkedList = JSON.stringify(this.checkedList);
  }
    // The master checkbox will check/ uncheck all items
    checkUncheckAll() {
      for (var i = 0; i < this.testData.length; i++) {
         this.testData[i]['checked'] = true
      }
      console.log(this.testData);
      
      // this.getCheckedItemList();
    }
}
