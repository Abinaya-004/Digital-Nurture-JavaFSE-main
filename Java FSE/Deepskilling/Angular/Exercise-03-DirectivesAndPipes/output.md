# Output — Exercise 03: Directives & Pipes

## Task 1 — Loading State (1.5 second delay)

```
t=0ms:   Loading courses...  (isLoading=true, *ngIf shows loading div)
t=1500ms: [course grid renders] (isLoading=false, *ngFor renders 5 cards)
```

## Task 1 — *ngSwitch Grade Badges

| gradeStatus | Rendered Badge |
|-------------|----------------|
| `'passed'`  | ✓ Passed (green) |
| `'failed'`  | ✗ Failed (red) |
| `'pending'` | ⏳ Pending (grey) |

## Task 2 — ngClass Object Binding

```
course.credits = 4 AND enrolled = true  →  classes: "card--enrolled card--full"
course.credits = 3 AND enrolled = false →  classes: ""  (no extra classes)
isExpanded = true                        →  classes: "expanded"
```

## Task 3 — CreditLabel Pipe

| Input | Output |
|-------|--------|
| `1` | `'1 Credit'` |
| `3` | `'3 Credits'` |
| `null` | `'No Credits'` |
| `0` | `'No Credits'` |

## Task 3 — Highlight Directive

```
# Mouse enters course card:
card background → rgba(254, 240, 138, 0.5) (yellow)

# Mouse leaves:
background → removed (transparent)

# Custom colour: appHighlight="lightblue"
card background → lightblue on hover
```

## ✅ Exercise 03 Complete!
- ✔ Loading spinner shown for 1.5s, then course grid appears
- ✔ trackBy implemented — performance optimised
- ✔ ngSwitch renders correct grade badge
- ✔ ngClass toggles enrolled/full/expanded CSS classes
- ✔ ngStyle sets left border colour from gradeStatus
- ✔ Custom directive adds hover highlight
- ✔ Custom pipe transforms credits to readable string
