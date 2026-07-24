# 📊 GIT Hands-On Labs (HOL) — Exercise Status

> **Repository Path:** `C:\Digital-Nurture-JavaFSE-main\Java FSE\Deepskilling\GIT`  
> **Last Updated:** 2026-07-24  
> **Total Exercises:** 5

---

## 🗂️ Exercise Status Table

| # | Exercise | Topic | HOL Doc | Status | Files Created | Output Doc |
|---|----------|-------|---------|--------|---------------|------------|
| 1 | [Exercise-01-GitSetup](./Exercise-01-GitSetup/) | Git Setup, Configuration, Init, Add, Commit, Push & Pull | `1. Git-HOL.docx` | ✅ **Completed** | `README.md`, `welcome.txt`, `output.md` | [output.md](./Exercise-01-GitSetup/output.md) |
| 2 | [Exercise-02-GitIgnore](./Exercise-02-GitIgnore/) | Git Ignore — Exclude `.log` files & `log/` folder | `2. Git-HOL.docx` | ✅ **Completed** | `README.md`, `.gitignore`, `sample.log`, `log/`, `output.md` | [output.md](./Exercise-02-GitIgnore/output.md) |
| 3 | [Exercise-03-BranchingMerging](./Exercise-03-BranchingMerging/) | Branching & Merging (`GitNewBranch` → master, P4Merge) | `3. Git-HOL.docx` | ✅ **Completed** | `README.md`, `feature.txt`, `output.md` | [output.md](./Exercise-03-BranchingMerging/output.md) |
| 4 | [Exercise-04-ConflictResolution](./Exercise-04-ConflictResolution/) | Conflict Resolution (3-way merge, P4Merge, `.orig` cleanup) | `4. Git-HOL.docx` | ✅ **Completed** | `README.md`, `hello.xml`, `output.md` | [output.md](./Exercise-04-ConflictResolution/output.md) |
| 5 | [Exercise-05-CleanupPush](./Exercise-05-CleanupPush/) | Cleanup & Push Back to Remote Git | `5. Git-HOL.docx` | ✅ **Completed** | `README.md`, `output.md` | [output.md](./Exercise-05-CleanupPush/output.md) |

---

## 📁 Final Folder Structure

```
GIT/
├── 1. Git-HOL.docx                         ← Original HOL document
├── 2. Git-HOL.docx                         ← Original HOL document
├── 3. Git-HOL.docx                         ← Original HOL document
├── 4. Git-HOL.docx                         ← Original HOL document
├── 5. Git-HOL.docx                         ← Original HOL document
├── STATUS.md                               ← This file (master status tracker)
│
├── Exercise-01-GitSetup/
│   ├── README.md                           ← Step-by-step instructions
│   ├── welcome.txt                         ← First committed file
│   └── output.md                           ← Expected terminal outputs
│
├── Exercise-02-GitIgnore/
│   ├── README.md                           ← Step-by-step instructions
│   ├── .gitignore                          ← Ignore rules (*.log, log/)
│   ├── sample.log                          ← Example ignored .log file
│   ├── log/
│   │   ├── README.txt                      ← Documents the log folder
│   │   └── server.log                      ← Example ignored log file
│   └── output.md                           ← Expected terminal outputs
│
├── Exercise-03-BranchingMerging/
│   ├── README.md                           ← Step-by-step instructions
│   ├── feature.txt                         ← File created on GitNewBranch
│   └── output.md                           ← Expected terminal outputs
│
├── Exercise-04-ConflictResolution/
│   ├── README.md                           ← Step-by-step instructions
│   ├── hello.xml                           ← Conflict-resolved XML file
│   └── output.md                           ← Expected terminal outputs (with conflict markers)
│
└── Exercise-05-CleanupPush/
    ├── README.md                           ← Step-by-step instructions
    └── output.md                           ← Expected terminal outputs
```

---

## 📝 Exercise Details

### Exercise 01 — Git Setup ✅
- **Source Doc:** `1. Git-HOL.docx`
- **Estimated Time:** 30 minutes
- **Key Commands:** `git init`, `git status`, `git add`, `git commit`, `git push`, `git pull`
- **Key Concepts:** Global git config, notepad++ editor integration, first repository creation

### Exercise 02 — Git Ignore ✅
- **Source Doc:** `2. Git-HOL.docx`
- **Estimated Time:** 20 minutes
- **Key Commands:** `.gitignore`, `git ls-files --ignored`, `git check-ignore -v`
- **Key Concepts:** Pattern matching (`*.log`, `log/`), `.gitignore` rules

### Exercise 03 — Branching & Merging ✅
- **Source Doc:** `3. Git-HOL.docx`
- **Estimated Time:** 30 minutes
- **Key Commands:** `git branch`, `git checkout`, `git merge`, `git difftool`, `git log --graph`
- **Key Concepts:** Branch creation, fast-forward merge, P4Merge visual diff, branch deletion

### Exercise 04 — Conflict Resolution ✅
- **Source Doc:** `4. Git-HOL.docx`
- **Estimated Time:** 30 minutes
- **Key Commands:** `git merge` (conflict), `git mergetool`, `git log --graph --all`
- **Key Concepts:** Merge conflicts, conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), 3-way merge, `.orig` cleanup

### Exercise 05 — Cleanup & Push ✅
- **Source Doc:** `5. Git-HOL.docx`
- **Estimated Time:** 10 minutes
- **Key Commands:** `git pull`, `git push`, `git branch -a`, `git status`
- **Key Concepts:** Remote synchronisation, clean state verification, pushing accumulated commits

---

## 🎯 Learning Outcomes

After completing all 5 exercises, you will be able to:

1. ✅ Set up and configure Git on a new machine
2. ✅ Integrate external editors (Notepad++) with Git
3. ✅ Track files using `git add`, `git commit`, `git push`, `git pull`
4. ✅ Use `.gitignore` to exclude unwanted files from version control
5. ✅ Create and manage branches for parallel development
6. ✅ Perform branch merges (fast-forward and true merges)
7. ✅ Identify, visualize, and resolve merge conflicts
8. ✅ Use P4Merge for visual diff and 3-way merge conflict resolution
9. ✅ Maintain a clean repository and push changes to a remote

---

> 💡 **Tip:** Each exercise builds on the previous one. Complete them in order for the best learning experience.
