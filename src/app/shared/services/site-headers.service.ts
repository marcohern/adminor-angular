import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OauthService } from './oauth.service';
import { SiteHeaders } from '../models/site-headers';

@Injectable({
  providedIn: 'root'
})
export class SiteHeadersService {

  constructor(
    private http: HttpClient,
    private oauth: OauthService
  ) {
    
  }

  public read()
  {
    return this.http.get<SiteHeaders>(
      `${environment.prefix}/api/headers`,
      { headers:this.oauth.headers }
    );
  }

  public write(headers:SiteHeaders)
  {
    return this.http.post(
      `${environment.prefix}/api/headers`,
      headers,
      { headers:this.oauth.headers }
    );
  }
}
