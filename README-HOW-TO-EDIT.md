# Pramod portfolio: how to edit

You don't need any coding tools. Use a plain text editor. **VS Code** is free and works well, and TextEdit on Mac also works if you set it to plain text.

## 1. Where things live

```
index.html                  Homepage text: hero, About, Skills, Experience, Contact
js/projects.js              ★ Your projects, case studies, email, LinkedIn, CV link
css/tokens.css              Colours, fonts, spacing
projects/<project-id>/      One folder per case-study page
projects/_template/         Copy this folder to make a new case-study page
images/projects/<id>/       Project images
images/portrait.svg         Your photo (replace)
images/og-image.jpg         Preview image shown when the link is shared
videos/previews/            Short silent hover clips for project cards
cv/                         Your CV PDF
```

Most edits happen in **js/projects.js**. In **index.html**, look for comments that start with `EDIT:`.

## 2. What still needs your content

Anything starting with `[PLACEHOLDER` shows in **amber** on the site. Search for `PLACEHOLDER` in `js/projects.js` and `index.html`, then replace each one.

Also replace these:

- **Email, Phone / WhatsApp, and LinkedIn:** at the top of `js/projects.js`.
- **CV:** put your PDF at `cv/Pramod-Premarathna-CV.pdf`, using exactly that name.
- **Portrait:** add your photo to `images/` and change `portrait.svg` to your file name in `index.html`.
- **Domain:** replace `www.yourdomain.com` in `index.html`, every `projects/*/index.html`, `robots.txt` and `sitemap.xml`.

## 3. Replace a project image

1. Export at 1600–2000px wide as **WebP** (best) or JPG, 80% quality.
2. Save it in that project's folder, for example `images/projects/lima-electric-bike/cover.webp`.
3. In `js/projects.js`, change the path from `cover.svg` to `cover.webp`.
4. Write a short `alt` that describes the image, for example "Rider on LIMA bike at sunset".

## 4. Add a video

| You have | Put this in a case study's `media` list |
|---|---|
| YouTube video | `{ type: "youtube", id: "dQw4w9WgXcQ", caption: "Final film" }` (the id is the part after `v=` in the link) |
| Vimeo video | `{ type: "vimeo", id: "123456789", poster: "images/…/cover.webp" }` |
| Your own MP4 | `{ type: "video", src: "videos/lima-final.mp4", poster: "images/…/cover.webp" }` |

**Hover preview on a card:** export a 4–6 second clip with no audio, 1280px wide and under 1.5 MB. Put it in `videos/previews/` and set `preview: "videos/previews/lima.mp4"` on that project.

Long films belong on YouTube or Vimeo. They load faster and don't use up your hosting space.

## 5. Add a new project

1. In `js/projects.js`, copy a whole project block, from `/* ===== PROJECT 0X` down to its closing `},`, and paste it after the last project.
2. Give it a new `id` with no spaces, for example `"singer-social-2025"`.
3. Copy the folder `projects/_template` and rename it to the same id.
4. In that new folder's `index.html`, replace `NEW PROJECT TITLE`, the description and `PROJECT-ID`.
5. Add the page to `sitemap.xml`.

**Card size (`layout`):** `feature` = full width, `large` = wide, `small` = narrow, `half` = half width. Add `offset: true` to drop a card lower for a staggered look.

**Timeline rows (`tracks`):** `"design"`, `"video"`, `"learning"`.

**Filters (`categories`):** `graphic`, `video`, `brand`, `learning`, `elearning`, `other`.

## 6. Results and statistics

Leave `hasResults: false`. The chapter heading then reads **Project Outcome**. Change it to `true` only when you add real results you can prove. The heading then changes to **Results / Impact**.

## 7. Check before you publish

- Open `index.html` in Chrome or Safari and click through every project.
- If a page is blank, a comma or quote mark is usually missing in `js/projects.js`. Open the browser console (Cmd + Option + J) to see which line has the problem.
