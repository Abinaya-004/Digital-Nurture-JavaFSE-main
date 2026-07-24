# Exercise 05 — Git Cleanup and Push to Remote

## 🎯 Objectives
- Verify master is in a clean state
- List all available branches
- Pull from the remote repository to keep master up to date
- Push pending changes to the remote repository
- Verify the changes are reflected remotely

---

## ⏱️ Estimated Time
**10 minutes**

---

## 📋 Prerequisites
- Completed **Exercise 04** (Conflict Resolution)
- Access to remote repository (GitHub/GitLab)

---

## 🔢 Steps

### Step 1 — Verify Master is in Clean State
```bash
git checkout master
git status
```
Expected output:
```
On branch master
nothing to commit, working tree clean
```

If there are uncommitted changes, commit or stash them first:
```bash
git stash
```
or
```bash
git add .
git commit -m "Cleanup: commit pending changes before push"
```

---

### Step 2 — List All Available Branches
```bash
git branch -a
```
Expected output shows local and remote branches:
```
* master
  remotes/origin/master
```

> Any branches that were merged in Exercise 03 and 04 should already be deleted. If not, clean them up:
```bash
git branch -d GitWork
git branch -d GitNewBranch
```

---

### Step 3 — Pull from Remote Repository
```bash
git pull origin master
```
This ensures local master is in sync with the remote before pushing.

Expected output (if already in sync):
```
Already up to date.
```

Or if there are remote changes:
```
Updating abc1234..def5678
Fast-forward
 <changed files>
```

---

### Step 4 — Push Pending Changes to Remote Repository

Push all local commits (from Exercises 01–04) to the remote:
```bash
git push origin master
```

Expected output:
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
Delta compression using up to N threads
Compressing objects: 100% (X/X), done.
Writing objects: 100% (X/X), done.
Total X (delta X), reused 0 (delta 0), pack-reused 0
To https://github.com/<username>/GitDemo.git
   abc1234..def5678  master -> master
```

---

### Step 5 — Verify Changes on Remote Repository

#### 5.1 Open Your GitHub/GitLab Repository in a Browser
Navigate to: `https://github.com/<your-username>/GitDemo`

#### 5.2 Verify the Following Files Exist on Remote:
- `welcome.txt` (from Exercise 01)
- `.gitignore` (from Exercise 02)
- `feature.txt` (from Exercise 03, merged into master)
- `hello.xml` (from Exercise 04, resolved conflict)

#### 5.3 Check Remote via CLI
```bash
git log --oneline --graph --decorate origin/master
```

---

### Step 6 — Final Status Verification
```bash
git status
git log --oneline --graph --decorate
```

Expected final state:
```
On branch master
Your branch is up to date with 'origin/master'.
nothing to commit, working tree clean
```

---

## ✅ Key Commands Reference

| Command | Description |
|---------|-------------|
| `git status` | Verify working directory is clean |
| `git branch -a` | List all local and remote branches |
| `git pull origin master` | Pull latest changes from remote |
| `git push origin master` | Push local commits to remote |
| `git stash` | Temporarily stash uncommitted changes |
| `git log --oneline --graph --decorate` | View commit history |

---

## 📋 Complete Exercise Summary

After completing all 5 exercises, your Git repository should contain:

| File | Added In | Purpose |
|------|----------|---------|
| `welcome.txt` | Exercise 01 | First file committed to repo |
| `.gitignore` | Exercise 02 | Excludes `.log` files and `log/` folder |
| `feature.txt` | Exercise 03 | Feature file from `GitNewBranch`, merged to master |
| `hello.xml` | Exercise 04 | Conflict-resolved file from `GitWork` merge |

---

## 🔄 Full Workflow Summary

```
[Init] → [Add file] → [Commit] → [Push]    (Exercise 01)
                                    ↓
                              [.gitignore]  (Exercise 02)
                                    ↓
                          [Branch → Merge]  (Exercise 03)
                                    ↓
                       [Conflict → Resolve] (Exercise 04)
                                    ↓
                          [Cleanup → Push]  (Exercise 05)
```

---

> **Best Practice:** Always `git pull` before `git push` to avoid rejection due to remote changes made by other contributors.
