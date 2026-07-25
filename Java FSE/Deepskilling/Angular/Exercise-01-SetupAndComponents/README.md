# Exercise 01 — Environment Setup, Project Structure & First Component

## 🎯 Objectives
- Install Angular CLI and scaffold the Student Course Portal project
- Understand every generated file and folder
- Create and organise core Angular components

## ⏱️ Estimated Time
**Beginner | 45 minutes**

## 📋 Topics Covered
- Angular CLI & Workspace Setup
- Angular Project Structure & Files
- Running & Building Angular Apps
- Creating Components
- Angular Module Overview

---

## 🔢 Tasks

### Task 1 — Scaffold and Explore the Angular Project

#### Step 1: Create the Angular Project
```bash
npm install -g @angular/cli
ng new student-course-portal --routing --style=css
cd student-course-portal
ng serve
```

#### Step 2: Document each file in `notes.txt`
| File | Purpose |
|------|---------|
| `angular.json` | Workspace config: build options, budgets, CLI targets |
| `tsconfig.json` | Root TypeScript compiler options |
| `tsconfig.app.json` | App-specific TS config for browser build |
| `package.json` | NPM manifest: runtime + dev dependencies |
| `src/main.ts` | Entry point: bootstraps AppComponent |
| `src/app/app.config.ts` | Standalone API providers (router, HTTP, NgRx) |
| `src/app/app.component.ts` | Root shell component |
| `src/index.html` | Host HTML with `<app-root>` mount point |

#### Step 3: Verify dev server
```bash
ng serve
# Open http://localhost:4200
```

#### Step 4: Build and inspect dist/
```bash
ng build
ls dist/student-course-portal/
```

#### Step 5: Budget config in angular.json
```json
"budgets": [
  { "type": "initial", "maximumWarning": "500kB", "maximumError": "1MB" }
]
```
> **maximumWarning** — Emits a warning if bundle exceeds threshold  
> **maximumError** — Fails the build if bundle exceeds threshold (CI/CD enforcement)

---

### Task 2 — Create and Organise Components

#### Step 6: Generate components via CLI
```bash
ng generate component components/header
ng generate component pages/home
ng generate component pages/course-list
ng generate component pages/student-profile
```
Each generates 4 files: `.ts`, `.html`, `.css`, `.spec.ts`

#### Step 7: HeaderComponent — add nav
```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/courses">Courses</a>
  <a routerLink="/profile">Profile</a>
</nav>
```

#### Step 8: HomeComponent — stats row
```html
<h1>Welcome to Student Course Portal</h1>
<p>Browse and enroll in courses.</p>
<div class="stats">
  <div>Courses Available: 12</div>
  <div>Enrolled: 3</div>
  <div>GPA: 3.8</div>
</div>
```

#### Step 9: app.component.html
```html
<app-header></app-header>
<router-outlet></router-outlet>
```

#### Step 10: Verify compilation
```bash
ng serve  # should compile without errors
```

---

## ✅ Expected Outcomes
- `ng serve` runs without errors
- `notes.txt` contains explanations for all 8 files
- `ng build` produces a `dist/` folder
- Browser shows header nav and home page welcome content

## 📁 Files in This Exercise
| File | Description |
|------|-------------|
| `notes.txt` | File explanations (Task 1) |
| `src/app/app.component.ts` | Root component |
| `src/app/components/header/` | Header component |
| `src/app/pages/home/` | Home page component |
| `src/app/pages/course-list/` | Course list page |
| `src/app/pages/student-profile/` | Student profile page |
