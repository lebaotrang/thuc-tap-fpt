import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Observer } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(
    private _http: HttpClient,
    // private _handler: HandleError
    ) {
    if (this.token) { this.isLoggedIn = true; }
  }
  get token() {
    return localStorage.getItem('BASIC_TOKEN') || null;
  }

  set token(token) {
    localStorage.setItem('BASIC_TOKEN', token);
  }

  login(data): Observable<any> {
    const url = `https://seekproduct-api.misavu.net/user/login/`;
    return this._http.post(url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(
        map(res => {
          return res;
        }),
        tap(dt => {
          this.isLoggedIn = true;
          this.token = dt['token'];
        }),
        catchError(error => throwError(error))
      );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('BASIC_TOKEN');
    window.location.reload();
    // this._router.navigate(['/login'])
  }

}
