// Exercise 09 — Course Actions (NgRx)
// Step 93: Define action creators with createAction and props
// [Course] prefix groups actions by feature — readable in Redux DevTools

import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);

export const addCourse = createAction(
  '[Course] Add Course',
  props<{ course: Course }>()
);
