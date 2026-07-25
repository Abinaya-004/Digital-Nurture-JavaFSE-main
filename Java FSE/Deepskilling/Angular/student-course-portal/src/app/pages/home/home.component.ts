// Exercise 02 — HomeComponent
// Tasks: Interpolation, property binding, event binding, two-way binding, ngOnInit, ngOnDestroy

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  // Exercise 02 — Step 11: Interpolation
  portalName = 'Student Course Portal';

  // Exercise 02 — Step 12: Property binding for disabled state
  isPortalActive = true;

  // Exercise 02 — Step 13: Event binding
  message = '';

  // Exercise 02 — Step 14: Two-way binding with ngModel
  // [(ngModel)] is shorthand for [ngModel]="prop" (ngModelChange)="prop=$event"
  // One-way [property]: component → DOM only
  // Two-way [(ngModel)]: DOM ↔ component (bidirectional)
  searchTerm = '';

  // Stats — Exercise 01, Step 8 (hardcoded) then updated live via service in Exercise 06
  coursesAvailable = 12;
  enrolled = 3;
  gpa = 3.8;

  constructor(private courseService: CourseService) {}

  // Exercise 02 — Step 16: ngOnInit — data fetching belongs here, NOT in the constructor
  // The constructor fires before @Input() values are set; ngOnInit fires after.
  ngOnInit(): void {
    this.coursesAvailable = this.courseService.getCourses().length;
    console.log('HomeComponent initialised — courses loaded');
  }

  // Exercise 02 — Step 17: ngOnDestroy — clean up subscriptions, timers to avoid memory leaks
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Exercise 02 — Step 13: Event binding handler
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
