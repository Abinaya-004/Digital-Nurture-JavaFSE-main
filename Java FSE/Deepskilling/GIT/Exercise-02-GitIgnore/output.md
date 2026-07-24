# Output — Exercise 02: Git Ignore

This document shows the **expected terminal output** for each command in Exercise 02.

---

## Step 1.1 — Create .log Files

```bash
$ echo "Application log entry 1" > app.log
$ echo "Error log entry 2" > error.log
```
*(No output)*

---

## Step 1.2 — Create log Directory

```bash
$ mkdir log
$ echo "Log folder entry 1" > log/server.log
$ echo "Log folder entry 2" > log/debug.log
```
*(No output)*

---

## Step 1.3 — Git Status BEFORE .gitignore

```bash
$ git status
```
```
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        app.log
        error.log
        log/

nothing added to commit but untracked files present (use "git add" to track)
```
> 🔴 `app.log`, `error.log`, and `log/` are visible as untracked files.

---

## Step 2.2 — Create and Populate .gitignore

```bash
$ cat .gitignore
```
```
# Ignore all .log files
*.log

# Ignore the log directory and its contents
log/

# Ignore temp files
*.tmp
*.bak
*.swp
```

---

## Step 3.1 — Git Status AFTER .gitignore

```bash
$ git status
```
```
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore

nothing added to commit but untracked files present (use "git add" to track)
```
> ✅ `app.log`, `error.log`, and `log/` are now **gone from the output** — they are being ignored!

---

## Step 3.2 — Stage and Commit .gitignore

```bash
$ git add .gitignore
$ git commit -m "Add .gitignore to exclude .log files and log directory"
```
```
[master b2c3d4e] Add .gitignore to exclude .log files and log directory
 1 file changed, 9 insertions(+)
 create mode 100644 .gitignore
```

---

## Step 3.3 — Final Status Check

```bash
$ git status
```
```
On branch master
nothing to commit, working tree clean
```

---

## Step 3.4 — List All Ignored Files

```bash
$ git ls-files --ignored --exclude-standard
```
```
app.log
error.log
log/debug.log
log/server.log
```
> ✅ All `.log` files and files inside `log/` are confirmed as ignored.

---

## Bonus — Check Why a Specific File is Ignored

```bash
$ git check-ignore -v app.log
```
```
.gitignore:2:*.log      app.log
```
> This tells us `app.log` is ignored by rule `*.log` on line 2 of `.gitignore`.

```bash
$ git check-ignore -v log/server.log
```
```
.gitignore:5:log/       log/server.log
```
> This tells us `log/server.log` is ignored by rule `log/` on line 5 of `.gitignore`.

---

## ✅ Exercise 02 Complete!

**Summary of what was accomplished:**
- ✔ Created `.log` files and `log/` directory in the working directory
- ✔ Observed that Git detects them as untracked files
- ✔ Created `.gitignore` with rules to exclude `*.log` and `log/`
- ✔ Verified that Git now ignores those files in `git status`
- ✔ Committed `.gitignore` to the repository
