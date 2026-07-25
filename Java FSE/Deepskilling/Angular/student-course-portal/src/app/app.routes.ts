import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [
  // Exercise 07 — Route Configuration
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/course-list/course-list.component').then(m => m.CourseListComponent)
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./pages/course-detail/course-detail.component').then(m => m.CourseDetailComponent)
  },
  {
    path: 'profile',
    // Exercise 07 — CanActivate Route Guard
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/student-profile/student-profile.component').then(m => m.StudentProfileComponent)
  },
  {
    // Exercise 07 — Lazy Loaded Feature Module for Enrollment
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/enrollment/enrollment.routes').then(m => m.enrollmentRoutes)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
