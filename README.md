# LTC International Limited — website

Static site. No build step. Plain HTML, CSS, JS.

Built for GitHub Pages, custom domain `ltcinternational.asia`.

## Files

```
index.html          All page content (single scrolling page)
css/style.css       All styling
js/script.js        Mobile menu, footer year, contact form submit
assets/logo.png     Logo mark (white on transparent), used in header + footer
assets/markets-map.png  World map graphic for the Markets section
assets/favicon-*.png, apple-touch-icon.png  Icon files for browser tabs / phone home screens
favicon.ico         Browser tab icon (older browsers)
robots.txt          Blocks search engines (Disallow: /)
CNAME               Tells GitHub Pages to serve the custom domain
```

The logo was built from the artwork you supplied: recolored to white/ivory on a transparent background so it sits cleanly on the dark site, then cropped tight. If you get a proper vector or transparent master file of the logo later, just replace `assets/logo.png` (and re-crop the favicon files from it if you want).

## Before you publish: set up the contact form

The form currently points to a placeholder Formspree address. Fix this first, or messages will not arrive.

1. Go to formspree.io and create a free account.
2. Create a new form. Formspree gives you a form ID that looks like `xyzabcde`.
3. Open `index.html`, find this line near the bottom:
   ```
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your real ID.
5. Save the file.

Formspree's free plan allows 50 submissions a month. That is plenty for this site.

## Publish with GitHub Desktop (Mac)

Steps to get the site live:

1. Open GitHub Desktop.
2. File → New Repository.
   - Name: `ltc-website` (or anything you like)
   - Local path: choose a folder on your Mac
   - Leave "Initialize with README" unchecked (this folder already has one)
3. Copy all files from this folder into the new repository folder GitHub Desktop just created.
4. Back in GitHub Desktop, you will see all the new files listed as changes.
5. Write a commit message, e.g. "Initial site", and click "Commit to main".
6. Click "Publish repository" (top right). Untick "Keep this code private" if you want the repo public — it can also stay private; GitHub Pages still works on a private repo if your account has Pages enabled for private repos, otherwise make it public.
7. Once published, go to the repository on github.com in your browser.
8. Go to Settings → Pages.
9. Under "Build and deployment", set Source to "Deploy from a branch".
10. Set Branch to `main` and folder to `/ (root)`. Save.
11. GitHub will give you a URL like `https://yourusername.github.io/ltc-website/`. Wait a minute or two for it to go live and check it works.

## Point your domain at it (GoDaddy)

Your domain `ltcinternational.asia` is on GoDaddy, and your email (Office 365) runs through it. Do not touch the existing MX or email-related records. You are only adding one new record for the website.

1. Log in to GoDaddy → My Products → DNS for `ltcinternational.asia`.
2. Add a new record:
   - Type: `CNAME`
   - Name: `www`
   - Value: `yourusername.github.io`
   - TTL: default is fine
3. GitHub Pages also needs the root domain (`ltcinternational.asia` without `www`) to work. GoDaddy does not allow a CNAME on the root, so add four `A` records instead, all with Name `@`, pointing to GitHub's IP addresses:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Save. DNS changes can take anywhere from a few minutes to a few hours to spread.
5. Back in your repository's Settings → Pages, enter `ltcinternational.asia` under "Custom domain" and save. This confirms the `CNAME` file in the repo. Optionally tick "Enforce HTTPS" once GitHub shows it as available (can take a little while after DNS updates).

After this, both `ltcinternational.asia` and `www.ltcinternational.asia` should load the site. Your email stays untouched, since you only added website-related records.

## Updating the site later

1. Edit files in the local repository folder.
2. Open GitHub Desktop. It will show what changed.
3. Commit and click "Push origin".
4. GitHub Pages rebuilds automatically, usually live within a minute.

## Notes

- The site is not indexed by search engines on purpose (`robots.txt` + `noindex` meta tag). It is reachable only by direct URL. This is intentional per the brief.
- No analytics or tracking scripts are included.
- No personal names, photos, or public email address appear anywhere on the site.
