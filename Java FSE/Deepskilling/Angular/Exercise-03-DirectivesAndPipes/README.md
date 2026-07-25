# Exercise 03 — Directives & Pipes: Built-in and Custom

## 🎯 Objectives
- Use all structural directives: `*ngIf`, `*ngFor`, `*ngSwitch`
- Apply attribute directives: `ngClass`, `ngStyle`
- Build a custom attribute directive (`appHighlight`)
- Build a custom pipe (`creditLabel`)

## ⏱️ Estimated Time
**Beginner | 45 minutes**

---

## 🔢 Tasks

### Task 1 — Structural Directives (Steps 25–28)

```html
<!-- Step 25: *ngIf loading state -->
<div *ngIf="isLoading; else courseGrid">Loading courses...</div>

<!-- Step 26: *ngFor with trackBy -->
<app-course-card
  *ngFor="let course of courses; let i = index; trackBy: trackByCourseId"
  [course]="course">
</app-course-card>

<!-- Step 27: *ngSwitch for grade badge -->
<span [ngSwitch]="course.gradeStatus">
  <span *ngSwitchCase="'passed'">✓ Passed</span>
  <span *ngSwitchCase="'failed'">✗ Failed</span>
  <span *ngSwitchDefault>⏳ Pending</span>
</span>

<!-- Step 28: else template -->
<ng-template #noCourses><p>No courses available.</p></ng-template>
```

```typescript
// trackBy function — key performance optimisation
trackByCourseId(index: number, course: Course): number {
  return course.id;
  // Without trackBy: Angular re-renders ALL items on any array change
  // With trackBy: only items whose ID changes are re-rendered
}
```

---

### Task 2 — Attribute Directives (Steps 29–32)

```html
<!-- Step 29: [ngClass] object binding -->
<div [ngClass]="cardClasses">...</div>

<!-- Step 30: [ngStyle] for dynamic border colour -->
<div [ngStyle]="{ 'border-left': '4px solid ' + gradeStatusColor }">...</div>
```

```typescript
// Step 32: Getter keeps template clean — logic stays in TypeScript
get cardClasses(): Record<string, boolean> {
  return {
    'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
    'card--full':     this.course.credits >= 4,
    'expanded':       this.isExpanded
  };
}
```

---

### Task 3 — Custom Directive and Custom Pipe (Steps 33–37)

```bash
ng generate directive directives/highlight
ng generate pipe pipes/credit-label
```

```typescript
// HighlightDirective — Step 33 & 37
@Directive({ selector: '[appHighlight]', standalone: true })
export class HighlightDirective {
  @Input() appHighlight = 'yellow';  // Step 37: configurable colour

  @HostListener('mouseenter')
  onEnter() { this.el.nativeElement.style.backgroundColor = this.appHighlight; }

  @HostListener('mouseleave')
  onLeave() { this.el.nativeElement.style.backgroundColor = ''; }
}
```

```typescript
// CreditLabelPipe — Step 35
transform(credits: number | null): string {
  if (!credits) return 'No Credits';
  return credits === 1 ? '1 Credit' : `${credits} Credits`;
}
```

```html
<!-- Usage: Step 36 -->
{{ course.credits | creditLabel }}
<!-- Output: "4 Credits" -->
```

---

## ✅ Expected Outcomes
- Loading message shows for 1.5s then disappears
- `trackBy` implemented for course list
- Grade badge switches correctly per status
- `appHighlight` shows yellow on hover (customisable)
- `{{ 3 | creditLabel }}` → `"3 Credits"`

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `src/app/directives/highlight.directive.ts` | Custom attribute directive |
| `src/app/pipes/credit-label.pipe.ts` | Custom pipe |
| `src/app/pages/course-list/` | Structural directives demo |
| `src/app/components/course-card/` | Attribute directives + pipe usage |
