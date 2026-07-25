// Exercise 07 — StudentProfileComponent
// Step 66: Display enrolled courses using EnrollmentService

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profile-page">
      <h1>Student Profile</h1>
      <div class="profile-card card">
        <h2>Abinaya</h2>
        <p>Email: student@college.edu</p>
        <p>GPA: 3.8</p>
      </div>

      <h2>Enrolled Courses ({{ enrolledCourses.length }})</h2>
      <ul *ngIf="enrolledCourses.length > 0; else noEnroll">
        <li *ngFor="let c of enrolledCourses" class="enrolled-item card">
          <strong>{{ c.name }}</strong> — {{ c.code }}
        </li>
      </ul>
      <ng-template #noEnroll>
        <p class="text-muted">No courses enrolled yet. Visit Courses to enroll.</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .profile-page { display: flex; flex-direction: column; gap: 1.5rem; }
    .enrolled-item { margin-bottom: .5rem; padding: .75rem 1rem; }
    .text-muted { color: #64748b; }
  `]
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}
