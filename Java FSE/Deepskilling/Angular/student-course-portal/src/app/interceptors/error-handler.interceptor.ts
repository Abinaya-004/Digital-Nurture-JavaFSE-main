// Exercise 08 — ErrorHandlerInterceptor
// Step 90: Intercept HTTP errors globally
// 401 → navigate to login; 500 → show notification; propagate with throwError

import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        console.warn('Unauthorized — redirecting to home');
        router.navigate(['/']);
      } else if (err.status === 500) {
        console.error('Server error — show global notification');
        // In production: inject NotificationService and call show()
      }
      // Propagate the error downstream after handling
      return throwError(() => err);
    })
  );
};
