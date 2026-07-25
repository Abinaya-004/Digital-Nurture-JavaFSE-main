// Exercise 04 — EnrollmentFormComponent (Template-Driven Form)
// Tasks: ngForm, ngModel bindings, built-in validators, error messages, form submission

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent {

  // Step 46: Toggle success message
  submitted = false;

  // Form model — bound via [(ngModel)]
  model = {
    studentName: '',
    studentEmail: '',
    courseId: null as number | null,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  // Step 40: onSubmit handler — receives NgForm reference
  onSubmit(form: NgForm): void {
    console.log('form.value:', form.value);
    console.log('form.valid:', form.valid);

    if (form.valid) {
      this.submitted = true;
    }
  }

  // Step 47: Reset form to pristine state
  onReset(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
    this.model = {
      studentName: '', studentEmail: '',
      courseId: null, preferredSemester: 'Odd', agreeToTerms: false
    };
  }
}
