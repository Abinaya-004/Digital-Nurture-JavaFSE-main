# 📊 Angular Hands-On Labs (HOL) — Exercise Status

> **Repository Path:** `C:\Digital-Nurture-JavaFSE-main\Java FSE\Deepskilling\Angular`  
> **Last Updated:** 2026-07-25  
> **Project:** Student Course Portal  
> **Angular Version:** v20.0 (Standalone API)  
> **Total Exercises:** 10

---

## 🗂️ Exercise Status Table

| # | Exercise | Level | Topics | Status | Key Files | Output |
|---|----------|-------|--------|--------|-----------|--------|
| 1 | [Exercise-01-SetupAndComponents](./Exercise-01-SetupAndComponents/) | 🟢 Beginner | CLI setup, Project structure, Components | ✅ **Completed** | `notes.txt`, `app.component.ts`, `header/`, `home/` | [output.md](./Exercise-01-SetupAndComponents/output.md) |
| 2 | [Exercise-02-DataBindingAndLifecycle](./Exercise-02-DataBindingAndLifecycle/) | 🟢 Beginner | Interpolation, property/event/two-way binding, ngOnInit, ngOnDestroy, @Input/@Output | ✅ **Completed** | `home.component.ts`, `course-card.component.ts` | [output.md](./Exercise-02-DataBindingAndLifecycle/output.md) |
| 3 | [Exercise-03-DirectivesAndPipes](./Exercise-03-DirectivesAndPipes/) | 🟢 Beginner | *ngIf, *ngFor, *ngSwitch, ngClass, ngStyle, custom directive, custom pipe | ✅ **Completed** | `highlight.directive.ts`, `credit-label.pipe.ts` | [output.md](./Exercise-03-DirectivesAndPipes/output.md) |
| 4 | [Exercise-04-TemplateDrivenForms](./Exercise-04-TemplateDrivenForms/) | 🟡 Intermediate | ngForm, ngModel, required/minlength/email validators, error messages, submit/reset | ✅ **Completed** | `enrollment-form.component.ts/.html` | [output.md](./Exercise-04-TemplateDrivenForms/output.md) |
| 5 | [Exercise-05-ReactiveForms](./Exercise-05-ReactiveForms/) | 🟡 Intermediate | FormBuilder, FormGroup, FormArray, custom sync + async validators | ✅ **Completed** | `reactive-enrollment-form.component.ts/.html` | [output.md](./Exercise-05-ReactiveForms/output.md) |
| 6 | [Exercise-06-ServicesAndDI](./Exercise-06-ServicesAndDI/) | 🟡 Intermediate | providedIn root, singleton pattern, service-to-service DI, component-level providers | ✅ **Completed** | `course.service.ts`, `enrollment.service.ts`, `course.model.ts` | [output.md](./Exercise-06-ServicesAndDI/output.md) |
| 7 | [Exercise-07-RoutingAndGuards](./Exercise-07-RoutingAndGuards/) | 🟡 Intermediate | Routes, route params, query params, lazy loading, CanActivate, CanDeactivate | ✅ **Completed** | `app.routes.ts`, `auth.guard.ts`, `unsaved-changes.guard.ts`, `enrollment.routes.ts` | [output.md](./Exercise-07-RoutingAndGuards/output.md) |
| 8 | [Exercise-08-HttpClient](./Exercise-08-HttpClient/) | 🔴 Advanced | HttpClient, Observables, map/tap/catchError/retry/switchMap, interceptors, finalize | ✅ **Completed** | `course.service.ts` (HTTP), `auth/error-handler/loading interceptors`, `db.json` | [output.md](./Exercise-08-HttpClient/output.md) |
| 9 | [Exercise-09-NgRxStateManagement](./Exercise-09-NgRxStateManagement/) | 🔴 Advanced | NgRx Store, Actions, Reducers, Selectors, Effects, cross-slice selectors | ✅ **Completed** | `store/course/`, `store/enrollment/` | [output.md](./Exercise-09-NgRxStateManagement/output.md) |
| 10 | [Exercise-10-UnitTesting](./Exercise-10-UnitTesting/) | 🔴 Advanced | Jasmine, Karma, TestBed, @Input/@Output tests, HttpTestingController, MockStore | ✅ **Completed** | `course-card.component.spec.ts`, `course.service.spec.ts` | [output.md](./Exercise-10-UnitTesting/output.md) |

