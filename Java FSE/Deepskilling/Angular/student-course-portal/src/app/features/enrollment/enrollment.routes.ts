// Exercise 07 — Enrollment Feature Routes (Lazy Loaded)
// Step 73: Lazy loading splits app into chunks downloaded on demand
// The chunk is only downloaded when the user visits /enroll for the first time

import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';

export const enrollmentRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../pages/enrollment-form/enrollment-form.component').then(m => m.EnrollmentFormComponent)
  },
  {
    path: 'reactive',
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () =>
      import('../../pages/reactive-enrollment-form/reactive-enrollment-form.component')
        .then(m => m.ReactiveEnrollmentFormComponent)
  }
];
