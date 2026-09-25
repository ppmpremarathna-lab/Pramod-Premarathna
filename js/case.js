/* ==========================================================================
   CASE STUDY RENDERER — builds a project page from js/projects.js.
   Each project page only needs:  <main id="case" data-project="PROJECT-ID">
   ========================================================================== */
(function () {
  "use strict";
  var root = document.getElementById("case");
  if (!root || !window.PF) return;
  var PF = window.PF, PROJECTS = window.PROJECTS || [];
  var id = root.getAttribute("data-project");
  var p = PROJECTS.filter(function (x) { return x.id === id; })[0];

  if (!p) {
    root.innerHTML = '<section class="wrap case-hero"><p class="mono muted">Project not found</p>' +
      '<h1 class="case-hero__title">Missing</h1><p class="case-hero__sub">No project with the id “' + PF.esc(id) +
      '” in js/projects.js.</p><p style="margin-top:32px"><a class="btn" href="../../#work">Back to work</a></p></section>';
    return;
  }

  var cs = p.caseStudy || {};
  var hasResults = cs.outcome && cs.outcome.hasResults;
  var CHAPTERS = [
    ["overview",   "Overview"],
    ["challenge",  "Challenge"],
    ["objective",  "Objective"],
    ["approach",   "Creative Approach"],
    ["role",       "My Role"],
    ["process",    "Process"],
    ["production", "Design / Production"],
    ["final",      "Final Output"],
    ["outcome",    hasResults ? "Results / Impact" : "Project Outcome"],
    ["tools",      "Tools Used"],
    ["related",    "Related Projects"]
  ];
  function num(i) { return (i < 9 ? "0" : "") + (i + 1); }

  var cats = (p.categories || []).map(PF.catLabel).join(" · ");
  var html = "";

  /* Hero */
  html += '<section class="wrap case-hero">' +
    '<a class="case-back mono" href="../../#work">← All work</a>' +
    '<p class="case-hero__cats mono">' + PF.esc(cats) + "</p>" +
    '<h1 class="case-hero__title">' + PF.esc(p.title) + "</h1>" +
    (p.subtitle ? '<p class="case-hero__sub">' + PF.txt(p.subtitle) + "</p>" : "") +
    '<div class="case-cover"><div class="media-frame"><img src="' + PF.esc(PF.url(p.cover && p.cover.src)) + '" alt="' + PF.esc(p.cover && p.cover.alt) + '" fetchpriority="high"></div></div>' +
    '<dl class="facts">' +
      "<div><dt>Client</dt><dd>" + PF.txt(p.client || "—") + "</dd></div>" +
      "<div><dt>Year</dt><dd>" + PF.txt(p.year) + "</dd></div>" +
      "<div><dt>Role</dt><dd>" + PF.txt(p.role) + "</dd></div>" +
      "<div><dt>Tools</dt><dd>" + (p.tools || []).map(PF.txt).join(" · ") + "</dd></div>" +
    "</dl></section>";

  /* Chapters */
  html += '<div class="wrap case-body"><nav class="chapter-nav" aria-label="Case study chapters"><ol>' +
    CHAPTERS.map(function (c, i) { return '<li><a href="#' + c[0] + '"><span>' + num(i) + "</span>" + c[1] + "</a></li>"; }).join("") +
    "</ol></nav><div>";

  CHAPTERS.forEach(function (c, i) {
    var key = c[0], block = cs[key] || {};
    var body = "";
    if (key === "tools") {
      body = '<ul class="tools-row">' + (p.tools || []).map(function (t) { return "<li>" + PF.txt(t) + "</li>"; }).join("") + "</ul>";
    } else if (key === "related") {
      var rel = PROJECTS.filter(function (x) {
        return x.id !== p.id && (x.categories || []).some(function (k) { return (p.categories || []).indexOf(k) > -1; });
      });
      if (rel.length < 2) rel = rel.concat(PROJECTS.filter(function (x) { return x.id !== p.id && rel.indexOf(x) < 0; }));
      body = '<div class="work-grid" style="margin-top:32px">' + rel.slice(0, 2).map(function (x) { return PF.cardHTML(x, { layout: "half" }); }).join("") + "</div>";
    } else {
      var text = block.text || ["[PLACEHOLDER]"];
      body = '<div class="chapter__text">' + text.map(function (t) { return "<p>" + PF.txt(t) + "</p>"; }).join("") + "</div>";
      if (block.media && block.media.length) body += '<div class="gallery">' + block.media.map(PF.mediaHTML).join("") + "</div>";
    }
    html += '<section class="chapter reveal" id="' + key + '" aria-labelledby="h-' + key + '">' +
      '<p class="chapter__num">' + num(i) + " / 11</p>" +
      '<h2 class="chapter__title" id="h-' + key + '">' + c[1] + "</h2>" + body + "</section>";
  });
  html += "</div></div>";

  /* Next project */
  var idx = PROJECTS.indexOf(p), next = PROJECTS[(idx + 1) % PROJECTS.length];
  if (next && next !== p) {
    html += '<div class="wrap"><a class="next-project" href="' + PF.projectUrl(next) + '"><span class="mono">Next project →</span><b>' + PF.esc(next.title) + "</b></a></div>";
  }

  root.innerHTML = html;
  PF.refresh(root);

  /* Chapter index follows the reader */
  var links = root.querySelectorAll(".chapter-nav a");
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id ? "true" : "false"); });
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    root.querySelectorAll(".chapter").forEach(function (s) { spy.observe(s); });
  }
})();
