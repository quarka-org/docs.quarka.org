# Release Notes Maintenance Guidelines

> **【このガイドは現在使っていません】**
>
> リリース告知の投稿先は blog に移行しました（2026-05-09）。
> 新しいリリースの告知は `blog-release-template.md` を参照してください。
>
> 以下が説明している `docs/release-notes/`（年フォルダ、`_category_.json`、
> `index.md` の更新）は、navbar からもサイドバーからも外れており、
> URL 直打ち以外では到達できません。ここを更新してもサイト上には現れず、
> プラグインの「What's New」枠にも出ません。
>
> 過去分（2025年の QA Advisor β）の保全のために残しているだけです。

## Structure

```
release-notes/
├── index.md                 # Main index with latest releases
├── ../templates/           # Templates directory
│   ├── release-note-template.md
│   └── MAINTENANCE_GUIDE.md
├── 2025/                   # Year folders
│   ├── _category_.json     # Year category configuration
│   └── *.md               # Individual release notes
├── 2024/
│   └── ...
└── archive/               # Older releases (3+ years)
```

## Best Practices

### 1. File Naming Convention
- Format: `[product-name]-[version].md`
- Example: `qa-advisor-beta-4-9-0.md`
- Use hyphens, not dots in filenames

### 2. Version Organization
- **Current Year**: Keep all releases in the current year folder
- **Previous Years**: Maintain 2-3 years of history readily accessible
- **Archive**: Move releases older than 3 years to archive folder

### 3. Index Page Management
- Always update `index.md` with the latest release
- Show only the 5 most recent releases on the index
- Link to year folders for complete history

### 4. When to Create New Release Notes
- Major releases (X.0.0)
- Minor releases with new features (4.X.0)
- Important patches (4.9.X)
- Beta/RC versions for testing

### 5. Archive Strategy
After 3 years:
1. Create `archive/YEAR/` folder if not exists
2. Move old release notes there
3. Update links in index.md
4. Keep a summary in the main area

### 6. Sidebar Management
```json
// _category_.json example
{
  "label": "2025",
  "position": 1,
  "collapsible": true,
  "collapsed": false  // Current year: false, older: true
}
```

## Quick Commands

### Create new year folder:
```bash
mkdir docs/release-notes/2026
```

### Create category file:
```bash
echo '{"label": "2026", "position": 0, "collapsible": true, "collapsed": false}' > docs/release-notes/2026/_category_.json
```

### Archive old releases:
```bash
mkdir -p docs/release-notes/archive/2022
mv docs/release-notes/2022/* docs/release-notes/archive/2022/
```

## Checklist for New Release

- [ ] Copy TEMPLATE.md to new file
- [ ] Fill in all template sections
- [ ] Update version number and date
- [ ] Update index.md with latest release
- [ ] Commit with message: "Release notes for vX.X.X"
- [ ] Tag the release in Git if applicable
