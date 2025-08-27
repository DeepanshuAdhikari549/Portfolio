/* =========================================================
   Deepanshu — Portfolio JS (modern, accessible, performant)
   ========================================================= */
(() => {
  "use strict";

  /* =========================
     Utils
     ========================= */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const on = (el, evt, cb, opts) => el && el.addEventListener(evt, cb, opts);
  const off = (el, evt, cb, opts) =>
    el && el.removeEventListener(evt, cb, opts);

  const rafThrottle = (fn) => {
    let ticking = false;
    return (...args) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        fn(...args);
        ticking = false;
      });
    };
  };

  const debounce = (fn, ms = 200) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  };

  /* =========================
     AOS (Animate On Scroll)
     ========================= */
  if (window.AOS) {
    AOS.init({
      duration: prefersReducedMotion ? 1 : 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
      disable: prefersReducedMotion,
    });
  }

  /* =========================
     Header effects + Mobile menu
     ========================= */
  const header = $("#header");
  const hamburger = $("#hamburger");
  const navLinks = $("#navLinks");

  const setHeaderState = () => {
    header?.classList.toggle("scrolled", window.scrollY > 10);
  };
  on(window, "scroll", rafThrottle(setHeaderState));
  setHeaderState();

  // Mobile menu toggle
  const toggleMenu = (open) => {
    const willOpen =
      typeof open === "boolean" ? open : !navLinks.classList.contains("show");
    navLinks.classList.toggle("show", willOpen);
    hamburger.setAttribute("aria-expanded", String(willOpen));
    hamburger.setAttribute("aria-label", willOpen ? "Close menu" : "Open menu");
    if (willOpen) {
      navLinks.querySelector("a")?.focus();
    } else {
      hamburger.focus();
    }
  };
  on(hamburger, "click", () => toggleMenu());
  // Close menu on link click / ESC / outside click
  $$(".nav-links a").forEach((a) => on(a, "click", () => toggleMenu(false)));
  on(document, "keydown", (e) => {
    if (e.key === "Escape") toggleMenu(false);
  });
  on(document, "click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target))
      toggleMenu(false);
  });

  /* =========================
     Active nav link on scroll
     ========================= */
  const sections = $$(
    "#hero, #about, #skills, #education, #projects, #contact"
  );
  const linkMap = new Map(
    $$(".nav-links a").map((a) => [a.getAttribute("href"), a])
  );

  const highlightNav = () => {
    let current = "#hero";
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 90 && rect.bottom >= 140) {
        current = `#${sec.id}`;
        break;
      }
    }
    linkMap.forEach((el) => el.classList.remove("active"));
    linkMap.get(current)?.classList.add("active");
  };
  on(window, "scroll", rafThrottle(highlightNav));
  highlightNav();

  /* =========================
     Dynamic Year
     ========================= */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================
     Counters (About stats)
     ========================= */
  const counters = $$(".counter");
  if (counters.length) {
    const animateCount = (el) => {
      const total = Number(el.dataset.count || 0);
      if (!Number.isFinite(total) || prefersReducedMotion) {
        el.textContent = total;
        return;
      }
      const duration = 900; // ms
      const start = performance.now();
      const from = 0;
      const step = (now) => {
        const p = clamp((now - start) / duration, 0, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(from + (total - from) * eased);
        el.textContent = String(val);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    counters.forEach((c) => io.observe(c));
  }

  /* =========================
     EmailJS (with accessible status)
     ========================= */
  const contactForm = $("#contactForm");
  const formMessage = $("#formMessage");

  const setFormMsg = (text, type = "success") => {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.style.color = type === "success" ? "#22c55e" : "#ff4d6d";
  };

  if (contactForm && window.emailjs) {
    try {
      emailjs.init("0mYFKT-SZ1rPwcnQO");
    } catch (_) {}

    on(contactForm, "submit", async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector("button[type='submit']");
      const prev = btn.innerHTML;
      btn.disabled = true;
      btn.setAttribute("aria-busy", "true");
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

      try {
        await emailjs.sendForm(
          "service_3q4c1kg",
          "template_e8dhwg1",
          contactForm
        );
        setFormMsg("Thanks! Your message has been sent ✅", "success");
        contactForm.reset();
      } catch (err) {
        console.error(err);
        setFormMsg("Oops! Something went wrong. Please try again.", "error");
      } finally {
        btn.disabled = false;
        btn.removeAttribute("aria-busy");
        btn.innerHTML = prev;
      }
    });
  }

  /* =========================
     Back to top smooth scroll
     ========================= */
  const topBtn = $(".top");
  on(topBtn, "click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });

  /* =========================
     Scroll progress bar
     ========================= */
  const bar = $("#scrollbar");
  const updateBar = () => {
    if (!bar) return;
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.width = `${scrolled * 100}%`;
  };
  on(window, "scroll", rafThrottle(updateBar));
  updateBar();

  /* =========================
     Tilt on cards (fallback safe)
     ========================= */
  if (window.VanillaTilt && !prefersReducedMotion) {
    VanillaTilt.init($$(".tilt"), {
      max: 12,
      speed: 400,
      glare: true,
      "max-glare": 0.25,
      scale: 1.02,
    });
  }

  /* =========================
     Smooth anchor scroll with header offset
     ========================= */
  const headerOffset = () => 70;
  $$('a[href^="#"]').forEach((a) => {
    on(a, "click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset();
      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      history.pushState(null, "", id);
    });
  });

  /* =========================
     Skills filter chips
     ========================= */
  const chips = $$(".chip");
  const skillCards = $$(".skill-card");
  const setActiveChip = (btn) => {
    chips.forEach((c) => c.classList.toggle("active", c === btn));
  };
  chips.forEach((btn) => {
    on(btn, "click", () => {
      const scope = btn.dataset.scope || "all";
      setActiveChip(btn);
      skillCards.forEach((card) => {
        const show = scope === "all" || card.dataset.scope === scope;
        card.style.display = show ? "" : "none";
      });
    });
  });

  /* =========================
     Lazy load images (native + IO fallback)
     ========================= */
  const lazyImgs = $$('img[loading="lazy"]');
  if (
    "loading" in HTMLImageElement.prototype === false &&
    "IntersectionObserver" in window
  ) {
    const imgIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          const src = img.getAttribute("data-src") || img.getAttribute("src");
          if (src) img.src = src;
          imgIO.unobserve(img);
        });
      },
      { rootMargin: "200px 0px" }
    );
    lazyImgs.forEach((img) => imgIO.observe(img));
  }

  /* =========================
     Particle Background (canvas)
     ========================= */
  const canvas = $("#bgCanvas");
  const ctx = canvas?.getContext("2d");
  let W = 0,
    H = 0,
    particles = [];
  let running = true;
  const maxDist = 140;
  const PARTICLE_COUNT = 90;

  const resize = () => {
    if (!canvas) return;
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  };
  resize();
  on(window, "resize", debounce(resize, 150));

  const initParticles = (count = PARTICLE_COUNT) => {
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 1.2,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      c: Math.random() > 0.6 ? "rgba(255,183,3,.9)" : "rgba(255,122,24,.9)",
    }));
  };
  if (canvas && ctx) initParticles();

  const draw = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);

    // particles
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
      if (p.y < -5) p.y = H + 5;
      if (p.y > H + 5) p.y = -5;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = 0.8;
      ctx.fill();
    }

    // lines
    ctx.globalAlpha = 1;
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x,
          dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < maxDist * maxDist) {
          const op = 1 - d2 / (maxDist * maxDist);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(255,183,3,${op * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  };

  const loop = () => {
    if (!running || prefersReducedMotion) return;
    draw();
    requestAnimationFrame(loop);
  };
  if (!prefersReducedMotion) loop();

  // Pause when tab hidden for battery
  on(document, "visibilitychange", () => {
    running = !document.hidden;
    if (running && !prefersReducedMotion) loop();
  });

  /* =========================
     Mouse parallax on hero rings
     ========================= */
  const r1 = $(".r1");
  const r2 = $(".r2");
  if (!prefersReducedMotion && r1 && r2) {
    const parallax = rafThrottle((e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      r1.style.transform = `translate(${x}px, ${y}px)`;
      r2.style.transform = `translate(${-x}px, ${-y}px)`;
    });
    on(document, "mousemove", parallax);
  }

  /* =========================
     Keyboard focus ring helper (visual)
     ========================= */
  let hadKeyboardEvent = false;
  on(
    document,
    "keydown",
    (e) => {
      if (e.key === "Tab") {
        if (!hadKeyboardEvent) {
          document.documentElement.classList.add("user-is-tabbing");
          hadKeyboardEvent = true;
        }
      }
    },
    true
  );
  on(
    document,
    "mousedown",
    () => {
      if (hadKeyboardEvent) {
        document.documentElement.classList.remove("user-is-tabbing");
        hadKeyboardEvent = false;
      }
    },
    true
  );

  /* =========================
Guard: prevent duplicate hash-scroll on load
     ========================= */
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) {
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset();
      setTimeout(() => window.scrollTo({ top, behavior: "auto" }), 0);
    }
  }
})();

// Always scroll to top when page is loaded/refreshed
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
