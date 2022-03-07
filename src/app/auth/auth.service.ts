import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface AdminLoginInteface {
    email: string;
    password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private _http: HttpClient) { }

    adminLogin(data: AdminLoginInteface){
          return this._http.post(environment.baseUrl + '/private/admin/login',data)

    }
    
}