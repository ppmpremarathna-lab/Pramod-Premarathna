/* ==========================================================================
   SITE BEHAVIOUR — you should not need to edit this file.
   Content lives in js/projects.js.
   ========================================================================== */
(function () {
  "use strict";

  var doc = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  doc.classList.add("js");
  if (!reduceMotion) doc.classList.add("js-motion");

  /* Path prefix: "" on the homepage, "../../" on project pages */
  var BASE = document.body.getAttribute("data-base") || "";
  var SITE = window.SITE || {};
  var PROJECTS = window.PROJECTS || [];
  var CATEGORIES = window.CATEGORIES || [];

  /* ---------- Helpers (shared with case.js) ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function isPh(s) { return /\[PLACEHOLDER/i.test(String(s || "")); }
  /* Escaped text; placeholders get an amber marker */
  function txt(s) { return isPh(s) ? '<span class="placeholder">' + esc(s) + "</span>" : esc(s); }
  function url(p) { return !p ? "" : /^(https?:)?\/\//.test(p) ? p : BASE + p; }
  function catLabel(id) {
    for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i].label;
    return id;
  }
  function projectUrl(p) { return BASE + "projects/" + p.id + "/"; }

  function cardHTML(p, opts) {
    opts = opts || {};
    var layout = opts.layout || p.layout || "half";
    var cls = "card card--" + layout + (p.offset && !opts.layout ? " card--offset" : "") + " reveal";
    var cats = (p.categories || []).map(catLabel).join(" · ");
    var video = p.preview
      ? '<video muted loop playsinline preload="none" data-src="' + esc(url(p.preview)) + '" aria-hidden="true"></video>'
      : "";
    return (
      '<article class="' + cls + '" data-cats="' + esc((p.categories || []).join(" ")) + '">' +
        '<a class="card__link" href="' + projectUrl(p) + '">' +
          '<div class="card__media" data-cursor="' + (p.preview ? "Play" : "View") + '">' +
            '<img src="' + esc(url(p.cover && p.cover.src)) + '" alt="' + esc(p.cover && p.cover.alt) + '" loading="lazy" decoding="async" width="1600" height="1000">' +
            video +
            (p.tag ? '<span class="card__tag">' + esc(p.tag) + "</span>" : "") +
          "</div>" +
          '<div class="card__meta mono"><span>' + esc(cats) + "</span><span>" + txt(p.year) + "</span></div>" +
          '<h3 class="card__title">' + esc(p.title) + "</h3>" +
          '<p class="card__desc">' + txt(p.summary) + "</p>" +
          '<dl class="card__facts">' +
            "<div><dt>Role</dt><dd>" + txt(p.role) + "</dd></div>" +
            "<div><dt>Tools</dt><dd>" + (p.tools || []).map(txt).join(" · ") + "</dd></div>" +
          "</dl>" +
        "</a>" +
      "</article>"
    );
  }

  function ytId(id) { return String(id).replace(/[^\w-]/g, ""); }
  function mediaHTML(m) {
    var size = m.size === "half" ? " is-half" : m.size === "third" ? " is-third" : "";
    var cap = m.caption ? '<figcaption>' + txt(m.caption) + "</figcaption>" : "";
    var inner = "";
    if (m.type === "video") {
      inner = '<div class="media-frame"><video controls playsinline preload="none"' +
        (m.poster ? ' poster="' + esc(url(m.poster)) + '"' : "") + ' src="' + esc(url(m.src)) + '"></video></div>';
    } else if (m.type === "youtube") {
      var id = ytId(m.id);
      inner = '<div class="media-frame"><button class="embed-facade" data-embed="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" aria-label="Play video' + (m.caption ? ": " + esc(m.caption) : "") + '">' +
        '<img src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt="" loading="lazy">' +
        '<span class="embed-facade__play">Play</span></button></div>';
    } else if (m.type === "vimeo") {
      var vid = String(m.id).replace(/\D/g, "");
      inner = '<div class="media-frame"><button class="embed-facade" data-embed="https://player.vimeo.com/video/' + vid + '?autoplay=1" aria-label="Play video' + (m.caption ? ": " + esc(m.caption) : "") + '">' +
        (m.poster ? '<img src="' + esc(url(m.poster)) + '" alt="" loading="lazy">' : "") +
        '<span class="embed-facade__play">Play</span></button></div>';
    } else if (m.type === "beforeafter") {
      inner = '<div class="ba">' +
        '<img src="' + esc(url(m.before)) + '" alt="Before: ' + esc(m.alt) + '" loading="lazy">' +
        '<img class="ba__after" src="' + esc(url(m.after)) + '" alt="After: ' + esc(m.alt) + '" loading="lazy">' +
        '<span class="ba__line"></span>' +
        '<input type="range" min="0" max="100" value="50" aria-label="Compare before and after">' +
        '<div class="ba__labels mono"><span>Before</span><span>After</span></div></div>';
    } else {
      inner = '<div class="media-frame' + (m.size === "full" ? "" : "") + '"><a class="zoom" href="' + esc(url(m.src)) + '" data-lightbox="case" data-caption="' + esc(m.caption || m.alt || "") + '">' +
        '<img src="' + esc(url(m.src)) + '" alt="' + esc(m.alt) + '" loading="lazy" decoding="async"></a></div>';
    }
    return '<figure class="' + size.trim() + '">' + inner + cap + "</figure>";
  }

  window.PF = { esc: esc, txt: txt, url: url, catLabel: catLabel, cardHTML: cardHTML, mediaHTML: mediaHTML, projectUrl: projectUrl, reduceMotion: reduceMotion, refresh: null };

  /* ---------- Fill contact details from SITE ---------- */
  document.querySelectorAll("[data-site]").forEach(function (el) {
    var key = el.getAttribute("data-site");
    var v = SITE[key];
    if (!v) return;
    if (key === "email") { el.href = "mailto:" + v; if (!el.hasAttribute("data-keep-text")) el.textContent = v; }
    else if (key === "phone") { el.href = "tel:" + v.replace(/[^+\d]/g, ""); if (!el.hasAttribute("data-keep-text")) el.textContent = v; }
    else if (key === "linkedin") el.href = v;
    else if (key === "cv") el.href = BASE + v;
  });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Navigation ---------- */
  var nav = document.querySelector(".nav");
  var bar = document.querySelector(".nav__progress i");
  function onScroll() {
    var y = window.scrollY;
    if (nav) nav.classList.toggle("is-scrolled", y > 80);
    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Highlight the section currently on screen */
  var navLinks = document.querySelectorAll(".nav__links a[href^='#']");
  if (navLinks.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id ? "true" : "false"); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navLinks.forEach(function (a) { var s = document.querySelector(a.getAttribute("href")); if (s) spy.observe(s); });
    var heroTop = document.getElementById("top");
    if (heroTop) spy.observe(heroTop);
  }

  /* Mobile menu */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("menu");
  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) { var f = menu.querySelector("a, button"); if (f) f.focus(); } else toggle.focus();
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () { setMenu(menu.hidden); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a") || e.target.closest("[data-close]")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) setMenu(false); });
  }

  /* ---------- Hero timeline ---------- */
  var tl = document.getElementById("timeline-tracks");
  if (tl) {
    var TRACKS = [
      { id: "design",   code: "V2", label: "Design" },
      { id: "video",    code: "V1", label: "Video" },
      { id: "learning", code: "L1", label: "Learning" }
    ];
    tl.innerHTML = TRACKS.map(function (t, ti) {
      var items = PROJECTS.filter(function (p) { return (p.tracks || []).indexOf(t.id) > -1; });
      var n = items.length || 1, gap = 1.2, start = ti * 3; // stagger each track like a real edit
      var w = (100 - start - gap * (n + 1)) / n;
      var clips = items.map(function (p, i) {
        var left = start + gap + i * (w + gap);
        return '<a class="clip" href="' + projectUrl(p) + '" style="left:' + left.toFixed(2) + "%;width:" + w.toFixed(2) + '%">' +
          '<span class="clip__bg" style="background-image:url(\'' + esc(url(p.cover && p.cover.src)) + '\')"></span>' +
          '<span class="clip__text">' + esc(p.title) + "<small>" + esc(catLabel((p.categories || [])[0])) + "</small></span></a>";
      }).join("");
      return '<div class="track"><div class="track__label">' + t.code + "<br>" + t.label + '</div><div class="track__lane">' + clips + "</div></div>";
    }).join("");
  }

  /* ---------- Work grid + filters ---------- */
  var grid = document.getElementById("work-grid");
  var filterBar = document.getElementById("filters");
  if (grid) {
    var homeProjects = PROJECTS.filter(function (p) { return p.showOnHome !== false; });
    grid.innerHTML = homeProjects.map(function (p) { return cardHTML(p); }).join("");

    if (filterBar) {
      filterBar.innerHTML = CATEGORIES.map(function (c) {
        var count = c.id === "all" ? homeProjects.length : homeProjects.filter(function (p) { return (p.categories || []).indexOf(c.id) > -1; }).length;
        if (!count && c.id !== "all") return "";
        return '<button class="filter" type="button" data-filter="' + c.id + '" aria-pressed="' + (c.id === "all") + '">' + esc(c.label) + "<sup>" + count + "</sup></button>";
      }).join("");

      filterBar.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter");
        if (!btn) return;
        var f = btn.getAttribute("data-filter");
        filterBar.querySelectorAll(".filter").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        var apply = function () {
          grid.classList.toggle("is-filtered", f !== "all");
          grid.querySelectorAll(".card").forEach(function (card) {
            var cats = card.getAttribute("data-cats").split(" ");
            card.hidden = !(f === "all" || cats.indexOf(f) > -1);
            card.classList.add("is-in");
          });
        };
        if (document.startViewTransition && !reduceMotion) document.startViewTransition(apply);
        else apply();
      });
    }
  }

  /* ---------- Feature band (SELFY) ---------- */
  var band = document.getElementById("band");
  if (band) {
    var bp = PROJECTS.filter(function (p) { return p.id === band.getAttribute("data-project"); })[0];
    var track = band.querySelector(".band__track");
    if (bp && bp.band && track) {
      track.innerHTML = bp.band.map(function (b) {
        return '<figure class="band__item"><div class="frame"><img src="' + esc(url(b.src)) + '" alt="' + esc(b.alt) + '" loading="lazy" decoding="async"></div><figcaption class="mono">' + txt(b.caption) + "</figcaption></figure>";
      }).join("");
      var link = band.querySelector("[data-band-link]");
      if (link) link.href = projectUrl(bp);
    }
    /* Pinned sideways scroll on large screens only */
    var sticky = band.querySelector(".band__sticky");
    function setupBand() {
      var wide = window.innerWidth > 1024 && !reduceMotion;
      band.classList.toggle("is-pinned", wide);
      if (!wide) { band.style.height = ""; track.style.transform = ""; return; }
      var extra = track.scrollWidth - window.innerWidth + 48;
      band.style.height = (sticky.offsetHeight + Math.max(0, extra)) + "px";
      moveBand();
    }
    function moveBand() {
      if (!band.classList.contains("is-pinned")) return;
      var r = band.getBoundingClientRect();
      var total = band.offsetHeight - sticky.offsetHeight;
      var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      var extra = track.scrollWidth - window.innerWidth + 48;
      track.style.transform = "translate3d(" + (-p * Math.max(0, extra)).toFixed(1) + "px,0,0)";
    }
    if (track) {
      window.addEventListener("resize", setupBand);
      window.addEventListener("scroll", moveBand, { passive: true });
      window.addEventListener("load", setupBand);
      setupBand();
    }
  }

  /* ---------- Reveal on scroll ---------- */
  function observeReveals() {
    var els = document.querySelectorAll(".reveal:not(.is-in)");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }
  observeReveals();

  /* ---------- Cursor label + video previews ---------- */
  var cursor = null, dot = null, raf = null, cx = 0, cy = 0, tx = 0, ty = 0;
  function loop() {
    cx += (tx - cx) * (reduceMotion ? 1 : 0.22);
    cy += (ty - cy) * (reduceMotion ? 1 : 0.22);
    cursor.style.transform = "translate3d(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px,0)";
    raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.3 ? requestAnimationFrame(loop) : null;
  }
  if (finePointer) {
    cursor = document.createElement("div");
    cursor.className = "cursor";
    cursor.setAttribute("aria-hidden", "true");
    cursor.innerHTML = '<span class="cursor__dot"></span>';
    document.body.appendChild(cursor);
    dot = cursor.firstChild;
    document.addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; if (!raf) raf = requestAnimationFrame(loop); }, { passive: true });
  }
  function bindMedia(root) {
    (root || document).querySelectorAll("[data-cursor]").forEach(function (el) {
      if (el.__bound) return; el.__bound = true;
      var video = el.querySelector("video[data-src]");
      el.addEventListener("mouseenter", function () {
        if (cursor) { dot.textContent = el.getAttribute("data-cursor"); cursor.classList.add("is-on"); }
        if (video && !reduceMotion) {
          if (!video.src) video.src = video.getAttribute("data-src");
          var pr = video.play(); if (pr && pr.then) pr.then(function () { el.classList.add("is-playing"); }).catch(function () {});
        }
      });
      el.addEventListener("mouseleave", function () {
        if (cursor) cursor.classList.remove("is-on");
        if (video) { video.pause(); el.classList.remove("is-playing"); }
      });
    });
  }
  bindMedia();

  /* ---------- Magnetic buttons ---------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".magnetic").forEach(function (b) {
      b.addEventListener("mousemove", function (e) {
        var r = b.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) / r.width, y = (e.clientY - r.top - r.height / 2) / r.height;
        b.style.transform = "translate(" + (x * 10).toFixed(1) + "px," + (y * 8).toFixed(1) + "px)";
      });
      b.addEventListener("mouseleave", function () { b.style.transform = ""; });
    });
  }

  /* ---------- Copy email & phone ---------- */
  document.querySelectorAll("[data-copy-email]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var label = btn.querySelector("span") || btn;
      var done = function (msg) { var old = label.textContent; label.textContent = msg; setTimeout(function () { label.textContent = old; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(SITE.email || "").then(function () { done("Copied"); }, function () { done("Copy failed"); });
      else done("Select the email above");
    });
  });
  document.querySelectorAll("[data-copy-phone]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var label = btn.querySelector("span") || btn;
      var done = function (msg) { var old = label.textContent; label.textContent = msg; setTimeout(function () { label.textContent = old; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(SITE.phone || "").then(function () { done("Copied"); }, function () { done("Copy failed"); });
      else done("Select the number above");
    });
  });

  /* ---------- Page transition ("cut") ---------- */
  var cut = document.createElement("div");
  cut.className = "cut"; cut.setAttribute("aria-hidden", "true");
  document.body.appendChild(cut);
  if (!reduceMotion) {
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      if (a.target === "_blank" || a.hasAttribute("download") || a.hasAttribute("data-lightbox")) return;
      var href = a.getAttribute("href") || "";
      if (!href || href.charAt(0) === "#" || /^(mailto:|tel:)/.test(href) || /\.pdf$/i.test(href)) return;
      if (a.origin !== location.origin) return;
      e.preventDefault();
      cut.classList.add("is-on");
      setTimeout(function () { location.href = a.href; }, 420);
    });
    window.addEventListener("pageshow", function () { cut.classList.remove("is-on"); });
  }

  /* ---------- Embeds, before/after (also used on case pages) ---------- */
  document.addEventListener("click", function (e) {
    var f = e.target.closest(".embed-facade");
    if (!f) return;
    var iframe = document.createElement("iframe");
    iframe.src = f.getAttribute("data-embed");
    iframe.title = f.getAttribute("aria-label") || "Video";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.position = "absolute"; iframe.style.inset = "0";
    f.replaceWith(iframe);
  });
  document.addEventListener("input", function (e) {
    if (e.target.matches(".ba input")) e.target.closest(".ba").style.setProperty("--pos", e.target.value + "%");
  });

  window.PF.refresh = function (root) { observeReveals(); bindMedia(root); };
})();
