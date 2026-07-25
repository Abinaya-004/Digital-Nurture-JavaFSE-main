// Exercise 09 — Course Effects (NgRx)
// Step 97: Effects are the ONLY place where side effects (HTTP, localStorage) should happen
// Reducers must remain pure — Effects handle all async operations

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CourseService } from '../../services/course.service';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure } from './course.actions';

@Injectable()
export class CourseEffects {

  // Step 97: Full NgRx Effect flow:
  // dispatch loadCourses → Effect fires HTTP → loadCoursesSuccess/Failure dispatched
  // → reducer updates state → selector emits new value → component re-renders
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      switchMap(() =>
        this.courseService.getCourses$().pipe(
          map(courses => loadCoursesSuccess({ courses })),
          catchError(error => of(loadCoursesFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}
}
