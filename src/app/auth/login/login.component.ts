import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { ServiceNameService } from 'src/app/shared/sweest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordtype: boolean = false;
  formError: any = {}
  LoginForm = new FormGroup({
    email: new FormControl(null, [Validators.email]),
    password: new FormControl(null, [Validators.minLength(4)])
  })
  constructor(private _authService: AuthService, private _Swal: ServiceNameService, private _router: Router) { }

  ngOnInit(): void {
  }

  showPassword() {
    this.passwordtype = !this.passwordtype;
  }


  onSubmit() {
    if (this.LoginForm.valid) {
      this._authService.adminLogin(this.LoginForm.value).subscribe(
        {
          next: (res: any) => {
            //  this._Swal.successNotification("successfully Login !").then((value:any)=>{

            //  })
            console.log(res);
            window.localStorage.setItem("token", res.data)
            Swal.fire('Wellcome', "successfully Login !", 'success').then((value: any) => {
              this._router.navigate(['/admin/home'])
            })
          },
          error: (err: any) => {
            const errors = err.error.errors;
            errors.map((e: any) => {
              this.formError[e.param] = e.msg
            });

            Swal.fire('Cancelled', this.formError.email ? this.formError.email : this.formError.password, 'error');
            //  this._Swal.ErrorNotification(this.formError.email?this.formError.email:this.formError.password)         
          }
        }
      );
    }
    else {


    }
  }
  sweest() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Wellcome!', 'You Logged In  successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }

}
