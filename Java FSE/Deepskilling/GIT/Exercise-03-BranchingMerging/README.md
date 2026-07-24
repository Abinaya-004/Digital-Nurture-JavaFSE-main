# Exercise 03 — Git Branching and Merging

## 🎯 Objectives
- Create a new Git branch
- Make changes on the branch and commit them
- Merge the branch back into `master`
- Use P4Merge for visual diff comparison
- Clean up by deleting merged branches

---

## ⏱️ Estimated Time
**30 minutes**

---

## 📋 Prerequisites
- Completed **Exercise 01** (Git environment setup)
- **P4Merge** tool installed and configured for Windows

---

## 🔢 Steps

### Step 1 — Branching

#### 1.1 Verify Current Branch (master/main)
```bash
git status
git branch
```

#### 1.2 Create a New Branch `GitNewBranch`
```bash
git branch GitNewBranch
```

#### 1.3 List All Local and Remote Branches
```bash
git branch -a
```
> 💡 The `*` marks the **currently active** branch.

#### 1.4 Switch to the New Branch
```bash
git checkout GitNewBranch
```
Or using modern syntax:
```bash
git switch GitNewBranch
```

#### 1.5 Add Files to the New Branch
```bash
echo "Feature developed in GitNewBranch" > feature.txt
echo "Additional content for the branch"  >> feature.txt
```

#### 1.6 Stage and Commit Changes on the Branch
```bash
git add feature.txt
git commit -m "Add feature.txt in GitNewBranch"
```

#### 1.7 Check Status on the Branch
```bash
git status
git log --oneline
```

---

### Step 2 — Merging

#### 2.1 Switch Back to Master
```bash
git checkout master
```

#### 2.2 List Differences Between Master and Branch (CLI)
```bash
git diff master GitNewBranch
```

#### 2.3 Visual Diff Using P4Merge Tool
```bash
git difftool master GitNewBranch
```
P4Merge opens showing a side-by-side visual diff.

#### 2.4 Merge `GitNewBranch` into Master
```bash
git merge GitNewBranch
```

#### 2.5 Observe the Merge Log
```bash
git log --oneline --graph --decorate
```

#### 2.6 Delete the Branch After Merging
```bash
git branch -d GitNewBranch
```

#### 2.7 Verify Branch Was Deleted
```bash
git branch -a
```

#### 2.8 Final Status Check
```bash
git status
git log --oneline --graph --decorate
```

---

## ✅ Key Commands Reference

| Command | Description |
|---------|-------------|
| `git branch <name>` | Create a new branch |
| `git branch -a` | List all local and remote branches |
| `git checkout <branch>` | Switch to a branch |
| `git switch <branch>` | Switch to a branch (modern syntax) |
| `git diff master <branch>` | Show CLI diff between branches |
| `git difftool master <branch>` | Show visual diff (P4Merge) |
| `git merge <branch>` | Merge branch into current branch |
| `git log --oneline --graph --decorate` | Show decorated commit graph |
| `git branch -d <branch>` | Delete a merged branch |

---

## 📁 Files in This Exercise
- `feature.txt` — File created on the feature branch
- `output.md` — Expected command outputs

---

## 🔀 Branch Flow Diagram

```
master ──●──────────────────────●── (merge commit)
          \                    /
           ●──●──● GitNewBranch
           (feature.txt added)
```

---

> **Tip:** Use `git log --oneline --graph --decorate --all` to see the full branch graph including deleted/remote branches.
