import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AccountSetupService } from '../account-setup.service';

@Component({
  selector: 'app-account-setup-add',
  templateUrl: './account-setup-add.component.html',
  styleUrls: ['./account-setup-add.component.css'],
  animations: [
    trigger('animation', [
      transition(':increment', [
        style({ opacity: 0}),
        animate('200ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-1rem)' }),
        animate('200ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-1rem)' }))
      ])])
  ]
})
export class AccountSetupAddComponent implements OnInit {
  hide = true;
  _state:any
  successForm:any = {

  };
  formError: any = {}
  accountSetupForm:any
  constructor(private _form: FormBuilder,private _accountSetupService: AccountSetupService) {
     this.accountSetupForm = this._form.group({
       username:new FormControl(null, ),
       firstName:new FormControl(null,),
       lastName:new FormControl(null),
       email:new FormControl(null,[Validators.email]),
       gender:new FormControl(null,),
       password:new FormControl(null,),
       confirmPassword:new FormControl(),
       companyName:new FormControl(null),
       application: new FormControl(null),
       mobile: new FormControl(null),
       status: new FormControl("active")
     })
   }

  ngOnInit(): void {
  }

  saveForm(){
    // if(this.accountSetupForm.valid){
      this._accountSetupService.postUserRegister(this.accountSetupForm.value).subscribe((result:any) => {
        console.log(result);
         this.successForm['message'] = result.message
      },(err) => {
        console.log(err,"???error");
         const errors = err.error.errors;
         errors.forEach((item:any) =>
          {
            this.formError[item.param] = item.msg
          })
          console.log(this.formError,"?/????");
          
      })
    // }
    
  }
}
