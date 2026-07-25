# Exercise 10 — Unit Testing: Jasmine, Karma & TestBed

## 🎯 Objectives
- Write unit tests for Angular components with `TestBed`
- Test `@Input`, `@Output`, and `ngOnChanges`
- Test services with `HttpClientTestingModule`
- Test NgRx-connected components with `MockStore`

## ⏱️ Estimated Time
**Advanced | 60 minutes**

## 📋 Run Tests
```bash
ng test                   # Run all tests in watch mode
ng test --code-coverage   # Generate coverage report in /coverage
```

---

## 🔢 Tasks

### Task 1 — CourseCardComponent Tests (Steps 101–105)

```typescript
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

  // Step 102: Creation test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 103: @Input rendering
  it('should display course name from @Input', () => {
    component.course = mockCourse;
    fixture.detectChanges();  // MUST call detectChanges() before querying DOM
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toContain('Data Structures');
  });

  // Step 104: @Output event
  it('should emit enrollRequested on button click', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');

    const btn = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    btn.click();
    fixture.detectChanges();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Step 105: ngOnChanges
  it('should log on ngOnChanges', () => {
    spyOn(console, 'log');
    component.ngOnChanges({ course: new SimpleChange(null, mockCourse, true) });
    expect(console.log).toHaveBeenCalled();
  });
});
```

---

### Task 2 — Service Tests and NgRx MockStore (Steps 106–110)

```typescript
// Steps 106-108: CourseService with HttpClientTestingModule
describe('CourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify()); // Asserts no outstanding requests

  it('should GET courses from correct URL', () => {
    service.getCourses$().subscribe(courses => {
      expect(courses.length).toBe(2);
    });
    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });
});

// Step 109-110: Component with MockStore
TestBed.configureTestingModule({
  providers: [
    provideMockStore({
      initialState: { course: { courses: mockCourses, loading: false, error: null } }
    })
  ]
});
// Use store.setState({ course: { loading: true, courses: [], error: null } })
// to simulate loading state → assert loading indicator visible
```

---

## ✅ Expected Outcomes
- `ng test` shows 5+ passing tests for `CourseCardComponent`
- `CourseService` tests verify correct URL and error handling
- `MockStore` tests simulate loading state
- Coverage report shows component logic is covered

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `src/app/components/course-card/course-card.component.spec.ts` | Component tests (Steps 101-105) |
| `src/app/services/course.service.spec.ts` | Service HTTP tests (Steps 106-108) |
