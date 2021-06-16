import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// The HttpHeadersInterceptor allows us to catch the request before is made and add some headers to it
@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // The http request is cloned and some headers are added to it
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'f374fc76a5msh1f2d121cbfc5833p133e8cjsn98e1ebf4ad2f',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '1ec09fd55b214dd6addf6fde0432ced5',
      },
    });
    return next.handle(req);
  }
}
