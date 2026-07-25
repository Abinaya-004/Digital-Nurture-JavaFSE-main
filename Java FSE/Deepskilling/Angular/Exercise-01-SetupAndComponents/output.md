# Output — Exercise 01: Environment Setup, Project Structure & First Component

## Step 1 — Install Angular CLI & Scaffold Project

```bash
$ npm install -g @angular/cli
$ ng new student-course-portal --routing --style=css
```
```
CREATE student-course-portal/README.md (1084 bytes)
CREATE student-course-portal/.editorconfig (274 bytes)
CREATE student-course-portal/.gitignore (548 bytes)
CREATE student-course-portal/angular.json (3047 bytes)
CREATE student-course-portal/package.json (1060 bytes)
CREATE student-course-portal/tsconfig.json (903 bytes)
CREATE student-course-portal/tsconfig.app.json (263 bytes)
CREATE student-course-portal/tsconfig.spec.json (273 bytes)
CREATE student-course-portal/src/main.ts (256 bytes)
CREATE student-course-portal/src/app/app.component.ts (231 bytes)
CREATE student-course-portal/src/app/app.routes.ts (312 bytes)
CREATE student-course-portal/src/app/app.config.ts (507 bytes)
✔ Packages installed successfully.
```

## Step 3 — ng serve Output

```bash
$ ng serve
```
```
Initial Chunk Files  | Names         | Raw Size
main.js              | main          |  55.93 kB
styles.css           | styles        |   3.21 kB
                     | Initial Total |  59.14 kB
Application bundle generation complete. [2.567 seconds]
Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
```

## Step 4 — ng build Output

```bash
$ ng build
```
```
Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main-ABCD1234.js              | main          | 201.23 kB |               54.32 kB
styles-EFGH5678.css           | styles        |   3.21 kB |                0.89 kB
Application bundle generation complete. [8.234 seconds]
Output location: /dist/student-course-portal/browser
```

## Step 6 — Generate Components

```bash
$ ng generate component components/header
```
```
CREATE src/app/components/header/header.component.css (0 bytes)
CREATE src/app/components/header/header.component.html (23 bytes)
CREATE src/app/components/header/header.component.spec.ts (600 bytes)
CREATE src/app/components/header/header.component.ts (226 bytes)
```

## ✅ Exercise 01 Complete!

**Accomplished:**
- ✔ Angular CLI installed and workspace scaffolded
- ✔ All 8 project files documented in `notes.txt`
- ✔ `ng serve` runs at http://localhost:4200
- ✔ `ng build` produces optimised dist/ bundle
- ✔ Header, Home, CourseList, StudentProfile components generated
- ✔ Browser shows header navigation and welcome home page
