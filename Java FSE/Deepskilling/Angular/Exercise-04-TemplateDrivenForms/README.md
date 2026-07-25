# Exercise 04 — Template-Driven Forms & Validation

## 🎯 Objectives
- Build a template-driven enrollment form with `ngForm`
- Apply built-in validators: `required`, `minlength`, `email`
- Display contextual error messages using template reference variables
- Handle form submission and reset

## ⏱️ Estimated Time
**Intermediate | 40 minutes**

---

## 🔢 Tasks

### Task 1 — Build the Enrollment Request Form (Steps 38–42)

```bash
ng generate component pages/enrollment-form
```

```html
<form #enrollForm="ngForm" (ngSubmit)="onSubmit(enrollForm)">

  <input name="studentName"
         [(ngModel)]="model.studentName"
         required minlength="3">

  <input type="email" name="studentEmail"
         [(ngModel)]="model.studentEmail"
         required email>

  <input type="number" name="courseId"
         [(ngModel)]="model.courseId"
         required>

  <select name="preferredSemester" [(ngModel)]="model.preferredSemester">
    <option>Odd</option><option>Even</option>
  </select>

  <input type="checkbox" name="agreeToTerms"
         [(ngModel)]="model.agreeToTerms" required>

  <!-- Submit disabled when invalid -->
  <button type="submit" [disabled]="enrollForm.invalid">Submit</button>
</form>
```

> **Key:** The `name` attribute is mandatory on every form control — Angular uses it as the key in `form.value`.

---

### Task 2 — Validation and Error Messages (Steps 43–47)

```html
<!-- Template reference variable exposes the NgModel instance -->
<input name="studentName" [(ngModel)]="model.studentName"
       #nameCtrl="ngModel" required minlength="3">

<!-- Step 44: Contextual errors — show after user touches the field -->
<span *ngIf="nameCtrl.touched && nameCtrl.errors?.['required']">
  Name is required.
</span>
<span *ngIf="nameCtrl.touched && nameCtrl.errors?.['minlength']">
  Name must be at least 3 characters.
</span>
```

```css
/* Step 45: Angular form state CSS classes */
.ng-invalid.ng-touched { border-color: red; }
.ng-valid.ng-touched   { border-color: green; }
```

> **touched** = user focused and left the field (best for showing errors)  
> **dirty** = user changed the value  
> **pristine** = value never changed

```typescript
// Step 46: Success flag + Step 47: Reset
onSubmit(form: NgForm): void {
  if (form.valid) this.submitted = true;
}

onReset(form: NgForm): void {
  form.resetForm();
  this.submitted = false;
}
```

---

## ✅ Expected Outcomes
- Invalid fields show red border + specific error message after being touched
- Valid fields show green border
- Submit button disabled when any field is invalid
- Successful submission shows success banner
- Reset clears all fields and validation states

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `src/app/pages/enrollment-form/enrollment-form.component.ts` | Form class |
| `src/app/pages/enrollment-form/enrollment-form.component.html` | Template-driven form |
