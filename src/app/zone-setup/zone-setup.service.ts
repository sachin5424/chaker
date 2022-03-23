import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ZoneSetupService {
    addDataShared = new Subject();
    updateDataShared = new Subject();
    constructor(private _http: HttpClient) { }
    ZoneSetupList():Observable<any>{
     return this._http.get(environment.baseUrl + 'admin/list/zone-setup')
    }
    ZoneSetupAdd(data:any):Observable<any>{
        return this._http.post(environment.baseUrl + 'admin/add/zone-setup',data)
       }

       ZoneSetupDelete(id:any):Observable<any>{
        return this._http.delete(environment.baseUrl + 'admin/delete/zone-setup/'+id)
       }
       ZoneSetupUpdate(id:any,data:any):Observable<any>{
        return this._http.put(environment.baseUrl + 'admin/update/zone-setup/'+id,data)
       }
}