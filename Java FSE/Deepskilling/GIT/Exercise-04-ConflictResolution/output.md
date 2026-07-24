# Output — Exercise 04: Git Conflict Resolution

This document shows the **expected terminal output** for each command in Exercise 04, including conflict markers and resolution steps.

---

## Step 1 — Verify Master is Clean

```bash
$ git status
```
```
On branch master
nothing to commit, working tree clean
```

```bash
$ git log --oneline
```
```
c3d4e5f (HEAD -> master, origin/master) Add feature.txt in GitNewBranch
b2c3d4e Add .gitignore to exclude .log files and log directory
a1b2c3d Initial commit: add welcome.txt
```

---

## Step 2 — Create and Switch to GitWork Branch

```bash
$ git checkout -b GitWork
```
```
Switched to a new branch 'GitWork'
```

---

## Step 3 — Add hello.xml on GitWork Branch

```bash
$ git add hello.xml
$ git status
```
```
On branch GitWork
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   hello.xml
```

```bash
$ git commit -m "Add hello.xml on GitWork branch"
```
```
[GitWork d4e5f6a] Add hello.xml on GitWork branch
 1 file changed, 8 insertions(+)
 create mode 100644 hello.xml
```

---

## Step 4 — Switch to Master and Add Different hello.xml

```bash
$ git checkout master
```
```
Switched to branch 'master'
```

```bash
$ git add hello.xml
$ git commit -m "Add hello.xml on master with different content"
```
```
[master e5f6a7b] Add hello.xml on master with different content
 1 file changed, 8 insertions(+)
 create mode 100644 hello.xml
```

---

## Step 5 — Observe Diverged History

```bash
$ git log --oneline --graph --decorate --all
```
```
* e5f6a7b (HEAD -> master) Add hello.xml on master with different content
| * d4e5f6a (GitWork) Add hello.xml on GitWork branch
|/
* c3d4e5f (origin/master) Add feature.txt in GitNewBranch
* b2c3d4e Add .gitignore to exclude .log files and log directory
* a1b2c3d Initial commit: add welcome.txt
```
> 💡 The diverging `*` paths show that master and GitWork have different commits.

---

## Step 6 — CLI Diff Between Branches

```bash
$ git diff master GitWork
```
```
diff --git a/hello.xml b/hello.xml
index 1234abc..5678def 100644
--- a/hello.xml
+++ b/hello.xml
@@ -2,8 +2,8 @@
 <hello>
-    <message>Hello from Master Branch!</message>
-    <author>Master Developer</author>
-    <version>2.0</version>
+    <message>Hello from GitWork Branch!</message>
+    <author>Branch Developer</author>
+    <version>1.0</version>
 </hello>
```

---

## Step 7 — Merge GitWork into Master (CONFLICT!)

```bash
$ git merge GitWork
```
```
Auto-merging hello.xml
CONFLICT (add/add): Merge conflict in hello.xml
Automatic merge failed; fix conflicts then commit the result.
```
> 🔴 **CONFLICT detected** — Git could not automatically merge `hello.xml`.

---

## Step 8 — View Conflict Markers in hello.xml

```bash
$ cat hello.xml
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<hello>
<<<<<<< HEAD
    <message>Hello from Master Branch!</message>
    <author>Master Developer</author>
    <version>2.0</version>
=======
    <message>Hello from GitWork Branch!</message>
    <author>Branch Developer</author>
    <version>1.0</version>
>>>>>>> GitWork
</hello>
```
> 📌 Conflict markers explained:
> - `<<<<<<< HEAD` — Start of current branch (master) content
> - `=======` — Separator between conflicting sections
> - `>>>>>>> GitWork` — End of incoming branch (GitWork) content

---

## Step 9 — Launch 3-Way Merge Tool (P4Merge)

```bash
$ git mergetool
```
```
Merging:
hello.xml

Normal merge conflict for 'hello.xml':
  {local}: modified file
  {remote}: modified file
Hit return to start merge resolution tool (p4merge):
```
> P4Merge opens with 3 panels:
> - **Left (LOCAL)**: Master's version
> - **Right (REMOTE)**: GitWork's version  
> - **Bottom (MERGED)**: The resolved result you edit

After resolving in P4Merge, save and close the tool.

---

## Step 10 — Commit the Resolved Changes

```bash
$ git status
```
```
On branch master
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   hello.xml

Untracked files:
        hello.xml.orig
```

```bash
$ git add hello.xml
$ git commit -m "Resolve merge conflict between master and GitWork in hello.xml"
```
```
[master f6a7b8c] Resolve merge conflict between master and GitWork in hello.xml
```

---

## Step 11 — Add *.orig to .gitignore

```bash
$ echo "*.orig" >> .gitignore
$ git add .gitignore
$ git commit -m "Add *.orig to .gitignore after merge conflict resolution"
```
```
[master a7b8c9d] Add *.orig to .gitignore after merge conflict resolution
 1 file changed, 1 insertion(+)
```

---

## Step 12 — Final Cleanup

```bash
$ git branch -a
```
```
* master
  GitWork
  remotes/origin/master
```

```bash
$ git branch -d GitWork
```
```
Deleted branch GitWork (was d4e5f6a).
```

```bash
$ git log --oneline --graph --decorate
```
```
*   f6a7b8c (HEAD -> master) Resolve merge conflict between master and GitWork in hello.xml
|\
| * d4e5f6a Add hello.xml on GitWork branch
* | e5f6a7b Add hello.xml on master with different content
|/
* c3d4e5f (origin/master) Add feature.txt in GitNewBranch
* b2c3d4e Add .gitignore to exclude .log files and log directory
* a1b2c3d Initial commit: add welcome.txt
```
> ✅ The `*` merge commit shows the conflict was successfully resolved and merged.

---

## ✅ Exercise 04 Complete!

**Summary of what was accomplished:**
- ✔ Verified master was in a clean state
- ✔ Created `GitWork` branch with `hello.xml` (branch version)
- ✔ Created conflicting `hello.xml` on master with different content
- ✔ Observed diverged commit history with `--graph`
- ✔ Attempted merge → CONFLICT detected in `hello.xml`
- ✔ Observed Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
- ✔ Used P4Merge 3-way tool to resolve the conflict
- ✔ Committed the resolved result
- ✔ Added `*.orig` backup files to `.gitignore`
- ✔ Deleted `GitWork` branch after successful merge
