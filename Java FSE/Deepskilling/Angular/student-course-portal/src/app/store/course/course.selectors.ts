// Exercise 09 — Course Selectors (NgRx)
// Step 95: createFeatureSelector + createSelector for memoised derived state
// Selectors are memoised — they only recompute when their input selectors change
// This is NgRx's key performance optimisation

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

// Feature selector points to the 'course' slice of the state tree
export const selectCourseState = createFeatureSelector<CourseState>('course');

export const selectAllCourses    = createSelector(selectCourseState, s => s.courses);
export const selectCoursesLoading = createSelector(selectCourseState, s => s.loading);
export const selectCoursesError   = createSelector(selectCourseState, s => s.error);
