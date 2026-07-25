# Output — Exercise 07: Angular Routing

## Task 1 — Route Navigation

```
Navigate to /courses/2 → CourseDetailComponent loads
  console: snapshot.paramMap.get('id') = "2"
  courseService.getCourseById(2) = { name: 'Database Systems', ... }
  Browser renders: "Database Systems" detail page

Navigate to /unknown-path → NotFoundComponent
  Browser renders: "404 - Page not found" + link back to Home

Navigate to /courses?search=angular →
  URL: http://localhost:4200/courses?search=angular
  queryParamMap.get('search') = "angular"
```

## Task 2 — Lazy Loading (Network Tab)

```
# Initial page load — /home:
  Downloaded: main.js, styles.css
  (enrollment chunk NOT downloaded yet)

# First navigation to /enroll:
  Downloaded: chunk-XXXXXX.js  ← lazy chunk loaded on demand!

# Second navigation to /enroll:
  (no new chunk download — already cached)
```

## Task 2 — AuthGuard

```
AuthService.isLoggedIn = true:
  Navigate to /profile → ALLOWED → StudentProfileComponent renders

AuthService.isLoggedIn = false:
  Navigate to /profile → BLOCKED → redirected to /
  console: "Unauthorized — redirecting to home"
```

## Task 2 — UnsavedChanges Guard

```
User fills reactive enrollment form (form.dirty = true)
User clicks browser Back / navigates away:
  Confirmation dialog: "You have unsaved changes. Leave anyway?"
  Click OK     → navigate away (returns true)
  Click Cancel → stay on page (returns false)

Form not touched (pristine):
  Navigate away → no dialog shown
```

## ✅ Exercise 07 Complete!
- ✔ All portal routes configured (home, courses, courses/:id, profile, 404)
- ✔ Dynamic route param (:id) reads and resolves course
- ✔ Query params update URL and are read back
- ✔ Lazy loading verified in Network tab
- ✔ AuthGuard redirects unauthenticated users
- ✔ CanDeactivate warns about unsaved changes
