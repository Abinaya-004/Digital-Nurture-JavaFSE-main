import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// src/main.ts — Application entry point
// bootstrapApplication() is the standalone API (Angular 17+) — no AppModule needed
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
