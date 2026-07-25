// Exercise 10 — CourseCardComponent Unit Tests
// Steps 101-105: TestBed, @Input rendering, @Output, ngOnChanges

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseService } from '../../services/course.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const mockCourse = {
  id: 1, name: 'Data Structures', code: 'CS101',
  credits: 4, gradeStatus: 'passed' as const
};

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    // Step 101: Configure TestBed
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent, HttpClientTestingModule],
      providers: [EnrollmentService, CourseService]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // Step 102: Component creation test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 103: @Input rendering test
  it('should display the course name from @Input', () => {
    component.course = mockCourse;
    fixture.detectChanges(); // triggers change detection + DOM update
    const h3: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toContain('Data Structures');
  });

  // Step 104: @Output event test
  it('should emit enrollRequested with course id on enroll button click', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');

    const btn = fixture.debugElement.queryAll(By.css('button'))
      .find(b => b.nativeElement.textContent.includes('Enroll'));
    btn?.nativeElement.click();
    fixture.detectChanges();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Step 105: ngOnChanges test
  it('should log on ngOnChanges', () => {
    spyOn(console, 'log');
    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true)
    });
    expect(console.log).toHaveBeenCalled();
  });

  // Bonus: creditLabel pipe rendering
  it('should display credits as "4 Credits"', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    const credits = fixture.debugElement.query(By.css('.course-credits'));
    expect(credits.nativeElement.textContent).toContain('4 Credits');
  });
});
