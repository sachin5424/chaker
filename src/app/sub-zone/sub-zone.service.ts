import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SubZoneService {
    addDataShared = new Subject();
    updateDataShared = new Subject();
    NewUpdateDataShared = new Subject();
    constructor(private _http: HttpClient) { }
    SubZoneList(): Observable<any> {
        return this._http.get(environment.baseUrl + 'admin/list/sub-zone')
    }
    SubZoneAdd(data: any): Observable<any> {
        return this._http.post(environment.baseUrl + 'admin/add/sub-zone', data)
    }
    SubZoneDelete(id: any): Observable<any> {
        return this._http.delete(environment.baseUrl + 'admin/delete/sub-zone/' + id)
    }
    SubZoneUpdate(id: any,data:any): Observable<any> {
        return this._http.put(environment.baseUrl + 'admin/update/sub-zone/' + id,data)
    }
}