// Exercise 06 — Course & Student model interfaces
// Defining TypeScript interfaces gives compile-time type checking
// across the entire application — always prefer this over using 'any'

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  description?: string;
  instructor?: string;
  enrolled?: boolean;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  enrolledCourseIds: number[];
  gpa: number;
}

export interface EnrollmentRequest {
  studentName: string;
  studentEmail: string;
  courseId: number | string;
  preferredSemester: 'Odd' | 'Even';
  agreeToTerms: boolean;
  additionalCourses?: string[];
}
