// Exercise 09 — Enrollment Selectors (NgRx)
// Step 99: Cross-slice selector combining course and enrollment state
// Cross-slice selectors are a powerful NgRx pattern — derive joined data without duplicating state

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(selectEnrollmentState, s => s.enrolledCourseIds);

// Cross-slice selector: combines courses from course state with enrolled IDs from enrollment state
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses, ids) => courses.filter(c => ids.includes(c.id))
);
