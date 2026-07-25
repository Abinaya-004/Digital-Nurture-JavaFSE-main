# Exercise 07 — Angular Routing: Guards, Lazy Loading & Route Data

## 🎯 Objectives
- Configure all portal routes with dynamic parameters
- Implement lazy loading for the enrollment feature module
- Protect routes with `CanActivate` and `CanDeactivate` guards

## ⏱️ Estimated Time
**Intermediate | 50 minutes**

---

## 🔢 Tasks

### Task 1 — Route Configuration & Parameters (Steps 68–72)

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '',          loadComponent: () => import('./pages/home/...')          },
  { path: 'courses',   loadComponent: () => import('./pages/course-list/...')   },
  { path: 'courses/:id', loadComponent: () => import('./pages/course-detail/') },
  { path: 'profile',   canActivate: [authGuard], loadComponent: () => ...       },
  { path: '**',        loadComponent: () => import('./pages/not-found/...')     }
];
// The ** wildcard route MUST be last — Angular matches routes in order
```

```typescript
// Step 69: Read :id parameter in CourseDetailComponent
ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.course = this.courseService.getCourseById(id);
  // Use route.paramMap Observable (not snapshot) if param can change while component is active
}
```

```typescript
// Step 71: Query parameters
this.router.navigate(['courses'], { queryParams: { search: this.searchTerm } });
// Reads back: this.route.snapshot.queryParamMap.get('search')
```

---

### Task 2 — Lazy Loading & Guards (Steps 73–77)

```typescript
// Step 73: Lazy-loaded feature module
{ path: 'enroll', loadChildren: () =>
    import('./features/enrollment/enrollment.routes').then(m => m.enrollmentRoutes) }
// Verified: Network tab shows separate chunk file on first /enroll visit
```

```typescript
// Step 75: AuthGuard (CanActivate)
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  if (auth.isLoggedIn) return true;
  inject(Router).navigate(['/']);
  return false;
};
```

```typescript
// Step 77: UnsavedChanges guard (CanDeactivate)
export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {
  if (component.hasUnsavedChanges()) {
    return window.confirm('You have unsaved changes. Leave anyway?');
  }
  return true;
};
```

---

## ✅ Expected Outcomes
- `/courses/2` shows the correct course detail
- `404` page appears for unknown routes
- Network tab shows separate chunk on first `/enroll` navigation
- `/profile` without login redirects to home
- Dirty form shows confirmation dialog on navigate away

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `src/app/app.routes.ts` | All portal routes with lazy loading |
| `src/app/guards/auth.guard.ts` | CanActivate guard |
| `src/app/guards/unsaved-changes.guard.ts` | CanDeactivate guard |
| `src/app/features/enrollment/enrollment.routes.ts` | Lazy-loaded enrollment routes |
| `src/app/pages/course-detail/` | Route param (:id) demo |
| `src/app/pages/not-found/` | 404 wildcard page |
