# Output — Exercise 05: Git Cleanup and Push to Remote

This document shows the **expected terminal output** for each command in Exercise 05.

---

## Step 1 — Verify Master is in Clean State

```bash
$ git checkout master
```
```
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 4 commits.
```

```bash
$ git status
```
```
On branch master
Your branch is ahead of 'origin/master' by 4 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```
> ✅ Working tree is clean — no uncommitted changes.

---

## Step 2 — List All Available Branches

```bash
$ git branch -a
```
```
* master
  remotes/origin/master
```
> ✅ `GitNewBranch` and `GitWork` have both been deleted (merged in previous exercises).

---

## Step 3 — Pull from Remote Repository

```bash
$ git pull origin master
```
```
From https://github.com/<your-username>/GitDemo
 * branch            master     -> FETCH_HEAD
Already up to date.
```
> ✅ Local master is already in sync with remote.  
> If remote had new commits, output would show:
> ```
> Updating c3d4e5f..z9y8x7w
> Fast-forward
>  some-file.txt | 1 +
>  1 file changed, 1 insertion(+)
> ```

---

## Step 4 — Push Pending Changes to Remote

```bash
$ git push origin master
```
```
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (14/14), 1.52 KiB | 1.52 MiB/s, done.
Total 14 (delta 2), reused 0 (delta 0), pack-reused 0
To https://github.com/<your-username>/GitDemo.git
   a1b2c3d..a7b8c9d  master -> master
```
> ✅ All local commits from Exercises 01–04 are now pushed to remote!

---

## Step 5 — Verify on Remote (CLI)

```bash
$ git log --oneline --graph --decorate origin/master
```
```
*   f6a7b8c (HEAD -> master, origin/master) Resolve merge conflict between master and GitWork in hello.xml
|\
| * d4e5f6a Add hello.xml on GitWork branch
* | e5f6a7b Add hello.xml on master with different content
|/
* c3d4e5f Add feature.txt in GitNewBranch
* b2c3d4e Add .gitignore to exclude .log files and log directory
* a1b2c3d Initial commit: add welcome.txt
```
> ✅ `origin/master` is now at the same commit as `HEAD -> master`.

---

## Step 6 — Final Status Verification

```bash
$ git status
```
```
On branch master
Your branch is up to date with 'origin/master'.
nothing to commit, working tree clean
```

```bash
$ git log --oneline --graph --decorate
```
```
*   f6a7b8c (HEAD -> master, origin/master) Resolve merge conflict between master and GitWork in hello.xml
|\
| * d4e5f6a Add hello.xml on GitWork branch
* | e5f6a7b Add hello.xml on master with different content
|/
* c3d4e5f Add feature.txt in GitNewBranch
* b2c3d4e Add .gitignore to exclude .log files and log directory
* a1b2c3d Initial commit: add welcome.txt
```

---

## 📦 Final Repository State

All files now tracked in master and synced to remote:

```bash
$ git ls-files
```
```
.gitignore
feature.txt
hello.xml
welcome.txt
```

---

## 🎉 All 5 Exercises Complete!

**Complete commit history summary:**

| Commit Hash | Message | Exercise |
|-------------|---------|----------|
| `a1b2c3d` | Initial commit: add welcome.txt | Exercise 01 |
| `b2c3d4e` | Add .gitignore to exclude .log files and log directory | Exercise 02 |
| `c3d4e5f` | Add feature.txt in GitNewBranch | Exercise 03 |
| `e5f6a7b` | Add hello.xml on master with different content | Exercise 04 |
| `d4e5f6a` | Add hello.xml on GitWork branch | Exercise 04 |
| `f6a7b8c` | Resolve merge conflict between master and GitWork | Exercise 04 |
| `a7b8c9d` | Add *.orig to .gitignore after merge conflict resolution | Exercise 04 |

---

## ✅ Exercise 05 Complete!

**Summary of what was accomplished:**
- ✔ Verified master was in a clean state
- ✔ Listed all branches — confirmed no leftover branches
- ✔ Pulled from remote to ensure sync
- ✔ Pushed all pending changes from Exercises 01–04 to remote
- ✔ Verified the changes are reflected in the remote repository
- ✔ Final `git status` shows `up to date` — clean slate
