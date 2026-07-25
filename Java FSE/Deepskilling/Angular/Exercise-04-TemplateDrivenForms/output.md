# Output — Exercise 04: Template-Driven Forms & Validation

## Task 1 — form.value on Submit (All Fields Filled)

```javascript
// console.log('form.value:', form.value)
{
  studentName: "Abinaya S",
  studentEmail: "abinaya@college.edu",
  courseId: 101,
  preferredSemester: "Odd",
  agreeToTerms: true
}

// console.log('form.valid:', form.valid)
true
```

## Task 2 — Validation Error States

| Field | Condition | Error Shown |
|-------|-----------|-------------|
| `studentName` (empty, touched) | `required` error | "Name is required." |
| `studentName` ("AB", touched) | `minlength` error | "Name must be at least 3 characters." |
| `studentEmail` (touched, no @) | `email` error | "Enter a valid email address." |
| `courseId` (touched, empty) | `required` error | "Course ID is required." |

## Task 2 — Angular CSS Classes Applied

```
Input touched, valid   → .ng-valid.ng-touched    → green border
Input touched, invalid → .ng-invalid.ng-touched  → red border
Input not touched      → no border colour change
```

## Task 2 — Submit Button State

```
Form has any invalid field → [disabled]="enrollForm.invalid" → button is greyed out
All fields valid           → button is clickable → submit fires → success banner shown
```

## Task 2 — Success Banner (after valid submit)

```
✅ Enrollment request submitted successfully!
```

## ✅ Exercise 04 Complete!
- ✔ Template-driven form with 5 field types
- ✔ Built-in validators: required, minlength, email
- ✔ Contextual errors shown on `touched` state
- ✔ Angular CSS classes style input borders
- ✔ Submit button disabled until form is valid
- ✔ Success banner shown on valid submission
- ✔ Reset clears form to pristine state
