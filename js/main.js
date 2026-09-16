/* ============================================================
   Frontline Heroes Foundation — shared components + behavior
   Works from file:// or any static server (no fetch required).
   ============================================================ */
(function () {
  "use strict";

  window.FHF_VERSION = "1.0.1";

  var PAGE = document.body.dataset.page || "";

  /* ---------- Shield mark (inline SVG) ---------- */
  var SHIELD_SVG =
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">' +
    '<path d="M12 2.5 4.5 5.4v6.1c0 4.6 3.1 8.1 7.5 9.9 4.4-1.8 7.5-5.3 7.5-9.9V5.4L12 2.5Z" fill="#c8a668"/>' +
    '<path d="M12 6.2v11.3c3.1-1.5 5.2-4 5.2-7.2V7.5L12 6.2Z" fill="#a63d38"/>' +
    "</svg>";

  var NAV_ITEMS = [
    { label: "Mission", href: "about.html", key: "about" },
    { label: "How It Works", href: "how-it-works.html", key: "how" },
    { label: "Apply", href: "apply.html", key: "apply" },
    { label: "Research", href: "research.html", key: "research" },
    { label: "FAQ", href: "faq.html", key: "faq" }
  ];

  /* ---------- Header ---------- */
  function buildHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;

    var links = NAV_ITEMS.map(function (item) {
      var current = item.key === PAGE ? ' aria-current="page"' : "";
      return '<li><a href="' + item.href + '"' + current + ">" + item.label + "</a></li>";
    }).join("");

    el.innerHTML =
      '<a class="skip-link" href="#main">Skip to main content</a>' +
      '<div class="container header-inner">' +
      '  <a class="brand" href="index.html" aria-label="Frontline Heroes Foundation — Home">' +
      '    <span class="brand-mark">' + SHIELD_SVG + "</span>" +
      '    <span class="brand-name">Frontline Heroes<br>Foundation<small>Arizona Nonprofit</small></span>' +
      "  </a>" +
      '  <nav class="main-nav" aria-label="Main navigation">' +
      "    <ul>" + links +
      '      <li><a class="btn btn--primary btn--sm" href="donate.html"' + (PAGE === "donate" ? ' aria-current="page"' : "") + ">Donate</a></li>" +
      "    </ul>" +
      "  </nav>" +
      '  <button class="nav-toggle" aria-expanded="false" aria-controls="mobile-nav">' +
      "    Menu" +
      "  </button>" +
      "</div>" +
      '<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">' +
      "  <ul>" + links +
      '    <li><a class="btn btn--primary" href="donate.html">Donate to the Screening Fund</a></li>' +
      "  </ul>" +
      "</nav>";

    var toggle = el.querySelector(".nav-toggle");
    var drawer = el.querySelector(".mobile-nav");
    toggle.addEventListener("click", function () {
      var open = drawer.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  /* ---------- Footer ---------- */
  function buildFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML =
      '<div class="container">' +
      '  <div class="footer-grid">' +
      '    <div class="footer-brand">' +
      '      <a class="brand" href="index.html"><span class="brand-mark">' + SHIELD_SVG + "</span>" +
      '      <span class="brand-name">Frontline Heroes<br>Foundation<small>Arizona-based nonprofit</small></span></a>' +
      "      <p>Funding full-body MRI screening for first responders through a donor-funded grant program, so cancer can be caught earlier.</p>" +
      "      <p>EIN: [EIN placeholder — pending]</p>" +
      '      <div class="footer-social" aria-label="Social media (coming soon)">' +
      '        <a href="#" aria-label="Facebook (placeholder)">FB</a>' +
      '        <a href="#" aria-label="Instagram (placeholder)">IG</a>' +
      '        <a href="#" aria-label="LinkedIn (placeholder)">IN</a>' +
      '        <a href="#" aria-label="X (placeholder)">X</a>' +
      "      </div>" +
      "    </div>" +
      "    <div>" +
      "      <h4>Take Action</h4>" +
      "      <ul>" +
      '        <li><a href="donate.html">Donate</a></li>' +
      '        <li><a href="apply.html">Apply</a></li>' +
      '        <li><a href="donate.html#monthly">After the Call Club</a></li>' +
      '        <li><a href="contact.html">Discuss a Major Gift</a></li>' +
      "      </ul>" +
      "    </div>" +
      "    <div>" +
      "      <h4>Learn</h4>" +
      "      <ul>" +
      '        <li><a href="about.html">Mission</a></li>' +
      '        <li><a href="how-it-works.html">How It Works</a></li>' +
      '        <li><a href="research.html">Research</a></li>' +
      '        <li><a href="faq.html">FAQ</a></li>' +
      '        <li><a href="contact.html">Contact</a></li>' +
      "      </ul>" +
      "    </div>" +
      "    <div>" +
      "      <h4>Contact</h4>" +
      "      <ul>" +
      "        <li>Email: [email placeholder]</li>" +
      "        <li>Phone: [phone placeholder]</li>" +
      "        <li>Mail: [mailing address placeholder], Arizona</li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      '  <div class="footer-disclaimers">' +
      "    <p><strong>Medical disclaimer:</strong> Information on this website is educational and is not medical advice. Frontline Heroes Foundation is not a medical provider and does not diagnose, treat, prescribe, or recommend specific medical care. Screening decisions should be made with a licensed healthcare professional.</p>" +
      "    <p><strong>Donation disclosure:</strong> Donations support the First Responder MRI Fund and related program expenses. Unless otherwise stated in writing by the foundation, donations are pooled and may not be restricted to a specific responder, station, department, medical test, or provider.</p>" +
      "    <p><strong>Tax status:</strong> Frontline Heroes Foundation is an Arizona nonprofit organization. Tax-deductibility information will be updated once IRS recognition is confirmed.</p>" +
      '    <div class="footer-legal">' +
      '      <a href="#">Privacy Policy</a>' +
      '      <a href="#">Terms of Use</a>' +
      '      <a href="faq.html">Medical Disclaimer</a>' +
      '      <a href="faq.html">Donation Disclosure</a>' +
      "    </div>" +
      "    <p style=\"margin-top:18px\">&copy; 2026 Frontline Heroes Foundation. All rights reserved.</p>" +
      "  </div>" +
      "</div>";
  }

  /* ---------- Sticky mobile donate (skip on donate page) ---------- */
  function buildStickyDonate() {
    if (PAGE === "donate") return;
    var bar = document.createElement("div");
    bar.className = "sticky-donate";
    bar.innerHTML = '<a class="btn btn--primary" href="donate.html">Donate to the Screening Fund</a>';
    document.body.appendChild(bar);
  }

  /* ---------- FAQ accordion ---------- */
  function initAccordions() {
    document.querySelectorAll(".faq-item").forEach(function (item) {
      var btn = item.querySelector(".faq-q");
      var panel = item.querySelector(".faq-a");
      if (!btn || !panel) return;
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", function () {
        var open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---------- Donation amount picker ---------- */
  function initAmountPicker() {
    document.querySelectorAll("[data-amount-group]").forEach(function (group) {
      var custom = group.parentElement.querySelector("[data-custom-amount]");
      group.querySelectorAll(".amount-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          group.querySelectorAll(".amount-btn").forEach(function (b) {
            b.classList.remove("is-selected");
            b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("is-selected");
          btn.setAttribute("aria-pressed", "true");
          if (custom && btn.dataset.value !== "custom") custom.value = "";
        });
      });
      if (custom) {
        custom.addEventListener("input", function () {
          group.querySelectorAll(".amount-btn").forEach(function (b) {
            b.classList.remove("is-selected");
            b.setAttribute("aria-pressed", "false");
          });
        });
      }
    });

    document.querySelectorAll(".freq-toggle").forEach(function (toggle) {
      toggle.querySelectorAll("button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          toggle.querySelectorAll("button").forEach(function (b) {
            b.classList.remove("is-selected");
            b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("is-selected");
          btn.setAttribute("aria-pressed", "true");
          var targetSel = btn.dataset.show;
          if (targetSel) {
            (toggle.closest(".form-card") || document).querySelectorAll("[data-freq-panel]").forEach(function (p) {
              p.hidden = p.dataset.freqPanel !== targetSel;
            });
          }
        });
      });
    });
  }

  /* ---------- Form validation (client-side only; backend is a placeholder) ---------- */
  function initForms() {
    document.querySelectorAll("form[data-validate]").forEach(function (form) {
      form.setAttribute("novalidate", "novalidate");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var firstBad = null;
        var summary = form.querySelector(".form-error-summary");

        form.querySelectorAll(".field, .check-field").forEach(function (wrap) {
          var input = wrap.querySelector("input, select, textarea");
          if (!input || !input.hasAttribute("required")) {
            wrap.classList.remove("has-error");
            return;
          }
          var bad = false;
          if (input.type === "checkbox") {
            bad = !input.checked;
          } else if (input.type === "email") {
            bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
          } else {
            bad = input.value.trim() === "";
          }
          wrap.classList.toggle("has-error", bad);
          input.setAttribute("aria-invalid", bad ? "true" : "false");
          if (bad && !firstBad) firstBad = input;
        });

        if (firstBad) {
          if (summary) {
            summary.classList.add("is-visible");
            summary.textContent =
              "Please complete the highlighted fields below. Every required field is marked with an asterisk (*).";
          }
          firstBad.focus();
          return;
        }

        /* PLACEHOLDER: replace with real backend/API submission.
           No data leaves the page in this build. */
        if (summary) summary.classList.remove("is-visible");
        var success = form.parentElement.querySelector(".form-success") ||
                      document.querySelector('[data-success-for="' + form.id + '"]');
        form.hidden = true;
        if (success) {
          success.classList.add("is-visible");
          success.setAttribute("tabindex", "-1");
          success.focus();
          success.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });

      form.querySelectorAll("input, select, textarea").forEach(function (input) {
        input.addEventListener("input", function () {
          var wrap = input.closest(".field, .check-field");
          if (wrap) wrap.classList.remove("has-error");
        });
        input.addEventListener("change", function () {
          var wrap = input.closest(".field, .check-field");
          if (wrap) wrap.classList.remove("has-error");
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildFooter();
    buildStickyDonate();
    initAccordions();
    initAmountPicker();
    initForms();
  });
})();
