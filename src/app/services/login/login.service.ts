import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public baseUrl = 'http://127.0.0.1:8000/api';
	public localStorage = window.localStorage;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: String, pass: String){
    const credentials = {
      username:username,
      password: pass
    }
    return this.http.post(`${this.baseUrl}/login`, credentials)
  }

  httpOptions = {
		headers: new HttpHeaders({
			Authorization: 'Bearer ' + this.getBrutToken()
		}),
	};
  public getToken(login: string, pass: string): void {
		this.login(login, pass).subscribe(
      (token:any) => {
        this.localStorage.setItem('token', token.token)

      },
      err=> {
        console.log("error", err);

      }
    );
	}
  getBrutToken() {
    return this.localStorage.getItem('token');
	}
  decodeToken() {
		return this.localStorage.getItem('token') ? jwt_decode(this.localStorage.getItem('token') || '{}') : null;
	}
  get isLoggedIn(): boolean {
		let authToken = localStorage.getItem('token');
		//this.islog.next(false);
		return (authToken !== null) ? true : false;
	}

  redirectByRole(role: string) {

		//console.log(role);

		switch (role) {
			case 'ROLE_SUPERUSER': {
				//localStorage.clear() ;
				this.router.navigate(['super_admins']);
				break;
			}
			case 'ROLE_FORMATEUR': {
				this.router.navigate(['formateur']);
				break;
			}
			case 'ROLE_APPRENANT': {
				this.router.navigate(['apprenant']);
				break;
			}
			default: {
				this.router.navigate(['']);
				break;
			}
		}
	}
}
