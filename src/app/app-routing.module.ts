import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_http/auth.guard';
import {FORBIDDENPageComponent} from './forbidden-page/forbidden-page.component'

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),

  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component:  },  
  {
    path:"test",component:FORBIDDENPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
