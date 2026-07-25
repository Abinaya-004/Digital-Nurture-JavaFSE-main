// Exercise 10 — CourseService Unit Tests (Steps 106-108)
// Testing with HttpClientTestingModule + HttpTestingController

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

const mockCourses: Course[] = [
  { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
  { id: 2, name: 'Database Systems', code: 'CS202', credits: 3, gradeStatus: 'pending' }
];

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // Step 106: Configure TestBed with HttpClientTestingModule
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Step 107: Verify no unexpected HTTP requests were made
    // HttpTestingController.verify() asserts no outstanding requests remain after each test
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Step 107: getCourses$ HTTP test
  it('should GET courses from the correct URL', () => {
    service.getCourses$().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses[0].name).toBe('Data Structures');
    });

    // Flush mock response to the pending request
    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // Step 108: Error handling test
  it('should handle HTTP 500 errors gracefully', () => {
    service.getCourses$().subscribe({
      next: (courses) => {
        // Falls back to in-memory courses on error
        expect(courses.length).toBeGreaterThan(0);
      }
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    req.flush('Server Error', { status: 500, statusText: 'Internal Server Error' });
  });
});
