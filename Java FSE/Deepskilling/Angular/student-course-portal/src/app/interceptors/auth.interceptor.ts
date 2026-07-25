// Exercise 08 — AuthInterceptor
// Step 88: Clone every outgoing request and add Authorization header
// Interceptors run in registration order; response travels back in reverse order

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request — requests are immutable in Angular HTTP
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345'
    }
  });
  return next(authReq);
};
