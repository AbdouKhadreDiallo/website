import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  public baseUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient, private loginService: LoginService) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' +this.loginService.getBrutToken(),
    })
  };

  get(params:any){
    return this.http.get(`${this.baseUrl}${params}`, this.httpOptions);
  }
  getOne(suffix:any, id:number){
    return this.http.get(`${this.baseUrl}${suffix}/${id}`, this.httpOptions);
  }
  post(suffix:any, data:any): Observable<any>{
    return this.http.post(`${this.baseUrl}${suffix}`, data, this.httpOptions)
  }
}
