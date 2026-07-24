# Exercise 04 — Git Conflict Resolution

## 🎯 Objectives
- Understand merge conflicts in Git
- Implement conflict resolution when multiple users update the same file differently on different branches
- Use 3-way merge tool (P4Merge) to visually resolve conflicts
- Commit the resolved changes

---

## ⏱️ Estimated Time
**30 minutes**

---

## 📋 Prerequisites
- Completed **Exercise 03** (Branching & Merging)
- P4Merge tool installed and configured

---

## 🔢 Steps

### Step 1 — Verify Master is in Clean State
```bash
git status
git log --oneline
```
Expected: `nothing to commit, working tree clean`

---

### Step 2 — Create a Branch `GitWork`
```bash
git branch GitWork
git checkout GitWork
```
Or using single command:
```bash
git checkout -b GitWork
```

---

### Step 3 — Add `hello.xml` on the Branch

#### 3.1 Create the File
```bash
touch hello.xml
notepad++ hello.xml
```

Add this content to `hello.xml` (branch version):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<hello>
    <message>Hello from GitWork Branch!</message>
    <author>Branch Developer</author>
    <version>1.0</version>
</hello>
```

#### 3.2 Check Status
```bash
git status
```

#### 3.3 Stage and Commit on Branch
```bash
git add hello.xml
git commit -m "Add hello.xml on GitWork branch"
```

---

### Step 4 — Switch to Master and Create a Different `hello.xml`

#### 4.1 Switch to Master
```bash
git checkout master
```

#### 4.2 Add `hello.xml` with Different Content
```bash
notepad++ hello.xml
```

Add **different** content to `hello.xml` (master version):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<hello>
    <message>Hello from Master Branch!</message>
    <author>Master Developer</author>
    <version>2.0</version>
</hello>
```

#### 4.3 Commit on Master
```bash
git add hello.xml
git commit -m "Add hello.xml on master with different content"
```

---

### Step 5 — Observe Diverged History
```bash
git log --oneline --graph --decorate --all
```
Expected: Both `master` and `GitWork` show diverging commits.

---

### Step 6 — Compare Differences

#### 6.1 CLI Diff
```bash
git diff master GitWork
```

#### 6.2 Visual Diff (P4Merge)
```bash
git difftool master GitWork
```

---

### Step 7 — Merge Branch into Master (Triggers Conflict)
```bash
git merge GitWork
```

Git will report a **CONFLICT**:
```
CONFLICT (add/add): Merge conflict in hello.xml
Automatic merge failed; fix conflicts then commit the result.
```

---

### Step 8 — Observe the Conflict Markup

Open `hello.xml` — Git has inserted conflict markers:
```xml
<<<<<<< HEAD
    <message>Hello from Master Branch!</message>
    <author>Master Developer</author>
    <version>2.0</version>
=======
    <message>Hello from GitWork Branch!</message>
    <author>Branch Developer</author>
    <version>1.0</version>
>>>>>>> GitWork
```

---

### Step 9 — Resolve with 3-Way Merge Tool (P4Merge)
```bash
git mergetool
```
P4Merge opens with:
- **Left panel**: Master version (HEAD)
- **Right panel**: Branch version (GitWork)
- **Bottom panel**: Merged result

Choose the correct resolution, save, and close P4Merge.

---

### Step 10 — Commit the Resolved Changes
```bash
git status
git add hello.xml
git commit -m "Resolve merge conflict between master and GitWork in hello.xml"
```

---

### Step 11 — Update `.gitignore` for Backup Files
After using `git mergetool`, Git creates backup files (`*.orig`). Add them to `.gitignore`:
```bash
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Add *.orig to .gitignore after merge conflict resolution"
```

---

### Step 12 — Cleanup
```bash
git branch -a
git branch -d GitWork
git log --oneline --graph --decorate
```

---

## ✅ Key Commands Reference

| Command | Description |
|---------|-------------|
| `git checkout -b <branch>` | Create and switch to new branch |
| `git merge <branch>` | Merge branch into current branch |
| `git diff master <branch>` | Show differences between branches |
| `git difftool master <branch>` | Visual diff with P4Merge |
| `git mergetool` | Launch 3-way merge tool |
| `git log --oneline --graph --decorate --all` | Full decorated commit log |
| `git branch -d <branch>` | Delete merged branch |

---

## 📁 Files in This Exercise
- `hello.xml` — File with conflicting content between master and branch
- `output.md` — Expected command outputs with conflict markers

---

## 🔀 Conflict Flow Diagram

```
master ──●──[hello.xml v2.0]────────────────●── (resolved merge)
          \                                 /
GitWork    ●──[hello.xml v1.0]─────────────
           (different content → CONFLICT)
```

---

> **Tip:** Always run `git status` after resolving conflicts to ensure all files are properly staged before committing.
