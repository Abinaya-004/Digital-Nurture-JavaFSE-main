# Exercise 02 — Data Binding, Lifecycle Hooks & Component Communication

## 🎯 Objectives
- Practise all four Angular binding types
- Implement lifecycle hooks: `ngOnInit`, `ngOnChanges`, `ngOnDestroy`
- Establish parent-child communication with `@Input` and `@Output`

## ⏱️ Estimated Time
**Beginner | 40 minutes**

## 📋 Topics Covered
- Interpolation `{{ }}`, Property Binding `[prop]`, Event Binding `(event)`, Two-Way `[(ngModel)]`
- `ngOnInit`, `ngOnChanges`, `ngOnDestroy`
- `@Input()` and `@Output()` / `EventEmitter<T>`

---

## 🔢 Tasks

### Task 1 — All Four Binding Types (Steps 11–15)

```typescript
// HomeComponent
portalName = 'Student Course Portal';   // Step 11: interpolation
isPortalActive = true;                   // Step 12: property binding [disabled]
message = '';                            // Step 13: event binding result
searchTerm = '';                         // Step 14: two-way [(ngModel)]
```

```html
<!-- Step 11: Interpolation -->
<h1>{{ portalName }}</h1>

<!-- Step 12: Property binding — one-way component → DOM -->
<button [disabled]="!isPortalActive" (click)="onEnrollClick()">Enroll Now</button>

<!-- Step 14: Two-way binding — DOM ↔ component -->
<input [(ngModel)]="searchTerm">
<p>Searching for: {{ searchTerm }}</p>
```

> **Step 15 Explanation:**  
> `[property]` = one-way (component → DOM). Angular pushes data to the DOM only.  
> `[(ngModel)]` = two-way (DOM ↔ component). Changes in either direction are synced automatically.

---

### Task 2 — Lifecycle Hooks (Steps 16–19)

```typescript
// Step 16: ngOnInit — use for data fetching, NOT constructor
ngOnInit(): void {
  console.log('HomeComponent initialised — courses loaded');
}

// Step 17: ngOnDestroy — clean up subscriptions, timers
ngOnDestroy(): void {
  console.log('HomeComponent destroyed');
}

// Step 18: ngOnChanges in CourseCardComponent
ngOnChanges(changes: SimpleChanges): void {
  console.log('course changed:', changes['course'].previousValue, '→', changes['course'].currentValue);
}
```

---

### Task 3 — @Input and @Output (Steps 20–24)

```typescript
// CourseCardComponent
@Input() course: { id: number, name: string, code: string, credits: number };
@Output() enrollRequested = new EventEmitter<number>();
```

```html
<!-- CourseListComponent template -->
<app-course-card
  *ngFor="let c of courses"
  [course]="c"
  (enrollRequested)="onEnroll($event)">
</app-course-card>

<p *ngIf="selectedCourseId">Selected course ID: {{ selectedCourseId }}</p>
```

---

## ✅ Expected Outcomes
- Typing in search box updates `Searching for:` in real time
- Clicking Enroll Now shows the message
- Console shows `ngOnInit` log on load, `ngOnDestroy` on navigate away
- `ngOnChanges` logs for each card
- Clicking Enroll emits `courseId` and displays it below the list

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `src/app/pages/home/home.component.ts` | All four binding types + lifecycle hooks |
| `src/app/components/course-card/course-card.component.ts` | @Input, @Output, ngOnChanges |
| `src/app/pages/course-list/course-list.component.ts` | Parent with courses array |
