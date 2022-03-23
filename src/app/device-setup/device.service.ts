import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  addDataShared = new Subject();
  updateDataShared = new Subject();
  NewUpdateDataShared = new Subject();
  constructor(private _http: HttpClient) { }
  // SubZoneList(): Observable<any> {
  //     return this._http.get(environment.baseUrl + '/admin/list/sub-zone')
  // }
  AddDevice(data: any): Observable<any> {
    return this._http.post(environment.baseUrl + 'admin/add/device-setup', data)
  }
  deviceList(): Observable<any> {
    return this._http.get(environment.baseUrl + 'admin/list/device-setup')
  }
  deviceUpdate(id: any, data: any): Observable<any> {
    return this._http.put(environment.baseUrl + 'admin/update/device-setup/' + id, data)
  }
  deviceDetail(id: any): Observable<any> {
    return this._http.get(environment.baseUrl + 'admin/device-setup/details/' + id)
  }
  updatePower(id: any,data:any):any {
    return this._http.get(environment.baseUrl + 'admin/power/device-setup/' + id+'?power='+data)
  }


  verifyPassword(password:any){
    var pas = 123456;
    if(pas == password){
      return true
    }else{
      return false
    }
  }
  // /admin/update/device-setup/:id
} 