import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userId = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const expires = localStorage.getItem('expires');

    if (userId && token && expires && Number(expires) > Date.now()) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(`${userId}:${token}`)}`,
        },
      });
      return next.handle(modifiedRequest);
    } else {
      return next.handle(request.clone());
    }
  }
}
