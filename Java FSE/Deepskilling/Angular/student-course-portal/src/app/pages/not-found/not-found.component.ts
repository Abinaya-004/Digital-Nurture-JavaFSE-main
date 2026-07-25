// Exercise 07 — NotFoundComponent (wildcard route)

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a routerLink="/" class="btn btn-primary">Go Home</a>
    </div>
  `,
  styles: [`.not-found { text-align: center; padding: 4rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
            .not-found h1 { font-size: 5rem; color: #4f46e5; }`]
})
export class NotFoundComponent {}
