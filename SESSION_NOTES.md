# Session Notes - January 28, 2026

## Issues Fixed
- **Tabs stopped working**: Removed lodging HTML element but left JS code referencing it, causing null reference error
- **GitHub Pages not updating**: Was pushing to `main` but site deployed from `gh-pages` branch - now pushing to both
- **Browser caching**: Renamed `app.js` → `app2.js` and `data.js` → `data2.js` to force cache refresh

## Updates Made
- Separated "Cousins & Twins" into two sections:
  - **Flower Girls / Ushers** (arrive 2:30 PM)
  - **Flip Crew (Guys)**: Zach, Joey, John, Gabriel + volunteers
- Removed Lodging Assignments card from People section

## Vendors Added
- **Branson Bartending** - $750 ($300 deposit, $450 remaining)
- **Larkin** - Rain contingency tent - $3,358 ($1,679 deposit)
- **Oak & Ale** - Rehearsal dinner venue (Friday 7 PM)

## Other Changes
- Fixed photographer remainder to $2,700 (was showing $2,400)
- Sam Kuslan marked as confirmed for ceremony piano

## Technical Notes
- Always push to both branches: `git push origin main && git push origin main:gh-pages`
- Site URL: https://karenherndz.github.io/karen-and-dannys-wedding-guide/
- If site doesn't update, rename JS files to bust CDN cache
