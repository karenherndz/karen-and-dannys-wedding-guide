# Session Notes - January 28, 2026

## Session 2 Updates (Continued)

### Phone Numbers Added
**Vendors:**
- Jeanne Gallo: (312) 882-2087
- David Hargrove: (646) 842-9038
- Antonia Zennaro: (504) 518-3218
- Lady B: (504) 214-8105
- Sam Kuslan: (203) 535-2159
- YUR Event Rentals: (504) 218-0726
- Stephanie Terrant: (219) 776-9158
- Kali Serna: (347) 526-6632
- La Boulangerie: (504) 269-3777
- Sophie Tran: (504) 319-7799
- Branson Bartending: (337) 940-2190
- Larkin: (504) 444-7877
- Oak & Ale: (504) 324-6658

**Important Players (in Ceremony section):**
- Karen: (216) 212-6400
- Danny: (504) 491-6756
- Jose Nestor Hernandez: (216) 502-7882
- Jose David Hernandez: (216) 375-5326
- Cindy Milojevic: (708) 606-8839
- Duschan "Duey" Milojevic: (708) 689-7000
- Lauren Langenmayr: (708) 606-9583
- Elizabeth (Dad's Wife): (216) 767-6293
- Peggy: (217) 390-6527
- Marilyn: (708) 807-0568

### Name Changes
- Changed "Jose N." to "Jose Nestor" throughout
- Changed "Jose D." to "Jose David" throughout

### People Added
- Elizabeth (Dad's Wife) added to Ceremony section

---

## Session 1 - Issues Fixed
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
