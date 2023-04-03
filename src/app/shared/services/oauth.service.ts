import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';
import { PasswordGrand } from '../models/password-grand';
import { User } from '../models/user';

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
  private user?:User = undefined;

  public get currentUser() {
    return this.user;
  }

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

  public get headers() {
    var h: {[key:string]:string};
    h = {};
    h["Accept"] = "application/json";
    if (this.authorization !== undefined) {
      h["Authorization"] = `Bearer ${this.authorization}`;
    }
    return h;
  }

  login(email:string, password:string)
  {
    return this.http.post<Token>(
      `${environment.prefix}/oauth/token`,
      this.grant(email, password),
      { headers:this.headers }
    );
  }

  getUser()
  {
    return this.http.get<User>(
      `${environment.prefix}/api/user`,
      { headers:this.headers }
    );
  }

  authorize(token:Token) {
    this.authorization = token.access_token;
  }

  setUser(user:User) {
    this.user = user;
  }

  unauthorize() {
    this.authorization = undefined;
    this.user = undefined;
  }
}
