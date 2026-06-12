# Commit

Commit and push files from this session only.

## Step 1: Identify your files

```bash
git status --short
git diff --stat
```

List which files this session created or edited. Ignore anything that looks like prior work.

## Step 2: Stage and commit with pathspec

```bash
git add path/to/file1 path/to/file2
git commit -m "<message>" -- path/to/file1 path/to/file2
```

The `-- <pathspec>` form ensures only your files are captured even if other changes are staged.

**Message format:** concise imperative English. One line unless context genuinely requires a body.

Examples:
```
Add cognitive-load article stub #2
Rename vendor-claims article to sharper angle #1
Add showcase section to home page #3
Fix build script: handle empty articles dir
```

- Reference issues with `#N` inline
- No `Co-Authored-By` trailer
- No conventional-commits prefix required

## Step 3: Verify scope

```bash
git show --stat HEAD
```

Confirm the commit contains exactly your files and nothing else.

## Step 4: Push

```bash
git push
```

Always push immediately after committing — don't defer.

## Step 5: Close the issue (if work is complete)

Only after `/ready` reported clean:

```bash
gh issue close <N> --comment "Closed in $(git rev-parse --short HEAD): <one-line summary>"
```

If `/ready` hasn't run, run it before closing.
