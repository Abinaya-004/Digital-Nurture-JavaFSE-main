# Output — Exercise 05: Reactive Forms

## Task 1 — form.value on Submit

```javascript
// console.log('form.value:', this.enrollForm.value)
{
  studentName: "Abinaya",
  studentEmail: "abinaya@college.edu",
  courseId: "CS101",
  preferredSemester: "Odd",
  agreeToTerms: true,
  additionalCourses: ["CS202", "CS303"]
}

// console.log('getRawValue():', this.enrollForm.getRawValue())
// Same as above when no controls are disabled
// If courseId were disabled: form.value omits it, getRawValue() includes it
```

## Task 2 — Custom Validator Errors

| Input | Error Key | Message |
|-------|-----------|---------|
| courseId = `"XX999"` | `noCourseCode` | "Course code starting with XX is not allowed." |
| courseId = `"CS101"` | *(none)* | *(no error)* |
| email = `"test@abc.com"` (after 800ms) | `emailTaken` | "This email is already taken." |
| email = `"abc@example.com"` | *(none)* | *(no error)* |

## Task 2 — FormArray Dynamic Controls

```
Initial:  additionalCourses = []

Click "Add Another Course":
  additionalCourses = [FormControl('')]

Fill "CS202", Click "Add Another Course":
  additionalCourses = [FormControl('CS202'), FormControl('')]

Click Remove on index 0:
  additionalCourses = [FormControl('')]
```

## Task 2 — Async Validator Timing

```
User types: test@example.com
Sync validators (required, email) → PASS immediately
Async validator fires after 800ms:
  → After 800ms: { emailTaken: true } → error shown
  → Control status: INVALID

Status while checking:
  enrollForm.get('studentEmail')?.pending → true  → shows "Checking email..."
  enrollForm.get('studentEmail')?.pending → false → shows error or clears
```

## ✅ Exercise 05 Complete!
- ✔ Reactive form with FormBuilder
- ✔ All built-in validators applied
- ✔ Custom sync validator (noCourseCode) blocks XX prefix
- ✔ Custom async validator (simulateEmailCheck) fires after sync pass
- ✔ FormArray with add/remove dynamic controls
- ✔ Typed getter for FormArray
