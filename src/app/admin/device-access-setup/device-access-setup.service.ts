import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class DeviceAccessSetUpService {
    constructor(private _http:HttpClient) { }
    
    getPermissionDeviceAccess(){
        return this._http.get(environment.baseUrl+'/admin/user/get/permission')
    }
    getUserList() {
        return this._http.get(environment.baseUrl + '/admin/user-list')
    }
    addPermissions(data:any){
        return this._http.post(environment.baseUrl+'/admin/user/create/permission',data)
    }
    chekUserPermissions(id:string){
        return this._http.get(environment.baseUrl+'admin/check/users/permission/'+id)
    }
}