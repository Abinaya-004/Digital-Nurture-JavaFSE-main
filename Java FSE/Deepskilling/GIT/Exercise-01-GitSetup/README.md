# Exercise 01 — Git Setup, Configuration & First Commit

## 🎯 Objectives
- Familiarise with Git commands: `git init`, `git status`, `git add`, `git commit`, `git push`, `git pull`
- Setup machine with Git configuration
- Integrate Notepad++ as the default editor
- Add a file to the source code repository

---

## ⏱️ Estimated Time
**30 minutes**

---

## 📋 Prerequisites
- Git Bash client installed on your machine
- A free GitHub/GitLab account (do **not** use corporate credentials)

---

## 🔢 Steps

### Step 1 — Setup Git Configuration

#### 1.1 Verify Git Installation
```bash
git --version
```
Expected output: `git version 2.x.x`

#### 1.2 Configure User Name and Email
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### 1.3 Verify Configuration
```bash
git config --global --list
```

---

### Step 2 — Integrate Notepad++ as Default Editor

#### 2.1 Check if Notepad++ is in PATH
```bash
notepad++
```
If not found, add the Notepad++ installation path to the Windows `PATH` environment variable:
- `Control Panel → System → Advanced System Settings → Advanced → Environment Variables`
- Edit the `Path` user variable and add: `C:\Program Files\Notepad++`

#### 2.2 Create an Alias for Notepad++
```bash
alias notepad++="/c/Program\ Files/Notepad++/notepad++.exe"
```

Add to `~/.bash_profile`:
```bash
alias notepad++="/c/Program\ Files/Notepad++/notepad++.exe"
```

#### 2.3 Configure Notepad++ as Default Git Editor
```bash
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"
```

#### 2.4 Verify the Default Editor
```bash
git config -e --global
```

---

### Step 3 — Add a File to the Source Code Repository

#### 3.1 Create the Project Directory and Init Git
```bash
mkdir GitDemo
cd GitDemo
git init
```

#### 3.2 Verify Initialization
```bash
ls -la
```
This displays the hidden `.git` folder confirming the repository was initialised.

#### 3.3 Create `welcome.txt`
```bash
echo "Welcome to GitDemo repository" > welcome.txt
cat welcome.txt
```

#### 3.4 Check Git Status
```bash
git status
```
`welcome.txt` appears as an **untracked** file.

#### 3.5 Stage the File
```bash
git add welcome.txt
```

#### 3.6 Commit with Multi-line Message (using Notepad++ editor)
```bash
git commit
```
Notepad++ opens — type your commit message, save, and close.

Or use inline commit:
```bash
git commit -m "Initial commit: add welcome.txt"
```

#### 3.7 Verify Local Repository
```bash
git status
git log --oneline
```

#### 3.8 Pull from Remote (GitLab/GitHub)
```bash
git remote add origin https://github.com/<your-username>/GitDemo.git
git pull origin master
```

#### 3.9 Push to Remote
```bash
git push origin master
```

---

## ✅ Key Commands Reference

| Command | Description |
|---------|-------------|
| `git --version` | Check Git version |
| `git config --global user.name` | Set global username |
| `git config --global user.email` | Set global email |
| `git config --global --list` | List all global configs |
| `git init` | Initialise a new local repository |
| `git status` | Show working directory status |
| `git add <file>` | Stage file for commit |
| `git commit -m "message"` | Commit staged changes |
| `git push origin master` | Push to remote repository |
| `git pull origin master` | Pull from remote repository |

---

## 📁 Files in This Exercise
- `welcome.txt` — Sample file added to the repository
- `output.md` — Expected command outputs

---

> **Note:** Always use a personal GitHub/GitLab account for these exercises. Never use corporate credentials.
