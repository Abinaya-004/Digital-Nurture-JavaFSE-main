# Exercise 06 — Services & Dependency Injection

## 🎯 Objectives
- Create Angular services with `providedIn: 'root'` (singleton)
- Inject services into components and other services
- Understand the DI hierarchy and component-level providers

## ⏱️ Estimated Time
**Intermediate | 40 minutes**

---

## 🔢 Tasks

### Task 1 — CourseService (Steps 58–62)

```bash
ng generate service services/course
```

```typescript
@Injectable({ providedIn: 'root' })  // Singleton — one instance shared app-wide
export class CourseService {
  private courses: Course[] = [...];

  getCourses(): Course[]                        { return this.courses; }
  getCourseById(id: number): Course | undefined { return this.courses.find(c => c.id === id); }
  addCourse(course: Course): void               { this.courses.push(course); }
}
```

```typescript
// Step 59: Course interface in models/course.model.ts
export interface Course {
  id: number; name: string; code: string;
  credits: number; gradeStatus: 'passed' | 'failed' | 'pending';
}
```

```typescript
// Step 60: Inject into CourseListComponent
constructor(private courseService: CourseService) {}

ngOnInit(): void {
  this.courses = this.courseService.getCourses();  // replaces hardcoded array
}
```

---

### Task 2 — EnrollmentService & Hierarchical DI (Steps 63–67)

```bash
ng generate service services/enrollment
```

```typescript
// Step 64: Service-to-service injection
@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  constructor(private courseService: CourseService) {}  // DI hierarchy

  enroll(courseId: number): void   { ... }
  unenroll(courseId: number): void { ... }
  isEnrolled(courseId: number): boolean { ... }
  getEnrolledCourses(): Course[]   { return this.enrolledIds.map(id => this.courseService.getCourseById(id)!); }
}
```

```typescript
// Step 67: Component-level provider (non-singleton)
@Component({
  providers: [NotificationService]  // NEW instance for this component + its children
})
export class NotificationComponent { ... }
// Comment: Component-level providing creates a separate instance scoped to that component.
// Useful for isolated state per instance (e.g. form wizards with multiple steps).
```

---

## ✅ Expected Outcomes
- Course list and home stats both read from the same `CourseService` instance
- Adding a course in one component is reflected in another (singleton confirmed)
- Enroll toggles to Unenroll after clicking
- Enrolled courses appear in the profile page

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `src/app/services/course.service.ts` | CourseService with getCourses, getCourseById, addCourse |
| `src/app/services/enrollment.service.ts` | EnrollmentService (service-to-service DI) |
| `src/app/models/course.model.ts` | Course & Student TypeScript interfaces |
