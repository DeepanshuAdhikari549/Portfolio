// Set scroll restoration to manual to prevent browser from remembering scroll position
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// Scroll to top on initial page load
window.addEventListener("load", function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
});

// Initialize AOS animation
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// Typing animation for name
const name = "Deepanshu Adhikari";
let i = 0;
const typingEffect = () => {
  if (i < name.length) {
    document.getElementById("typing-name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  } else {
    document.getElementById("typing-name").classList.add("typing-text");
  }
};
typingEffect();

// Initialize EmailJS with NEW public key
(function () {
  emailjs.init("0mYFKT-SZ1rPwcnQO"); // NEW Public Key
})();

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 300);
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme") || "default";
document.body.classList.add(currentTheme + "-mode");
updateThemeToggleIcon(currentTheme);

themeToggle.addEventListener("click", (e) => {
  e.preventDefault();
  const currentTheme = document.body.classList.contains("dark-mode")
    ? "default"
    : "dark";
  setTheme(currentTheme);
});

document.querySelectorAll(".theme-color-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const theme = btn.dataset.theme;
    setTheme(theme);
  });
});

function setTheme(theme) {
  document.body.classList.remove(
    "default-mode",
    "dark-mode",
    "light-blue-mode",
    "purple-mode",
    "green-mode"
  );
  if (theme !== "default") {
    document.body.classList.add(theme + "-mode");
  }
  localStorage.setItem("theme", theme);
  updateThemeToggleIcon(theme);
}

function updateThemeToggleIcon(theme) {
  if (theme === "dark") {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Contact form submission with NEW Service & Template IDs
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  emailjs.sendForm("service_3q4c1kg", "template_e8dhwg1", contactForm).then(
    () => {
      showFormMessage(
        "Thank you! Your message has been sent successfully.",
        "success"
      );
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    },
    (error) => {
      showFormMessage(
        "Oops! Something went wrong. Please try again later.",
        "error"
      );
      console.error("Failed to send message:", error);
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    }
  );
});

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.style.display = "block";
  formMessage.style.backgroundColor =
    type === "success" ? "rgba(40, 167, 69, 0.2)" : "rgba(220, 53, 69, 0.2)";
  formMessage.style.color =
    type === "success" ? "var(--success)" : "var(--danger)";
  setTimeout(() => {
    formMessage.style.display = "none";
  }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  if (
    anchor.classList.contains("theme-toggle") ||
    anchor.classList.contains("theme-color-btn")
  ) {
    return;
  }
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
