import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';
import { PasswordGrand } from '../models/password-grand';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  private header = {

  };
  constructor(
    private http: HttpClient
  ) { }

  private authorization?:string = undefined;

  private grant(email:string, password:string): PasswordGrand {
    return {
      grant_type: "password",
      client_id: environment.local.clientId,
      client_secret: environment.local.clientSecret,
      username: email,
      password: password,
      scope: ""
    }
  }

  get headers() {
    return {
      "Accept": "application/json"
    }
  }

  login(email:string, password:string)
  {
    return this.http.post<Token>(
      `${environment.prefix}/oauth/token`,
      this.grant(email, password),
      { headers:this.headers }
    );
  }

  authorize(token:Token) {
    this.authorization = `Bearer ${token.access_token}`;
  }

  unauthorize() {
    this.authorization = undefined;
  }
}
