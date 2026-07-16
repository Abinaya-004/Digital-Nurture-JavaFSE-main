import React, { useState } from 'react';

// Exercise 13: HOL - Conditional Rendering (Multiple Ways) + Lists with Keys
// bloggerapp with BookDetails, BlogDetails, CourseDetails components

const bookData = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
  { id: 2, title: 'The Pragmatic Programmer', author: 'David Thomas', year: 1999 },
  { id: 3, title: 'Design Patterns', author: 'Gang of Four', year: 1994 },
];

const blogData = [
  { id: 1, title: 'React Hooks Guide', category: 'React', date: '2024-01-10' },
  { id: 2, title: 'Understanding Redux', category: 'State Management', date: '2024-01-15' },
  { id: 3, title: 'CSS Modules vs Styled Components', category: 'Styling', date: '2024-01-20' },
];

const courseData = [
  { id: 1, name: 'Full Stack Java', duration: '6 months', level: 'Advanced' },
  { id: 2, name: 'React Fundamentals', duration: '2 months', level: 'Beginner' },
  { id: 3, name: 'Spring Boot Microservices', duration: '3 months', level: 'Intermediate' },
];

// Method 1: if-else
function BookDetails({ show }) {
  if (!show) return null;
  return (
    <div style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '10px', margin: '10px 0' }}>
      <h3 style={{ color: '#1565c0' }}>📚 Book Details (if-else rendering)</h3>
      {bookData.map(book => (
        <div key={book.id} style={{ borderLeft: '4px solid #1565c0', paddingLeft: '10px', marginBottom: '10px' }}>
          <strong>{book.title}</strong> by {book.author} ({book.year})
        </div>
      ))}
    </div>
  );
}

// Method 2: ternary operator
function BlogDetails({ show }) {
  return show ? (
    <div style={{ backgroundColor: '#f3e5f5', padding: '20px', borderRadius: '10px', margin: '10px 0' }}>
      <h3 style={{ color: '#6a1b9a' }}>📝 Blog Details (ternary operator)</h3>
      {blogData.map(blog => (
        <div key={blog.id} style={{ borderLeft: '4px solid #6a1b9a', paddingLeft: '10px', marginBottom: '10px' }}>
          <strong>{blog.title}</strong> — {blog.category} | {blog.date}
        </div>
      ))}
    </div>
  ) : null;
}

// Method 3: && short-circuit
function CourseDetails({ show }) {
  return (
    <div>
      {show && (
        <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '10px', margin: '10px 0' }}>
          <h3 style={{ color: '#1b5e20' }}>🎓 Course Details (&amp;&amp; short-circuit rendering)</h3>
          {courseData.map(course => (
            <div key={course.id} style={{ borderLeft: '4px solid #4caf50', paddingLeft: '10px', marginBottom: '10px' }}>
              <strong>{course.name}</strong> — {course.duration} | Level: {course.level}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  const toggleBtn = (label, state, setState, color) => (
    <button
      onClick={() => setState(!state)}
      style={{ backgroundColor: color, color: 'white', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', margin: '5px' }}
    >
      {state ? `Hide ${label}` : `Show ${label}`}
    </button>
  );

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>📖 Blogger App — Conditional Rendering Demo</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {toggleBtn('Books', showBooks, setShowBooks, '#1565c0')}
        {toggleBtn('Blogs', showBlogs, setShowBlogs, '#6a1b9a')}
        {toggleBtn('Courses', showCourses, setShowCourses, '#1b5e20')}
      </div>
      <BookDetails show={showBooks} />
      <BlogDetails show={showBlogs} />
      <CourseDetails show={showCourses} />
    </div>
  );
}

export default App;
