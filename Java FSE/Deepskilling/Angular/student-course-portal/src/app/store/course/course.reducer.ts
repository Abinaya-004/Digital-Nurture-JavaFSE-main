// Exercise 09 — Course Reducer (NgRx)
// Step 94: Define state interface and createReducer with on() handlers
// Reducers must remain pure functions — no side effects, no HTTP calls

import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure, addCourse } from './course.actions';

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export const initialCourseState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

export const courseReducer = createReducer(
  initialCourseState,

  on(loadCourses, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false
  })),

  on(loadCoursesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(addCourse, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course]
  }))
);
