// Exercise 06 — CourseService
// Tasks: providedIn root (singleton), getCourses, getCourseById, addCourse
// Singleton: one instance shared across the entire application (providedIn: 'root')

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

const API_URL = 'http://localhost:3000/courses';

@Injectable({ providedIn: 'root' })
export class CourseService {

  // In-memory fallback data (used when JSON Server is not running)
  private courses: Course[] = [
    { id: 1, name: 'Data Structures',       code: 'CS101', credits: 4, gradeStatus: 'passed',  description: 'Arrays, linked lists, trees, graphs.', instructor: 'Dr. Smith' },
    { id: 2, name: 'Database Systems',      code: 'CS202', credits: 3, gradeStatus: 'pending', description: 'SQL, normalization, transactions.',       instructor: 'Prof. Kumar' },
    { id: 3, name: 'Web Technologies',      code: 'CS303', credits: 4, gradeStatus: 'failed',  description: 'HTML, CSS, JavaScript, frameworks.',      instructor: 'Ms. Patel' },
    { id: 4, name: 'Operating Systems',     code: 'CS404', credits: 3, gradeStatus: 'passed',  description: 'Processes, memory, file systems.',         instructor: 'Dr. Jones' },
    { id: 5, name: 'Machine Learning',      code: 'CS505', credits: 4, gradeStatus: 'pending', description: 'Supervised/unsupervised learning, NNs.',   instructor: 'Dr. Lee'   }
  ];

  constructor(private http: HttpClient) {}

  // Exercise 06 — Step 58: Synchronous getCourses (used before HOL-08)
  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  // Exercise 08 — HTTP versions using Observable
  // HttpClient methods return cold Observables — they do not execute until subscribed
  getCourses$(): Observable<Course[]> {
    return this.http.get<Course[]>(API_URL).pipe(
      // Exercise 08 — Step 83: map operator to transform/filter the response
      map(courses => courses.filter(c => c.credits > 0)),
      // Exercise 08 — Step 85: tap for side effects (logging) — never modify data inside tap
      tap(courses => console.log('Courses loaded:', courses.length)),
      // Exercise 08 — Step 84: catchError for graceful error handling
      catchError(err => {
        console.error('CourseService error:', err);
        return of(this.courses); // fallback to in-memory data
      })
    );
  }

  getCourseById$(id: number): Observable<Course> {
    return this.http.get<Course>(`${API_URL}/${id}`);
  }

  // Exercise 08 — Step 81: POST — create a course
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(API_URL, course);
  }

  // Exercise 08 — Step 82: PUT — update a course
  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${API_URL}/${id}`, course);
  }

  // Exercise 08 — Step 82: DELETE — delete a course
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}