---

## 📁 Final Folder Structure

```
Angular/
├── Angular_HandsOn.pdf                            ← Original HOL document (source)
├── STATUS.md                                      ← This file (master status tracker)
│
├── student-course-portal/                         ← Single Angular project (all 10 HOLs)
│   ├── db.json                                    ← JSON Server mock API (HOL-08)
│   ├── notes.txt                                  ← File explanations (HOL-01 Task 1)
│   └── src/app/
│       ├── app.component.ts                       ← Root shell
│       ├── app.config.ts                          ← Providers (router, HTTP, NgRx)
│       ├── app.routes.ts                          ← All portal routes (HOL-07)
│       ├── components/
│       │   ├── header/                            ← HOL-01
│       │   │   ├── header.component.ts/.html/.css
│       │   └── course-card/                       ← HOL-02, 03
│       │       ├── course-card.component.ts/.html/.css
│       │       └── course-card.component.spec.ts  ← HOL-10
│       ├── pages/
│       │   ├── home/                              ← HOL-01, 02
│       │   ├── course-list/                       ← HOL-03
│       │   ├── course-detail/                     ← HOL-07
│       │   ├── student-profile/                   ← HOL-06, 07
│       │   ├── enrollment-form/                   ← HOL-04
│       │   ├── reactive-enrollment-form/          ← HOL-05
│       │   └── not-found/                         ← HOL-07
│       ├── services/
│       │   ├── course.service.ts                  ← HOL-06, 08
│       │   ├── course.service.spec.ts             ← HOL-10
│       │   ├── enrollment.service.ts              ← HOL-06
│       │   ├── auth.service.ts                    ← HOL-07
│       │   └── loading.service.ts                 ← HOL-08
│       ├── models/
│       │   └── course.model.ts                    ← HOL-06
│       ├── directives/
│       │   └── highlight.directive.ts             ← HOL-03
│       ├── pipes/
│       │   └── credit-label.pipe.ts               ← HOL-03
│       ├── guards/
│       │   ├── auth.guard.ts                      ← HOL-07
│       │   └── unsaved-changes.guard.ts           ← HOL-07
│       ├── interceptors/
│       │   ├── auth.interceptor.ts                ← HOL-08
│       │   ├── error-handler.interceptor.ts       ← HOL-08
│       │   └── loading.interceptor.ts             ← HOL-08
│       ├── store/
│       │   ├── course/                            ← HOL-09
│       │   │   ├── course.actions.ts
│       │   │   ├── course.reducer.ts
│       │   │   ├── course.selectors.ts
│       │   │   └── course.effects.ts
│       │   └── enrollment/                        ← HOL-09
│       │       ├── enrollment.actions.ts
│       │       ├── enrollment.reducer.ts
│       │       └── enrollment.selectors.ts
│       └── features/
│           └── enrollment/
│               └── enrollment.routes.ts           ← HOL-07 (lazy loading)
│
├── Exercise-01-SetupAndComponents/
│   ├── README.md
│   └── output.md
├── Exercise-02-DataBindingAndLifecycle/
│   ├── README.md
│   └── output.md
├── Exercise-03-DirectivesAndPipes/
│   ├── README.md
│   └── output.md
├── Exercise-04-TemplateDrivenForms/
│   ├── README.md
│   └── output.md
├── Exercise-05-ReactiveForms/
│   ├── README.md
│   └── output.md
├── Exercise-06-ServicesAndDI/
│   ├── README.md
│   └── output.md
├── Exercise-07-RoutingAndGuards/
│   ├── README.md
│   └── output.md
├── Exercise-08-HttpClient/
│   ├── README.md
│   └── output.md
├── Exercise-09-NgRxStateManagement/
│   ├── README.md
│   └── output.md
└── Exercise-10-UnitTesting/
    ├── README.md
    └── output.md
```

---

## 📝 Exercise Details

### Exercise 01 — Environment Setup & First Component ✅
- **Level:** Beginner | **Time:** 45 min
- **Source Steps:** 1–10
- **Key CLI:** `ng new`, `ng serve`, `ng build`, `ng generate component`
- **Concepts:** Project structure, standalone API, angular.json budgets

