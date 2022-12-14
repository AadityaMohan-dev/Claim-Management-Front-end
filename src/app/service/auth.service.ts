import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  msg$ = new BehaviorSubject('');
  user$ = new BehaviorSubject<User>({});

  constructor(private http: HttpClient) { }

  signup(member: Member):Observable<any> {
    return  this.http.post( environment.serverUrl + '/member/add',member);
  }

  login(token: string): Observable<User> {
    let header = {
      'Authorization' : 'Basic ' + token
    }
     return this.http.get<User>( environment.serverUrl +'/user/login', {headers: header});
  }

}
