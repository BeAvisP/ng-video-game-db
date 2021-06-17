import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

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
        'x-rapidapi-key': `${env.RAPID_API_KEY}`,
        'x-rapidapi-host': `${env.RAPID_API_HOST}`,
      },
      setParams: {
        key: `${env.RAWG_KEY}`,
      },
    });
    return next.handle(req);
  }
}
