# Output — Exercise 10: Unit Testing

## Task 1 — ng test Output (CourseCardComponent)

```bash
$ ng test
```
```
Chrome 125.0.0.0 (Windows): Executed 5 of 5 SUCCESS (0.842 secs / 0.731 secs)
TOTAL: 5 SUCCESS

CourseCardComponent
  ✓ should create (42ms)
  ✓ should display course name from @Input (18ms)
  ✓ should emit enrollRequested with course id on enroll button click (22ms)
  ✓ should log on ngOnChanges (8ms)
  ✓ should display credits as "4 Credits" (15ms)
```

## Task 2 — ng test Output (CourseService)

```
CourseService
  ✓ should be created (12ms)
  ✓ should GET courses from the correct URL (35ms)
  ✓ should handle HTTP 500 errors gracefully (28ms)
```

## Task 2 — Coverage Report (ng test --code-coverage)

```bash
$ ng test --code-coverage
```
```
LCOV Results for coverage/student-course-portal/

File                                Stmts   Miss  Cover
------------------------------------------------------
course-card.component.ts              24      2    92%
course.service.ts                     18      1    94%
credit-label.pipe.ts                   6      0   100%
highlight.directive.ts                 8      0   100%
```

## Task 2 — HttpTestingController.verify()

```typescript
afterEach(() => {
  httpMock.verify();
  // If any HTTP request was made but not expected (or vice versa):
  // → Test FAILS with: "Expected one matching request for criteria..."
  // This is critical for catching tests that make unintended HTTP calls
});
```

## Task 2 — MockStore State Simulation

```typescript
// Initial state (loading=false):
fixture.detectChanges();
// → 2 course cards visible in DOM

store.setState({ course: { courses: [], loading: true, error: null } });
fixture.detectChanges();
// → Loading spinner visible
// → fixture.debugElement.query(By.css('.spinner')) → exists

store.setState({ course: { courses: [], loading: false, error: 'Failed' } });
fixture.detectChanges();
// → Error message visible in DOM
```

## ✅ Exercise 10 Complete!
- ✔ 5 passing tests for CourseCardComponent
- ✔ @Input rendering verified via debugElement.query
- ✔ @Output tested via spyOn + click simulation
- ✔ ngOnChanges tested via direct method call
- ✔ CourseService HTTP tests use HttpTestingController
- ✔ httpMock.verify() asserts no unexpected requests
- ✔ MockStore simulates loading/error/success states
