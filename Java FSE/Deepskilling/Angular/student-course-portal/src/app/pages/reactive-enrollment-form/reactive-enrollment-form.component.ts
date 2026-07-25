// Exercise 05 — ReactiveEnrollmentFormComponent
// Tasks: FormBuilder, FormGroup, FormArray, custom sync + async validators

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, FormGroup, FormArray,
  Validators, AbstractControl, ValidationErrors, FormControl
} from '@angular/forms';

// Exercise 05 — Step 53: Custom synchronous validator
// Returns { noCourseCode: true } if the value starts with 'XX'
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const val = control.value as string;
  return val && val.startsWith('XX') ? { noCourseCode: true } : null;
}

// Exercise 05 — Step 55: Custom async validator (simulates API call)
// Async validators fire AFTER all sync validators pass (to avoid unnecessary API calls)
// Returns Observable<ValidationErrors|null> or Promise<ValidationErrors|null>
function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(control.value?.includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {

  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Step 49: Build reactive form using FormBuilder
    this.enrollForm = this.fb.group({
      studentName:       ['', [Validators.required, Validators.minLength(3)]],
      // Step 55: async validator as 3rd argument
      studentEmail:      ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      // Step 53: custom sync validator applied alongside Validators.required
      courseId:          ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      // Validators.requiredTrue specifically validates that a checkbox is checked
      agreeToTerms:      [false, Validators.requiredTrue],
      // Step 56: FormArray for dynamic additional courses
      additionalCourses: this.fb.array([])
    });
  }

  // Step 57: Typed getter avoids casting in the template — cleaner and type-safe
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  removeCourse(i: number): void {
    this.additionalCourses.removeAt(i);
  }

  onSubmit(): void {
    // Step 52: form.value excludes disabled controls; getRawValue() includes all
    console.log('form.value:', this.enrollForm.value);
    console.log('getRawValue():', this.enrollForm.getRawValue());

    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }
}
