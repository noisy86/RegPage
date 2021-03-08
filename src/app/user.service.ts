import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  create(username: string, password: string): Observable<any> {

    return this.http.post<User>('https://webhook.site/fcb3788b-0ff8-4a9c-84d7-07cc62570796', {
      username,
      password,
    });


  }
}
