import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public users: Users[] = [];
  constructor(private http: HttpClient) { }
  list(): Observable<Users[]>{
    return this.http.get<Users[]>('https://samschoolapi.*****.com/')
  }
  upload(data: FormData): Observable<any>{
    return this.http.post<any>('http://localhost:3000/upload_files',data);
  }
}
