# Exercise 05 — Reactive Forms: FormBuilder, FormGroup, FormArray & Custom Validators

## 🎯 Objectives
- Define reactive forms using `FormBuilder` and `FormGroup`
- Add `FormArray` for dynamic controls
- Write custom synchronous and asynchronous validators

## ⏱️ Estimated Time
**Intermediate | 50 minutes**

---

## 🔢 Tasks

### Task 1 — Reactive Form with FormBuilder (Steps 48–52)

```typescript
// Step 49: Build form in ngOnInit
this.enrollForm = this.fb.group({
  studentName:       ['', [Validators.required, Validators.minLength(3)]],
  studentEmail:      ['', [Validators.required, Validators.email], [simulateEmailCheck]],
  courseId:          ['', [Validators.required, noCourseCode]],
  preferredSemester: ['Odd', Validators.required],
  agreeToTerms:      [false, Validators.requiredTrue],
  additionalCourses: this.fb.array([])
});

// Step 52: form.value vs getRawValue()
// form.value      → excludes disabled controls
// getRawValue()   → includes ALL controls (including disabled)
```

```html
<!-- Step 50: Bind in template -->
<form [formGroup]="enrollForm">
  <input formControlName="studentName">
  <input formControlName="studentEmail">
</form>
```

---

### Task 2 — Custom Validators and FormArray (Steps 53–57)

```typescript
// Step 53: Custom synchronous validator
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  return control.value?.startsWith('XX') ? { noCourseCode: true } : null;
}

// Step 55: Custom async validator (simulates API call)
// Fires AFTER all sync validators pass — avoids unnecessary API calls
function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve =>
    setTimeout(() =>
      resolve(control.value?.includes('test@') ? { emailTaken: true } : null), 800)
  );
}

// Step 57: Typed getter — avoids casting in template
get additionalCourses(): FormArray {
  return this.enrollForm.get('additionalCourses') as FormArray;
}
// Better than template casting because it:
// 1. Is type-safe
// 2. Is reusable across the template
// 3. Keeps templates cleaner

// Step 56: Add / Remove dynamic controls
addCourse()          { this.additionalCourses.push(new FormControl('', Validators.required)); }
removeCourse(i: number) { this.additionalCourses.removeAt(i); }
```

---

## ✅ Expected Outcomes
- Entering `XX101` in courseId shows: "Course code starting with XX is not allowed."
- `test@example.com` shows: "This email is already taken." after ~800ms
- Additional course controls can be added/removed dynamically
- Submit button enabled only when all validators pass

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `src/app/pages/reactive-enrollment-form/reactive-enrollment-form.component.ts` | Reactive form class |
| `src/app/pages/reactive-enrollment-form/reactive-enrollment-form.component.html` | Reactive form template |
