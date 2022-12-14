import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Claim } from '../models/claim.model';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllclaimsService {

  constructor(private authService: AuthService,private http:HttpClient) { }
 
  getAllClaims(token: string): Observable<Claim[]> {
    let header = {
      'Authorization' : 'Basic ' + token
    }
     return this.http.get<Claim[]>( environment.serverUrl +'/claim/all', {headers: header});
  }
}
