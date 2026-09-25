/* ==========================================================================
   LIGHTBOX — any link with data-lightbox opens here.
   Keyboard: ← → to move, Esc to close. Swipe on touch screens.
   ========================================================================== */
(function () {
  "use strict";
  var box, img, cap, count, items = [], index = 0, lastFocus = null, startX = null;

  function build() {
    box = document.createElement("div");
    box.className = "lightbox";
    box.hidden = true;
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Image viewer");
    box.innerHTML =
      '<div class="lightbox__bar"><span class="mono lightbox__count"></span><button type="button" data-lb="close">Close</button></div>' +
      '<div class="lightbox__stage"><img alt=""></div>' +
      '<div class="lightbox__foot"><button type="button" data-lb="prev">← Prev</button><p class="lightbox__caption"></p><button type="button" data-lb="next">Next →</button></div>';
    document.body.appendChild(box);
    img = box.querySelector("img");
    cap = box.querySelector(".lightbox__caption");
    count = box.querySelector(".lightbox__count");
    box.addEventListener("click", function (e) {
      var a = e.target.getAttribute("data-lb");
      if (a === "close" || e.target === box || e.target.classList.contains("lightbox__stage")) close();
      else if (a === "prev") go(-1);
      else if (a === "next") go(1);
    });
    box.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      startX = null;
    });
  }
  function show() {
    var a = items[index];
    var thumb = a.querySelector("img");
    img.src = a.getAttribute("href");
    img.alt = thumb ? thumb.alt : "";
    cap.textContent = a.getAttribute("data-caption") || "";
    count.textContent = (index + 1) + " / " + items.length;
    box.querySelectorAll("[data-lb=prev],[data-lb=next]").forEach(function (b) { b.hidden = items.length < 2; });
  }
  function open(a) {
    if (!box) build();
    var group = a.getAttribute("data-lightbox");
    items = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox="' + group + '"]'));
    index = Math.max(0, items.indexOf(a));
    lastFocus = document.activeElement;
    show();
    box.hidden = false;
    document.body.style.overflow = "hidden";
    box.querySelector("[data-lb=close]").focus();
  }
  function close() {
    box.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  function go(d) { index = (index + d + items.length) % items.length; show(); }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-lightbox]");
    if (!a) return;
    e.preventDefault();
    open(a);
  });
  document.addEventListener("keydown", function (e) {
    if (!box || box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "Tab") {
      /* keep focus inside the viewer */
      var f = box.querySelectorAll("button:not([hidden])");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();
