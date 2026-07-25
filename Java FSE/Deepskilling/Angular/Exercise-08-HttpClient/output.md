# Output — Exercise 08: HTTP Client, Observables & Interceptors

## Task 1 — JSON Server Running

```bash
$ json-server --watch db.json --port 3000
```
```
JSON Server started on PORT :3000
Press CTRL-C to quit

[~] GET /courses → 200 (5ms)
[~] POST /courses → 201 (3ms)
[~] PUT /courses/1 → 200 (2ms)
[~] DELETE /courses/3 → 200 (2ms)
```

## Task 1 — GET Courses (Console tap log)

```
Courses loaded: 5
```

## Task 2 — RxJS Operators (console)

```
# tap log on every successful load:
Courses loaded: 5

# retry(2) when server is down:
  Attempt 1 → FAILED (net::ERR_CONNECTION_REFUSED)
  Attempt 2 → FAILED
  Attempt 3 → FAILED
  catchError → "Failed to load courses. Please try again."
  (Browser shows error message in UI)

# map filter (credits > 0):
  Input: 5 courses (all credits > 0)
  Output: 5 courses (no change in this case)
```

## Task 3 — DevTools Network — Authorization Header

```
Request Headers:
  Authorization: Bearer mock-token-12345
  Content-Type: application/json
```

## Task 3 — Loading Spinner Timeline

```
t=0ms:   loadingService.show() → isLoading$ emits true → spinner visible
t=42ms:  HTTP response received
         finalize() → loadingService.hide() → isLoading$ emits false → spinner hidden
```

## Task 3 — Error Interceptor Responses

```
HTTP 401 → console.warn("Unauthorized — redirecting to home") → router.navigate(['/'])
HTTP 500 → console.error("Server error — show global notification")
```

## ✅ Exercise 08 Complete!
- ✔ HttpClient replaces hardcoded service data
- ✔ GET, POST, PUT, DELETE operations working
- ✔ map, tap, catchError, retry, switchMap applied
- ✔ Auth interceptor adds header to all requests
- ✔ Error interceptor handles 401/500 globally
- ✔ Loading interceptor shows/hides spinner via finalize
