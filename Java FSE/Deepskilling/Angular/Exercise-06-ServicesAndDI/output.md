# Output — Exercise 06: Services & Dependency Injection

## Task 1 — Singleton Verification

```
CourseService instance: SINGLETON (providedIn: 'root')

CourseListComponent → courseService.getCourses() → 5 courses
HomeComponent       → courseService.getCourses().length → 5

# After addCourse() called in one component:
CourseListComponent → 6 courses
HomeComponent       → courseService.getCourses().length → 6  ← same instance confirmed
```

## Task 2 — Enroll / Unenroll Toggle

```
Initial state: Enroll button shown for all 5 courses

Click Enroll on "Data Structures" (id=1):
  enrollmentService.enroll(1)
  button → "Unenroll"
  Profile page: "Data Structures — CS101" appears in enrolled list

Click Unenroll on "Data Structures":
  enrollmentService.unenroll(1)
  button → "Enroll"
  Profile page: list cleared
```

## Task 2 — Service-to-Service DI Tree

```
Angular DI Hierarchy:
  Root Injector
    ├── CourseService (singleton)
    └── EnrollmentService (singleton)
            └── injects → CourseService (same instance from root)

Component-level provider:
  NotificationComponent
    └── NotificationService (NEW instance, not from root)
        ← isolated state, not shared with rest of app
```

## ✅ Exercise 06 Complete!
- ✔ CourseService singleton confirmed via shared state
- ✔ Course interface typed (no 'any')
- ✔ EnrollmentService injects CourseService (service-to-service DI)
- ✔ Enroll/Unenroll toggle works in CourseCardComponent
- ✔ Enrolled courses listed in StudentProfile
- ✔ Component-level provider creates non-singleton NotificationService
