import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,private auth:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    let auth = this.injector.get(LoginService)
    let tokenizedReq = request.clone({
      setHeaders : {
        Authorization: `Bearer ${auth.getBrutToken()}`,
        Accept: 'application/json'
      }
    })
    if (!this.auth.getBrutToken()) {
      tokenizedReq = request;
    }
    return next.handle(tokenizedReq);
  }
}
