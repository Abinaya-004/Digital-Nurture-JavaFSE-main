# Output — Exercise 09: NgRx State Management

## Task 1 — Redux DevTools Action Log

```
# On CourseListComponent init:
[Course] Load Courses          { type: '[Course] Load Courses' }
[Course] Load Courses Success  { type: '[Course] Load Courses Success', courses: [...5 courses] }

# State Tree after success:
{
  course: {
    courses: [
      { id: 1, name: 'Data Structures', ... },
      { id: 2, name: 'Database Systems', ... },
      ...
    ],
    loading: false,
    error: null
  },
  enrollment: {
    enrolledCourseIds: []
  }
}
```

## Task 1 — Full NgRx Flow Traced

```
Step 1: Component dispatches:
  store.dispatch(loadCourses())
  → Action: { type: '[Course] Load Courses' }

Step 2: Reducer sees action:
  loadCourses → state.loading = true

Step 3: Effect intercepts (ofType(loadCourses)):
  → Makes HTTP GET to http://localhost:3000/courses

Step 4: HTTP resolves:
  → dispatches loadCoursesSuccess({ courses })
  → Action: { type: '[Course] Load Courses Success', courses: [...] }

Step 5: Reducer handles success:
  → state.courses = courses, state.loading = false

Step 6: Selector emits new value:
  selectAllCourses → courses array emitted

Step 7: Component re-renders:
  *ngFor="let c of courses$ | async" → 5 course cards rendered
```

## Task 2 — Enrollment State

```
# Click Enroll on course id=1:
store.dispatch(enrollInCourse({ courseId: 1 }))
Redux DevTools: [Enrollment] Enroll { courseId: 1 }
enrollment.enrolledCourseIds: [1]

# Card renders: "Unenroll" button
# selectEnrolledIds → [1]
# (enrolledIds$ | async)?.includes(1) → true → 'Unenroll'

# Cross-slice: selectEnrolledCourses
# = courses.filter(c => [1].includes(c.id))
# = [{ id: 1, name: 'Data Structures', ... }]
```

## ✅ Exercise 09 Complete!
- ✔ NgRx store configured with course + enrollment slices
- ✔ Actions use [Feature] prefix convention
- ✔ Reducer is pure — no side effects
- ✔ Selectors are memoised
- ✔ Effect handles async HTTP → dispatches success/failure
- ✔ Complete flow traced in Redux DevTools
- ✔ Cross-slice selector derives enrolled courses
