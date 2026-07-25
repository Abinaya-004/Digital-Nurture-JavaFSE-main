// Exercise 06 — EnrollmentService
// Tasks: enroll, unenroll, isEnrolled, getEnrolledCourses (service-to-service injection)
// Demonstrates: providedIn root singleton, service injecting another service

import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  // Exercise 06 — Step 64: Service-to-service injection
  // Services can depend on other services, creating a layered architecture
  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  // Resolve IDs to full Course objects using CourseService
  getEnrolledCourses(): Course[] {
    return this.enrolledCourseIds
      .map(id => this.courseService.getCourseById(id))
      .filter((c): c is Course => c !== undefined);
  }

  getEnrolledIds(): number[] {
    return [...this.enrolledCourseIds];
  }
}
