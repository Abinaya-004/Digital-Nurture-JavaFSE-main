# Exercise 09 — State Management: NgRx Store, Actions, Reducers, Effects & Selectors

## 🎯 Objectives
- Configure NgRx Store for the Student Course Portal
- Define actions, reducers, and selectors for course state
- Write NgRx Effects for async HTTP operations
- Add enrollment state with cross-slice selectors

## ⏱️ Estimated Time
**Advanced | 60 minutes**

## 📋 Setup
```bash
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools
# Install Redux DevTools Chrome extension
```

---

## 🔢 Tasks

### Task 1 — NgRx Store Setup (Steps 92–96)

```typescript
// app.config.ts
provideStore({ course: courseReducer, enrollment: enrollmentReducer }),
provideEffects([CourseEffects]),
provideStoreDevtools({ maxAge: 25 })
```

```typescript
// store/course/course.actions.ts — Step 93
// [Course] prefix groups actions in Redux DevTools
export const loadCourses        = createAction('[Course] Load Courses');
export const loadCoursesSuccess = createAction('[Course] Load Courses Success', props<{ courses: Course[] }>());
export const loadCoursesFailure = createAction('[Course] Load Courses Failure', props<{ error: string }>());
```

```typescript
// store/course/course.reducer.ts — Step 94
// Reducers must be PURE FUNCTIONS — no side effects, no HTTP calls
export const courseReducer = createReducer(
  initialCourseState,
  on(loadCourses,        state => ({ ...state, loading: true })),
  on(loadCoursesSuccess, (state, { courses }) => ({ ...state, courses, loading: false })),
  on(loadCoursesFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
```

```typescript
// store/course/course.selectors.ts — Step 95
// Selectors are memoised — recompute ONLY when input selectors change
export const selectAllCourses    = createSelector(selectCourseState, s => s.courses);
export const selectCoursesLoading = createSelector(selectCourseState, s => s.loading);
```

```typescript
// CourseListComponent — Step 96
ngOnInit(): void {
  this.courses$ = this.store.select(selectAllCourses);
  this.store.dispatch(loadCourses());
}
```

---

### Task 2 — NgRx Effects & Enrollment State (Steps 97–100)

```typescript
// store/course/course.effects.ts
// Effects are the ONLY place side effects (HTTP, localStorage) should happen
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
```

```typescript
// Cross-slice selector — Step 99 — powerful NgRx pattern
export const selectEnrolledCourses = createSelector(
  selectAllCourses,     // from course state
  selectEnrolledIds,    // from enrollment state
  (courses, ids) => courses.filter(c => ids.includes(c.id))
);
```

---

## ✅ Expected Outcomes
- Redux DevTools shows `[Course] Load Courses` dispatched on page load
- State tree shows `courses`, `loading`, `error`
- `loadCourses → Effect → HTTP → loadCoursesSuccess → reducer → selector → component` flow traced
- Enrollment state updates per card click

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `src/app/store/course/course.actions.ts` | Course action creators |
| `src/app/store/course/course.reducer.ts` | Pure reducer with state interface |
| `src/app/store/course/course.selectors.ts` | Memoised selectors |
| `src/app/store/course/course.effects.ts` | Async HTTP effects |
| `src/app/store/enrollment/enrollment.actions.ts` | Enrollment actions |
| `src/app/store/enrollment/enrollment.reducer.ts` | Enrollment reducer |
| `src/app/store/enrollment/enrollment.selectors.ts` | Cross-slice selector |
