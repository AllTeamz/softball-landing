# Softball-to-Softball Landing Page Migration Plan

**Created:** 2025-01-25
**Status:** Ready for execution
**Constraint:** NO CSS modifications. Only mechanical text substitutions and image swaps.

---

## Overview

Full sync of softball-landing to softball-landing, followed by surgical find/replace substitutions only.

---

## Phase 1: Create Feature Branch

1. [ ] Create and checkout feature branch: `git checkout -b feature/softball-sync-2025-01-25`
2. [ ] This keeps `master` safe - all work happens on the feature branch
3. [ ] Only merge to master after verification passes

---

## Phase 2: Copy Softball-Landing Files

Copy these directories/files from softball-landing to softball-landing (replacing existing):

1. [ ] `_config.yml`
2. [ ] `_config.development.yml`
3. [ ] `_includes/` (entire directory)
4. [ ] `_layouts/` (entire directory)
5. [ ] `_pages/` (entire directory)
6. [ ] `_sass/` (entire directory)
7. [ ] `_data/` (entire directory)
8. [ ] `assets/css/` (entire directory)
9. [ ] `assets/js/` (entire directory)
10. [ ] `.github/workflows/` (entire directory)
11. [ ] `Gemfile`
12. [ ] `Rakefile`
13. [ ] `index.html`
14. [ ] `manifest.json`
15. [ ] `sw.js` (service worker if exists)

**Do NOT copy:**
- `CNAME` (keep softball's domain)
- `Gemfile.lock` (regenerate after Gemfile copy)
- `.git/` (obviously)

---

## Phase 3: Text Substitutions (Find/Replace)

Apply these substitutions across ALL text files:

| Find | Replace |
|------|---------|
| `Softball Bound` | `Softball Bound` |
| `softball bound` | `softball bound` |
| `Softball bound` | `Softball bound` |
| `SOFTBALL BOUND` | `SOFTBALL BOUND` |
| `softball` | `softball` |
| `Softball` | `Softball` |
| `SOFTBALL` | `SOFTBALL` |
| `1222443580` | `1222443580` |
| `softballbound.com` | `softballbound.com` |
| `softballbound://` | `softballbound://` |
| `sbicon` | `sbicon` |

**Files to process:**
- `_config.yml`
- `_config.development.yml`
- `manifest.json`
- All files in `_includes/`
- All files in `_layouts/`
- All files in `_pages/`
- All files in `_data/`
- All files in `assets/js/`

---

## Phase 4: Image Swaps

| Action | Source | Destination |
|--------|--------|-------------|
| Replace | `95AE1950-A7F2-470E-BFD7-FDCD561D0E9D.png` | `assets/` as new header image |
| Replace | `yellow_ss.png` | `assets/` replacing `blue_ss.png` |
| Keep | `sbicon.jpeg` | Already correct for softball |

**Update `_config.yml` image references:**
- `cover_image:` → point to new header image
- Screenshot reference → `yellow_ss.png`

---

## Phase 5: Regenerate Dependencies

1. [ ] Delete `Gemfile.lock`
2. [ ] Run `bundle install`
3. [ ] Verify build with `bundle exec jekyll build`

---

## Phase 6: Verify

1. [ ] Run `bundle exec jekyll serve` and visually inspect
2. [ ] Verify App Store link points to `https://apps.apple.com/us/app/softball-bound/id1222443580`
3. [ ] Verify header image is softball-themed
4. [ ] Verify screenshot shows yellow_ss.png
5. [ ] Verify all "softball" text is now "softball"
6. [ ] Run `bundle exec rake test` (if HTMLProofer passes)

---

## Phase 7: Commit

1. [ ] Stage all changes
2. [ ] Commit with message describing migration
3. [ ] Push to trigger GitHub Actions

---

## Constraints (DO NOT VIOLATE)

- **NO CSS modifications** - zero changes to any `.scss`, `.css`, or style-related code
- **NO "improvements"** - only the substitutions listed above
- **NO sentence rewrites** - mechanical find/replace only
- **NO color changes** - colors come from softball-landing as-is
- **NO layout changes** - layout comes from softball-landing as-is

If something looks wrong after substitution, note it but do not attempt to fix with CSS or creative edits.

---

## Rollback Plan

If migration fails:
```bash
git checkout master
git branch -D feature/softball-sync-2025-01-25
```

Master remains untouched until you explicitly merge.
