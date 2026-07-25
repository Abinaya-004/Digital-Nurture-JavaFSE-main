// Exercise 07 — AuthGuard (CanActivate)
// Step 75: If isLoggedIn = false, redirect to '/' and return false

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn) {
    return true;
  }
  // Redirect to home and block navigation
  router.navigate(['/']);
  return false;
};
