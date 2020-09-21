import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
    headers: HttpHeaders;
    urlAPI = 'https://seekproduct-api.misavu.net';

    constructor(
        private _http: HttpClient,
        private _auth: AuthService
    ) { 
        this.headers = this.setHeaders();
    }

    setHeaders(): HttpHeaders {
        const header = new HttpHeaders();
        if (!this._auth.token) { return header.set('Content-Type', 'application/json'); }
        return header.set('Content-Type', 'application/json').set('Authorization', `JWT ${this._auth.token}`);
    }

    getProfile(): Observable<any> {
        let url = `${this.urlAPI}/api/auth/profile`;
        return this._http.get(url, { headers: this.headers })
        .pipe(
        map(data => {
            return data;
        }),
        catchError(error => {
            return throwError(error);
            })
        );
    }

 
}
