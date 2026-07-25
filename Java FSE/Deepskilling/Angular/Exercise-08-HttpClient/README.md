# Exercise 08 — HTTP Client: API Integration, Observables & Interceptors

## 🎯 Objectives
- Replace hardcoded data with live HTTP calls using `HttpClient`
- Apply RxJS operators: `map`, `catchError`, `tap`, `switchMap`, `retry`
- Build three HTTP interceptors: auth, error handler, loading spinner

## ⏱️ Estimated Time
**Advanced | 60 minutes**

## 📋 Setup
```bash
npm install -g json-server
# db.json already created in project root
json-server --watch db.json --port 3000
```

---

## 🔢 Tasks

### Task 1 — Replace Service Data with HttpClient (Steps 78–82)

```typescript
// app.config.ts (standalone)
provideHttpClient(withInterceptors([authInterceptor, errorHandlerInterceptor, loadingInterceptor]))

// CourseService
constructor(private http: HttpClient) {}

// Step 79: Observable-based getCourses
getCourses$(): Observable<Course[]> {
  return this.http.get<Course[]>('http://localhost:3000/courses');
}

// Step 80: Subscribe in component
this.courseService.getCourses$().subscribe({
  next: courses   => this.courses = courses,
  error: err      => this.errorMessage = err.message,
  complete: ()    => this.isLoading = false
});

// Step 81: POST
createCourse(course: Omit<Course,'id'>): Observable<Course> {
  return this.http.post<Course>('http://localhost:3000/courses', course);
}
```

---

### Task 2 — RxJS Operators (Steps 83–87)

```typescript
getCourses$(): Observable<Course[]> {
  return this.http.get<Course[]>(API_URL).pipe(
    map(courses => courses.filter(c => c.credits > 0)),      // Step 83: transform
    tap(courses => console.log('Courses:', courses.length)), // Step 85: side effect
    retry(2),                                                // Step 86: retry on failure
    catchError(err => {
      console.error(err);
      return throwError(() => new Error('Failed to load courses.'));
    })                                                       // Step 84: error handling
  );
}

// Step 87: switchMap — cancels previous inner Observable when new courseId arrives
courseId$.pipe(
  switchMap(id => this.enrollmentService.getStudentsByCourse(id))
  // If user clicks course 1 then quickly course 2,
  // the request for course 1 is cancelled — prevents out-of-order responses
)
```

---

### Task 3 — HTTP Interceptors (Steps 88–91)

```typescript
// Step 88: Auth interceptor — adds header to every request
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({ setHeaders: { Authorization: 'Bearer mock-token-12345' } });
  return next(authReq);
};

// Step 90: Error handler interceptor
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(catchError((err: HttpErrorResponse) => {
    if (err.status === 401) router.navigate(['/']);
    if (err.status === 500) console.error('Server error');
    return throwError(() => err);
  }));

// Step 91: Loading interceptor — finalize runs on complete OR error
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  loadingService.show();
  return next(req).pipe(finalize(() => loadingService.hide()));
};
```

---

## ✅ Expected Outcomes
- Course list loads from JSON Server (`db.json`)
- POST creates a new course that persists in `db.json`
- Auth header visible in DevTools → Network → Request Headers
- Spinner appears on every HTTP call and hides when complete
- 401 response → navigate to home; 500 → error notification

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `db.json` | JSON Server mock database |
| `src/app/interceptors/auth.interceptor.ts` | Adds Authorization header |
| `src/app/interceptors/error-handler.interceptor.ts` | 401/500 global handling |
| `src/app/interceptors/loading.interceptor.ts` | Global loading spinner |
| `src/app/services/loading.service.ts` | BehaviorSubject isLoading$ |
| `src/app/services/course.service.ts` | HTTP methods getCourses$, createCourse, etc. |
