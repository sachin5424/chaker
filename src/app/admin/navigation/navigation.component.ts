import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  // <button    mat-menu-item>Account setup</button>
  // <button mat-menu-item>Zone Setup </button>
  // <button mat-menu-item>Sub zone setup</button>
  // <button mat-menu-item>Device Setup</button>
  // <button mat-menu-item>Device Access Setup</button>
  zoneSetupbutton:any[] =
  [
    {
      title: 'Account setup',route:"/admin/account-setup"
    },
    {
      title: 'Zone Setup ',
      route:'/admin/zone-setup',
    },
    {
      title: 'Sub zone setup',route:"/admin/sub-zone"
    },
    {
      title: 'Device Setup',route:"/admin/device-setup"
    },
    {
      title: 'Device Access Setup',route:"/admin/device-access-setup"
    }
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private _router:Router,private _http:HttpClient) {
    this.CheckSubZonePermission().subscribe((result:any) => {
      console.log(result,"?>?>?<>><>><>><><><><><><><><><><><><><><><><><><><><><><>");
      
    })

  }
  logout(){
  
   Swal.fire({
    // title: 'Are you sure?',
    text: 'Do you want to log out.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, go ahead.',
    cancelButtonText: 'No',
  }).then((result) => {
    if (result.value) {
      Swal.fire('Removed!', 'You have been logged in successfully', 'success');
      setTimeout(() => {window.localStorage.clear();
        this._router.navigate(['/auth'])
      },1000
      )

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelled', 'ok', 'warning');
    }
  });


  }

  zoneSetupRoutes(route:string){
    this._router.navigate([route]);
  }
  CheckSubZonePermission(){
    return this._http.get(environment.baseUrl + '/admin/user/all/permission')
}
  
}
