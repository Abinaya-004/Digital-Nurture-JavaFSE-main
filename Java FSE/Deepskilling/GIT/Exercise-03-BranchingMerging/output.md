# Output — Exercise 03: Git Branching and Merging

This document shows the **expected terminal output** for each command in Exercise 03.

---

## Step 1.1 — Verify Current Branch

```bash
$ git status
```
```
On branch master
nothing to commit, working tree clean
```

```bash
$ git branch
```
```
* master
```

---

## Step 1.2 — Create GitNewBranch

```bash
$ git branch GitNewBranch
```
*(No output — branch created silently)*

---

## Step 1.3 — List All Branches

```bash
$ git branch -a
```
```
  GitNewBranch
* master
  remotes/origin/master
```
> 💡 The `*` beside `master` indicates it is the **currently active** branch.

---

## Step 1.4 — Switch to GitNewBranch

```bash
$ git checkout GitNewBranch
```
```
Switched to branch 'GitNewBranch'
```

```bash
$ git branch
```
```
* GitNewBranch
  master
```
> 💡 Now `*` is beside `GitNewBranch`.

---

## Step 1.5 — Add Files to the Branch

```bash
$ echo "Feature developed in GitNewBranch" > feature.txt
$ echo "Additional content for the branch"  >> feature.txt
$ cat feature.txt
```
```
Feature developed in GitNewBranch
Additional content for the branch
```

---

## Step 1.6 — Stage and Commit on Branch

```bash
$ git add feature.txt
$ git commit -m "Add feature.txt in GitNewBranch"
```
```
[GitNewBranch c3d4e5f] Add feature.txt in GitNewBranch
 1 file changed, 2 insertions(+)
 create mode 100644 feature.txt
```

---

## Step 1.7 — Check Status on Branch

```bash
$ git status
```
```
On branch GitNewBranch
nothing to commit, working tree clean
```

```bash
$ git log --oneline
```
```
c3d4e5f (HEAD -> GitNewBranch) Add feature.txt in GitNewBranch
b2c3d4e (master, origin/master) Add .gitignore to exclude .log files and log directory
a1b2c3d Initial commit: add welcome.txt
```

---

## Step 2.1 — Switch Back to Master

```bash
$ git checkout master
```
```
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
```

---

## Step 2.2 — List Differences (CLI)

```bash
$ git diff master GitNewBranch
```
```
diff --git a/feature.txt b/feature.txt
new file mode 100644
index 0000000..d1e2f3a
--- /dev/null
+++ b/feature.txt
@@ -0,0 +1,2 @@
+Feature developed in GitNewBranch
+Additional content for the branch
```

---

## Step 2.3 — Visual Diff (P4Merge)

```bash
$ git difftool master GitNewBranch
```
```
Viewing (1/1): 'feature.txt'
Launch 'p4merge' [Y/n]? Y
```
> P4Merge opens showing left (master: empty) vs. right (GitNewBranch: feature.txt content)

---

## Step 2.4 — Merge GitNewBranch into Master

```bash
$ git merge GitNewBranch
```
```
Updating b2c3d4e..c3d4e5f
Fast-forward
 feature.txt | 2 ++
 1 file changed, 2 insertions(+)
 create mode 100644 feature.txt
```
> ✅ **Fast-forward merge** — no conflicts since master hadn't diverged.

---

## Step 2.5 — Observe the Merge Log

```bash
$ git log --oneline --graph --decorate
```
```
* c3d4e5f (HEAD -> master, GitNewBranch) Add feature.txt in GitNewBranch
* b2c3d4e (origin/master) Add .gitignore to exclude .log files and log directory
* a1b2c3d Initial commit: add welcome.txt
```

---

## Step 2.6 — Delete the Branch

```bash
$ git branch -d GitNewBranch
```
```
Deleted branch GitNewBranch (was c3d4e5f).
```

---

## Step 2.7 — Verify Branch Deletion

```bash
$ git branch -a
```
```
* master
  remotes/origin/master
```
> ✅ `GitNewBranch` no longer appears in the list.

---

## Step 2.8 — Final Status

```bash
$ git status
```
```
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
nothing to commit, working tree clean
```

```bash
$ git log --oneline --graph --decorate
```
```
* c3d4e5f (HEAD -> master) Add feature.txt in GitNewBranch
* b2c3d4e (origin/master) Add .gitignore to exclude .log files and log directory
* a1b2c3d Initial commit: add welcome.txt
```

---

## ✅ Exercise 03 Complete!

**Summary of what was accomplished:**
- ✔ Created `GitNewBranch` and listed all branches
- ✔ Switched to new branch and added `feature.txt`
- ✔ Staged and committed changes on the branch
- ✔ Switched back to master and viewed CLI + visual diff
- ✔ Merged `GitNewBranch` into master (fast-forward)
- ✔ Deleted `GitNewBranch` after successful merge
- ✔ Verified the clean state with `git log --oneline --graph --decorate`
