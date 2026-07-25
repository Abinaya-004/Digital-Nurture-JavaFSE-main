// Exercise 03 — CourseListComponent
// Tasks: *ngIf, *ngFor with trackBy, *ngSwitch, ngClass, ngStyle, setTimeout loading

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];
  selectedCourseId: number | null = null;

  // Exercise 03 — Step 25: Loading state with *ngIf
  isLoading = true;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Exercise 03 — Step 25: Simulate async load with setTimeout
    setTimeout(() => {
      this.courses = this.courseService.getCourses();
      this.isLoading = false;
    }, 1500);
  }

  // Exercise 02 — Step 23: Handle enroll event from child via @Output
  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // Exercise 03 — Step 26: trackBy for *ngFor performance
  // Without trackBy, Angular re-renders all list items on ANY array change.
  // With trackBy, only items whose identity (course.id) changes are re-rendered.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  // Exercise 07 — Navigate to course detail on card click
  onCardClick(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }
}