### Exercise 02 — Data Binding & Lifecycle Hooks ✅
- **Level:** Beginner | **Time:** 40 min
- **Source Steps:** 11–24
- **Key Concepts:** `{{ }}`, `[prop]`, `(event)`, `[(ngModel)]`, `ngOnInit`, `ngOnDestroy`, `ngOnChanges`, `@Input`, `@Output`, `EventEmitter<T>`

### Exercise 03 — Directives & Pipes ✅
- **Level:** Beginner | **Time:** 45 min
- **Source Steps:** 25–37
- **Key CLI:** `ng generate directive`, `ng generate pipe`
- **Concepts:** `*ngIf/else`, `*ngFor/trackBy`, `*ngSwitch`, `ngClass`, `ngStyle`, `@HostListener`, `PipeTransform`, `pure` pipes

### Exercise 04 — Template-Driven Forms ✅
- **Level:** Intermediate | **Time:** 40 min
- **Source Steps:** 38–47
- **Key Concepts:** `FormsModule`, `#ref=ngForm`, `[(ngModel)]`, `name` attr, `required/minlength/email`, `ng-valid/ng-invalid/ng-touched`, `resetForm()`

### Exercise 05 — Reactive Forms ✅
- **Level:** Intermediate | **Time:** 50 min
- **Source Steps:** 48–57
- **Key Concepts:** `ReactiveFormsModule`, `FormBuilder`, `FormGroup`, `FormArray`, `AbstractControl`, `ValidationErrors`, async validators, `form.value` vs `getRawValue()`

### Exercise 06 — Services & Dependency Injection ✅
- **Level:** Intermediate | **Time:** 40 min
- **Source Steps:** 58–67
- **Key Concepts:** `@Injectable({ providedIn: 'root' })`, singleton pattern, service-to-service injection, component-level `providers: []`

### Exercise 07 — Routing, Guards & Lazy Loading ✅
- **Level:** Intermediate | **Time:** 50 min
- **Source Steps:** 68–77
- **Key Concepts:** `Routes`, `:id` params, query params, `**` wildcard, `loadChildren`, `CanActivateFn`, `CanDeactivateFn`, lazy chunk download

### Exercise 08 — HTTP Client & Interceptors ✅
- **Level:** Advanced | **Time:** 60 min
- **Source Steps:** 78–91
- **Key Concepts:** `HttpClient`, cold Observables, `map/tap/catchError/retry/switchMap`, `req.clone()`, `finalize`, `BehaviorSubject`

### Exercise 09 — NgRx State Management ✅
- **Level:** Advanced | **Time:** 60 min
- **Source Steps:** 92–100
- **Key Concepts:** `createAction/props`, `createReducer/on`, `createSelector`, memoisation, `createEffect/ofType`, pure reducers, cross-slice selectors

### Exercise 10 — Unit Testing ✅
- **Level:** Advanced | **Time:** 60 min
- **Source Steps:** 101–110
- **Key Concepts:** `TestBed`, `ComponentFixture`, `fixture.detectChanges()`, `By.css()`, `spyOn`, `HttpClientTestingModule`, `HttpTestingController.verify()`, `MockStore`

---

## 🎯 Learning Outcomes

After completing all 10 exercises, you will be able to:

1. ✅ Scaffold and configure an Angular workspace using Angular CLI
2. ✅ Use all four Angular binding types and lifecycle hooks
3. ✅ Apply structural/attribute directives and build custom directives and pipes
4. ✅ Build template-driven and reactive forms with validation
5. ✅ Create Angular services, understand the DI hierarchy, and use singleton and component-scoped providers
6. ✅ Configure routing with dynamic params, lazy loading, and route guards
7. ✅ Integrate with REST APIs using HttpClient, RxJS operators, and interceptors
8. ✅ Implement NgRx for scalable state management with actions, reducers, selectors, and effects
9. ✅ Write unit tests for components and services using Jasmine, Karma, and TestBed

---

> 💡 **Tip:** All 10 exercises build one project — `student-course-portal`. Run `ng serve` from the project root to see the complete application. Start JSON Server with `json-server --watch db.json --port 3000` for Exercise 08+ HTTP integration.
