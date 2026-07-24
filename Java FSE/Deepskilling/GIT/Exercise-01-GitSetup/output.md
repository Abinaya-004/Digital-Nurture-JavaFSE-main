# Output — Exercise 01: Git Setup, Configuration & First Commit

This document shows the **expected terminal output** for each command in Exercise 01.

---

## Step 1.1 — Verify Git Installation

```bash
$ git --version
```
```
git version 2.45.1.windows.1
```

---

## Step 1.2 — Configure User Name and Email

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "your.email@example.com"
```
*(No output — commands execute silently on success)*

---

## Step 1.3 — Verify Configuration

```bash
$ git config --global --list
```
```
user.name=Your Name
user.email=your.email@example.com
core.editor='C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession
```

---

## Step 2.3 — Configure Notepad++ as Default Editor

```bash
$ git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"
```
*(No output)*

---

## Step 2.4 — Verify Default Editor

```bash
$ git config -e --global
```
```
# Opens global .gitconfig in Notepad++ showing:
[user]
    name = Your Name
    email = your.email@example.com
[core]
    editor = 'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession
```

---

## Step 3.1 — Create Project Directory and Init Git

```bash
$ mkdir GitDemo
$ cd GitDemo
$ git init
```
```
Initialized empty Git repository in C:/Users/YourName/GitDemo/.git/
```

---

## Step 3.2 — Verify Hidden .git Folder

```bash
$ ls -la
```
```
total 4
drwxr-xr-x 1 YourName 197121 0 Jul 24 12:00 ./
drwxr-xr-x 1 YourName 197121 0 Jul 24 12:00 ../
drwxr-xr-x 1 YourName 197121 0 Jul 24 12:00 .git/
```

---

## Step 3.3 — Create welcome.txt

```bash
$ echo "Welcome to GitDemo repository" > welcome.txt
$ cat welcome.txt
```
```
Welcome to GitDemo repository
```

---

## Step 3.4 — Check Git Status (Untracked)

```bash
$ git status
```
```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        welcome.txt

nothing added to commit but untracked files present (use "git add" to track)
```

---

## Step 3.5 — Stage the File

```bash
$ git add welcome.txt
```
*(No output)*

---

## Step 3.6 — Commit the File

```bash
$ git commit -m "Initial commit: add welcome.txt"
```
```
[master (root-commit) a1b2c3d] Initial commit: add welcome.txt
 1 file changed, 1 insertion(+)
 create mode 100644 welcome.txt
```

---

## Step 3.7 — Verify Local Repository

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
a1b2c3d (HEAD -> master) Initial commit: add welcome.txt
```

---

## Step 3.8 — Pull from Remote

```bash
$ git remote add origin https://github.com/<your-username>/GitDemo.git
$ git pull origin master
```
```
From https://github.com/<your-username>/GitDemo
 * branch            master     -> FETCH_HEAD
Already up to date.
```

---

## Step 3.9 — Push to Remote

```bash
$ git push origin master
```
```
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 256 bytes | 256.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/<your-username>/GitDemo.git
 * [new branch]      master -> master
```

---

## ✅ Exercise 01 Complete!

**Summary of what was accomplished:**
- ✔ Git installed and version verified
- ✔ Global user name and email configured
- ✔ Notepad++ set as the default Git editor
- ✔ `GitDemo` repository initialised
- ✔ `welcome.txt` created, staged, and committed
- ✔ Changes pushed to remote repository
