# Exercise 02 — Git Ignore

## 🎯 Objectives
- Understand and implement `.gitignore` to exclude unwanted files and folders
- Ignore `.log` files and `log/` folders from being tracked by Git
- Verify that `git status` reflects the ignored files correctly

---

## ⏱️ Estimated Time
**20 minutes**

---

## 📋 Prerequisites
- Completed **Exercise 01** (Git environment setup)
- Notepad++ integrated as default editor
- A local and remote Git repository in place

---

## 🔢 Steps

### Step 1 — Create Files to Be Ignored

#### 1.1 Create a `.log` File in the Working Directory
```bash
echo "Application log entry 1" > app.log
echo "Error log entry 2"      > error.log
```

#### 1.2 Create a `log` Folder with Files Inside
```bash
mkdir log
echo "Log folder entry 1" > log/server.log
echo "Log folder entry 2" > log/debug.log
```

#### 1.3 Check Current Git Status (Before Ignore)
```bash
git status
```
Expected: `app.log`, `error.log`, and `log/` folder appear as **untracked** files.

---

### Step 2 — Create / Update `.gitignore`

#### 2.1 Create the `.gitignore` File
```bash
notepad++ .gitignore
```
Or using echo:
```bash
touch .gitignore
```

#### 2.2 Add Rules to `.gitignore`
Edit `.gitignore` and add the following lines:

```gitignore
# Ignore all .log files
*.log

# Ignore the entire log directory
log/
```

Save and close the editor.

---

### Step 3 — Verify Git Ignore is Working

#### 3.1 Check Git Status After Adding `.gitignore`
```bash
git status
```
Expected output: `.log` files and `log/` folder should **NOT** appear in the untracked section.

#### 3.2 Stage and Commit the `.gitignore` File
```bash
git add .gitignore
git commit -m "Add .gitignore to exclude .log files and log directory"
```

#### 3.3 Verify Final Status
```bash
git status
```
Expected: `working tree clean` (after staging `.gitignore`)

#### 3.4 Confirm Ignored Files Are Not Tracked
```bash
git ls-files --ignored --exclude-standard
```
Lists all files currently being ignored.

---

## ✅ Key Commands Reference

| Command | Description |
|---------|-------------|
| `touch .gitignore` | Create a `.gitignore` file |
| `git status` | Show current working directory status |
| `git add .gitignore` | Stage `.gitignore` |
| `git commit -m "msg"` | Commit staged changes |
| `git ls-files --ignored --exclude-standard` | List all ignored files |
| `git check-ignore -v <file>` | Check why a file is ignored |

---

## 📝 `.gitignore` Pattern Reference

| Pattern | Meaning |
|---------|---------|
| `*.log` | Ignores all files with `.log` extension |
| `log/` | Ignores the entire `log` directory |
| `!important.log` | Exception — do NOT ignore `important.log` |
| `**/logs` | Ignores `logs` directory anywhere in project |
| `/debug.log` | Only ignores `debug.log` in root directory |

---

## 📁 Files in This Exercise
- `.gitignore` — The ignore rules file
- `sample.log` — Example of a file that will be ignored
- `log/` — Example directory that will be ignored
- `output.md` — Expected command outputs

---

> **Note:** Once a file is already tracked by Git, adding it to `.gitignore` won't automatically untrack it. Use `git rm --cached <file>` to untrack without deleting.
