// Exercise 02 — CourseCardComponent
// Tasks: @Input, @Output, EventEmitter, ngOnChanges

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {

  // Exercise 02 — Step 20: @Input decorator — data flows DOWN from parent
  @Input() course!: Course;

  // Exercise 02 — Step 21: @Output with strongly-typed EventEmitter — events bubble UP to parent
  @Output() enrollRequested = new EventEmitter<number>();

  // Exercise 03 — Step 31: Toggle expanded state
  isExpanded = false;

  constructor(public enrollmentService: EnrollmentService) {}

  // Exercise 02 — Step 18: ngOnChanges — fires when @Input values change
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      const prev = changes['course'].previousValue;
      const curr = changes['course'].currentValue;
      console.log('ngOnChanges — course input changed:', { previous: prev, current: curr });
    }
  }

  // Exercise 02 — Step 21: Emit enroll event with course ID
  onEnrollClick(): void {
    const id = this.course.id;
    if (this.enrollmentService.isEnrolled(id)) {
      this.enrollmentService.unenroll(id);
    } else {
      this.enrollmentService.enroll(id);
    }
    this.enrollRequested.emit(id);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Exercise 03 — Step 32: Getter for ngClass — keeps template clean
  // Getters encapsulate complex logic in the class, not the template
  get cardClasses(): Record<string, boolean> {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
      'card--full':     this.course.credits >= 4,
      'expanded':       this.isExpanded
    };
  }

  // Exercise 03 — Step 30: Border colour based on gradeStatus for ngStyle
  get gradeStatusColor(): string {
    const map: Record<string, string> = {
      passed: '#10b981',
      failed: '#ef4444',
      pending: '#94a3b8'
    };
    return map[this.course.gradeStatus] ?? '#94a3b8';
  }
}
