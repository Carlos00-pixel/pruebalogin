import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class LoginService {
    constructor(private _http: HttpClient) {}

    login(user: any): Observable<any> {
        var request = "Auth/Login";
        var url = environment.urlApiEmpleados + request;

        return this._http.post(url, user);
    }

    getEmpleados(): Observable<any> {

        var token = localStorage.getItem("token");

        var header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        })

        var request = "/api/Empleados"
        var url = environment.urlApiEmpleados + request;

        return this._http.get(url, {headers: header});
    }
}