import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private dialogRef: MatDialogRef<VerifyComponent>) { }
  ;

  msg:any = {}
  ngOnInit(): void {
  }
  form = new FormGroup({
    email: new FormControl(null, [Validators.required])
  })

  // getErrorMessage() {
  //   if (this.form.get('email').hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  Submit() {
    let pas = 123456
    if (this.form.value.email == pas) {
      this.dialogRef.close({ status: true })
    }else{
      this.msg['err'] = 'incorrect password'
    }
    // console.log(this.form.value);

  }

}
