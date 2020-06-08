import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly baseUrl = environment.apiUrl + 'users/';

  constructor(private readonly http: HttpClient) { }

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  create(body: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, body);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }
}
