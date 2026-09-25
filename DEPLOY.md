# Putting the site online (hosting)

This is a static website: plain HTML, CSS, JavaScript and images. It needs no database and no server code, so any web host can run it. Upload the **contents** of this folder, so that `index.html` sits at the top level.

---

## Option A: Netlify Drop (fastest, free plan, no account setup needed to try)

1. Go to **app.netlify.com/drop**.
2. Drag this whole folder onto the page.
3. Netlify gives you a web address straight away. Sign up (free) to keep it and rename it.
4. **To update later:** open your site in Netlify, go to **Deploys**, and drag the folder in again.
5. **Custom domain:** in Netlify, open **Domain management** and choose **Add a domain**. Follow the DNS steps it shows. HTTPS is set up automatically.

`netlify.toml` is already included. It sets caching and security headers.

## Option B: GitHub Pages (free, keeps a history of every change)

1. Create a GitHub account and a new **public** repository, for example `pramod-portfolio`.
2. Choose **Add file → Upload files** and drag in everything in this folder, including `.nojekyll`.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`, and click **Save**.
4. Your site appears at `https://<username>.github.io/pramod-portfolio/`.
5. **Custom domain:** add it in **Settings → Pages**, then follow GitHub's DNS instructions.

Without a custom domain, the site lives in a sub-folder and the custom 404 page will look unstyled. Everything else works, because all links in the site are relative.

## Option C: cPanel / shared hosting (for example, a local Sri Lankan host)

1. Open **cPanel → File Manager → public_html**.
2. Upload the zip, then **Extract** it inside `public_html`.
3. Check that `index.html` is directly inside `public_html`, not in a sub-folder.
4. `.htaccess` is included. It turns on compression and browser caching and sets up the 404 page. Once your SSL certificate is active, remove the `#` from the three HTTPS lines in `.htaccess` to force secure links.

On a Mac, Finder hides files that start with a dot (`.htaccess`, `.nojekyll`). Press **Cmd + Shift + .** to show them.

---

## After going live

- [ ] Replace `www.yourdomain.com` everywhere (see README-HOW-TO-EDIT.md, section 2).
- [ ] Test the share preview by pasting your link into LinkedIn's Post Inspector.
- [ ] Add the site to **Google Search Console** and submit `sitemap.xml`.
- [ ] Open the site on your phone and test the menu, filters and one case study.
- [ ] Run **PageSpeed Insights** (pagespeed.web.dev). Large images are the usual cause of slow scores.
