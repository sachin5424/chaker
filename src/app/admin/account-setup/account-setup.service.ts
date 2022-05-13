import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AccountSetupService {
    permission: any[] = [
        {
            model_name: 'users',
            method: 'POST',
        },
        {
            model_name: 'users',
            method: 'GET',
        },
        {
            model_name: 'users',
            method: 'DELETE',
        },
        {
            model_name: 'users',
            method: 'PUT',
        }
    ]
    constructor(private _http: HttpClient) { }
    
    getUserList() {
        return this._http.get(environment.baseUrl + '/admin/user-list')
    }
    postUserRegister(data:any) {
        return this._http.post(environment.baseUrl + '/user-register', data)
    }
    userDetails(id:String) {
        return this._http.get(environment.baseUrl + '/admin/user-details/'+ id)
    }
    userDetailsUpdate(id:String,data:any){
        return this._http.put(environment.baseUrl + '/admin/user-update/'+ id, data)
    }
    CheckSubZonePermission() {
        return this._http.post(environment.baseUrl + 'admin/user/check/permission', this.permission)
    }
}