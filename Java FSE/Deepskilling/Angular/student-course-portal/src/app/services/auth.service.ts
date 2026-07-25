// Exercise 06 — AuthService
// Exercise 07 — Used by AuthGuard to check login state

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Hardcoded for Exercise 07 — in production this would check a JWT token
  isLoggedIn = true;

  login(): void  { this.isLoggedIn = true; }
  logout(): void { this.isLoggedIn = false; }
}
