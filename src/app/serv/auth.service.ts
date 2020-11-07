import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/api/auth/';

const options = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(`${AUTH_API}signin`, {
      username: credentials.username,
      password: credentials.password
    }, options);
  }

  register(user): Observable<any> {
    return this.http.post(`${AUTH_API}signup`, {
      username: user.username,
      email: user.email,
      password: user.password
    }, options);
  }
}