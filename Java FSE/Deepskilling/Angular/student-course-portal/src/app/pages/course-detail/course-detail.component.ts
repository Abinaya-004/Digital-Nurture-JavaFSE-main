// Exercise 07 — CourseDetailComponent
// Step 69: Read :id from route, load course using CourseService

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="detail-page" *ngIf="course; else notFound">
      <button class="btn btn-secondary" (click)="goBack()">← Back to Courses</button>
      <h1>{{ course.name }}</h1>
      <p><strong>Code:</strong> {{ course.code }}</p>
      <p><strong>Credits:</strong> {{ course.credits }}</p>
      <p><strong>Status:</strong> {{ course.gradeStatus | titlecase }}</p>
      <p><strong>Instructor:</strong> {{ course.instructor ?? 'TBA' }}</p>
      <p>{{ course.description }}</p>
    </div>
    <ng-template #notFound>
      <p class="error-msg">Course not found.</p>
    </ng-template>
  `,
  styles: [`.detail-page { max-width: 600px; display: flex; flex-direction: column; gap: 1rem; }`]
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    // Step 69: Read route parameter :id using snapshot.paramMap
    // Use route.paramMap Observable if the param can change while the component is active
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.courseService.getCourseById(id);
  }

  goBack(): void { this.router.navigate(['/courses']); }
}
