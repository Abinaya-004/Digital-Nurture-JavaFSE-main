# Output — Exercise 02: Data Binding, Lifecycle Hooks & Component Communication

## Task 1 — Two-Way Binding Live Demo

**Browser:** Typing `Angular` in the search box  
**DOM updates in real time:**
```
Searching for: Angular
```

## Task 2 — Lifecycle Hook Console Output

```
# On navigating TO /home:
HomeComponent initialised — courses loaded

# On navigating AWAY from /home:
HomeComponent destroyed

# On CourseListComponent with 3 cards:
ngOnChanges — course input changed: { previous: undefined, current: { id: 1, name: 'Data Structures', ... } }
ngOnChanges — course input changed: { previous: undefined, current: { id: 2, name: 'Database Systems', ... } }
ngOnChanges — course input changed: { previous: undefined, current: { id: 3, name: 'Web Technologies', ... } }
```

## Task 3 — @Output Event Console

```bash
# After clicking Enroll on course with id=2:
Enrolling in course: 2
```

**Browser shows:**
```
Selected course ID: 2
```

## ✅ Exercise 02 Complete!
- ✔ All four binding types implemented
- ✔ ngOnInit logs on component load
- ✔ ngOnDestroy logs on navigation away
- ✔ ngOnChanges logs per card with previous/current values
- ✔ @Output emits courseId to parent on enroll
