// Exercise 08 — LoadingInterceptor
// Step 91: Show spinner before request, hide in finalize (runs on complete OR error)
// finalize is equivalent to try/catch/finally — always runs regardless of outcome

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    // finalize runs whether the Observable completes or errors
    finalize(() => loadingService.hide())
  );
};
