import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountSetupService } from '../account-setup.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-account-setup-edit',
  templateUrl: './account-setup-edit.component.html',
  styleUrls: ['./account-setup-edit.component.css']
})
export class AccountSetupEditComponent implements OnInit {
  hide = true;
  id:any
  userDetails:any = {}
  _state:any
  successForm:any = {

  };
  formError: any = {}
  accountSetupForm:any
  constructor(private _form: FormBuilder,private _accountSetupService: AccountSetupService,private route:ActivatedRoute,
    public dialog: MatDialog
    ) {
    this.accountSetupForm = this._form.group({
      username:new FormControl(),
      firstName:new FormControl(),
      lastName:new FormControl(),
      email:new FormControl(),
      gender:new FormControl(),
      password:new FormControl(),
      confirmPassword:new FormControl(),
      companyName:new FormControl(),
      application: new FormControl(),
      mobile: new FormControl(),
      status: new FormControl("active")
    })
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUserDetails(this.id)
 
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open('', {
  //     width: '250px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
  getUserDetails(id:string): void {
    this._accountSetupService.userDetails(id).subscribe((result:any) => {
      this.userDetails = result.data[0];
      console.log(this.userDetails,"user Details updated");
      this.userupdateForm()
      
    })
  }
  userupdateForm(){
   
    
    this.accountSetupForm = this._form.group({
      username:new FormControl(this.userDetails.username),
      firstName:new FormControl(this.userDetails.firstName,),
      lastName:new FormControl(this.userDetails.lastName,),
      email:new FormControl(this.userDetails.email,[Validators.email]),
      gender:new FormControl(this.userDetails.gender,),
      password:new FormControl(this.userDetails.password,),
      confirmPassword:new FormControl(this.userDetails.confirmPassword),
      companyName:new FormControl(this.userDetails.profile.companyName),
      application: new FormControl(this.userDetails.profile.application),
      mobileNumber: new FormControl(this.userDetails.mobileNumber),
      status: new FormControl("active")
    })
  }
  saveForm(){
    // if(this.accountSetupForm.valid){
      this._accountSetupService.userDetailsUpdate(this.id,this.accountSetupForm.value).subscribe((result:any)=>{
        console.log(result);
        
      })
    // }
    
  }

}


