// Global Variables
let currentTheme = localStorage.getItem("theme") || "dark";
let currentColorTheme = localStorage.getItem("colorTheme") || "blue";

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializePortfolio();
});

// Load EmailJS SDK
(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js";
  script.onload = () => {
    emailjs.init("0mYFKT-SZ1rPwcnQO"); // Your Public Key
    console.log("EmailJS initialized");
  };
  document.body.appendChild(script);
})();

function initializePortfolio() {
  // Initialize themes
  setTheme(currentTheme);
  setColorTheme(currentColorTheme);

  // Initialize all components
  initializeLoader();
  initializeNavigation();
  initializeTypingEffect();
  initializeScrollEffects();
  initializeThemeToggle();
  initializeColorThemeToggle();
  initializeMobileMenu();
  initializeImageToggle();
  initializeResumeModal();
  initializeContactForm();
  initializeScrollToTop();
  initializeIntersectionObserver();
  initializeFormValidation();
  initializeA11y();

  // Smooth scroll to home on page load
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 100);
}// Page Loader
function initializeLoader() {
  const loader = document.getElementById("pageLoader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 1500);
  });
}

// Theme Management
function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    themeToggle.innerHTML =
      theme === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
  }

  localStorage.setItem("theme", theme);
  currentTheme = theme;
}

// Color Theme Management
function setColorTheme(colorTheme) {
  document.body.setAttribute("data-color-theme", colorTheme);
  localStorage.setItem("colorTheme", colorTheme);
  currentColorTheme = colorTheme;

  // Update active theme button
  const themeButtons = document.querySelectorAll(".theme-btn");
  themeButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-theme") === colorTheme) {
      btn.classList.add("active");
    }
  });
}

function initializeThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  }
}

function initializeColorThemeToggle() {
  const themeButtons = document.querySelectorAll(".theme-btn");

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const newColorTheme = btn.getAttribute("data-theme");
      setColorTheme(newColorTheme);
    });
  });
}
// Fixed Typing Effect - Only Software Engineer and Full Stack Developer
function initializeTypingEffect() {
  const typingElement = document.getElementById("typingText");
  if (!typingElement) return;

  const roles = ["Software Engineer", "Full Stack Developer"];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let timeout = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentRole.length) {
      timeout = 3000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      timeout = 500;
    }

    setTimeout(typeEffect, timeout);
  }

  typeEffect();
}

// Enhanced Navigation
function initializeNavigation() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active link highlighting
  const sections = document.querySelectorAll("section");

  function updateActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop - 200 &&
        window.scrollY < sectionTop + sectionHeight - 200
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href && href.slice(1) === current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Initial call
}
// Mobile Menu
function initializeMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });

    // Close menu on link click
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    // Close menu on outside click
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }
}

// Fixed Image Toggle - No rotation, just shape change
function initializeImageToggle() {
  const imageToggle = document.getElementById("imageToggle");
  const imageContainer = document.getElementById("imageContainer");

  if (imageToggle && imageContainer) {
    let isCircle = false;

    imageToggle.addEventListener("click", () => {
      isCircle = !isCircle;
      imageContainer.classList.toggle("circle", isCircle);
      imageToggle.innerHTML = isCircle
        ? '<i class="fas fa-square"></i> Box Shape'
        : '<i class="fas fa-circle"></i> Circle Shape';
    });
  }
}// Resume Modal
function initializeResumeModal() {
  const resumeBtn = document.getElementById("resumeBtn");
  const resumeModal = document.getElementById("resumeModal");
  const closeModal = document.getElementById("closeModal");

  if (resumeBtn && resumeModal && closeModal) {
    resumeBtn.addEventListener("click", () => {
      resumeModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    closeModal.addEventListener("click", () => {
      closeResumeModal();
    });

    // Close on outside click
    resumeModal.addEventListener("click", (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && resumeModal.classList.contains("active")) {
        closeResumeModal();
      }
    });
  }

  function closeResumeModal() {
    resumeModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}// Fixed Contact Form with proper email functionality
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  
  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      showFormMessage("Sending your message...", "loading");

      const formData = {
        from_name: contactForm.name.value.trim(),
        reply_to: contactForm.email.value.trim(),
        message: contactForm.message.value.trim(),
      };

      try {
        await emailjs.send("service_3q4c1kg", "template_e8dhwg1", formData);
        showFormMessage("Message sent successfully! Thank you.", "success");
        contactForm.reset();
      } catch (error) {
        console.error("EmailJS error:", error);
        showFormMessage(
          "Failed to send message. Please try again or email directly: deepanshuadhikari549@gmail.com",
          "error"
        );
      } finally {
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  }

  function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = "block";

    if (type === "success" || type === "error") {
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 8000);
    }
  }
}
// Fixed Email click handlers
function setupEmailHandlers() {
  // All email links should open Gmail
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const email = this.getAttribute("href").replace("mailto:", "");
      window.open(
        `https://mail.google.com/mail/?view=cm&to=${email}`,
        "_blank"
      );
    });
  });

  // Contact items with email
  const emailContactItem = document.querySelector(".contact-item");
  if (emailContactItem) {
    emailContactItem.addEventListener("click", function () {
      window.open(
        "https://mail.google.com/mail/?view=cm&to=deepanshuadhikari549@gmail.com",
        "_blank"
      );
    });
  }
}

// Scroll Effects
function initializeScrollEffects() {
  // Scroll to top button
  initializeScrollToTop();
  // Setup email handlers
  setupEmailHandlers();
}

function initializeScrollToTop() {
  const scrollTop = document.getElementById("scrollTop");

  if (scrollTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTop.classList.add("active");
      } else {
        scrollTop.classList.remove("active");
      }
    });

    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}
// Intersection Observer for animations
function initializeIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll(
    ".about-card, .skill-item, .project-card, .education-card, .vision-card, .contact-item"
  );

  animatableElements.forEach((el) => {
    observer.observe(el);
  });
}

// Enhanced accessibility features
function initializeA11y() {
  // Add skip link
  const skipLink = document.createElement("a");
  skipLink.href = "#home";
  skipLink.textContent = "Skip to main content";
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    transition: top 0.3s;
  `;

  skipLink.addEventListener("focus", () => {
    skipLink.style.top = "6px";
  });

  skipLink.addEventListener("blur", () => {
    skipLink.style.top = "-40px";
  });

  document.body.insertBefore(skipLink, document.body.firstChild);

  // Enhance focus indicators
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation");
  });
}

// Enhanced form validation
function initializeFormValidation() {
  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach((input) => {
    input.addEventListener("blur", validateField);
    input.addEventListener("input", clearValidationError);
  });

  function validateField(e) {
    const field = e.target;
    const value = field.value.trim();

    // Remove existing error styling
    field.classList.remove("error");

    // Basic validation
    if (field.required && !value) {
      showFieldError(field, "This field is required");
      return false;
    }

    if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showFieldError(field, "Please enter a valid email address");
        return false;
      }
    }

    return true;
  }

  function showFieldError(field, message) {
    field.classList.add("error");

    // Create or update error message
    let errorMsg = field.parentNode.querySelector(".error-message");
    if (!errorMsg) {
      errorMsg = document.createElement("div");
      errorMsg.className = "error-message";
      errorMsg.style.cssText = `
        color: var(--danger);
        font-size: 0.85rem;
        margin-top: 0.25rem;
      `;
      field.parentNode.appendChild(errorMsg);
    }

    errorMsg.textContent = message;
  }

  function clearValidationError(e) {
    const field = e.target;
    field.classList.remove("error");

    const errorMsg = field.parentNode.querySelector(".error-message");
    if (errorMsg) {
      errorMsg.remove();
    }
  }
}

// Enhanced smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId && targetId !== "#") {
      const target = document.querySelector(targetId);
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  // Escape key closes modals
  if (e.key === "Escape") {
    const activeModal = document.querySelector(".resume-modal.active");
    if (activeModal) {
      activeModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  // Arrow keys for navigation
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "ArrowDown":
        e.preventDefault();
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        break;
    }
  }
});

// Performance optimization - debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimize scroll listeners
const optimizedScrollHandler = debounce(() => {
  requestAnimationFrame(() => {
    // Scroll-dependent updates go here
  });
}, 10);

window.addEventListener("scroll", optimizedScrollHandler, { passive: true });

// Add error styles
const errorStyles = document.createElement("style");
errorStyles.textContent = `
  .form-group input.error,
  .form-group textarea.error {
    border-color: var(--danger) !important;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
  }
  
  .keyboard-navigation *:focus {
    outline: 2px solid var(--primary) !important;
    outline-offset: 2px !important;
  }
  
  .animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(errorStyles);

// Console welcome message
console.log(`
  🚀 Welcome to Deepanshu's Portfolio!
  
  Built with:
  - Vanilla JavaScript (ES6+)
  - Modern CSS (Custom Properties, Grid, Flexbox)
  - Responsive Design
  - Accessibility Features
  - Performance Optimizations
  
  Portfolio Features:
  ✨ Dark/Light Theme Toggle
  🎨 4 Color Themes (Blue, Green, Purple, Orange)
  📱 Fully Responsive
  ♿ Accessibility Support
  📧 Working Email Integration
  🔄 Interactive Elements
  
  Contact: deepanshuadhikari549@gmail.com
  GitHub: github.com/DeepanshuAdhikari549
`);


// Certifications Section JavaScript

// Initialize certifications functionality
function initializeCertifications() {
  initializeCertificationCards();
  initializeCertificationStats();
  initializeCertificationModal();
  initializeProgressTracking();
}

// Certificate card interactions
function initializeCertificationCards() {
  const certificationCards = document.querySelectorAll('.certification-card:not(.coming-soon)');
  
  certificationCards.forEach(card => {
    // Add hover effects
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click effect for certificate details
    card.addEventListener('click', (e) => {
      // Prevent triggering when clicking on buttons
      if (!e.target.closest('.cert-btn')) {
        showCertificateDetails(card);
      }
    });
  });
  
  // Handle verify certificate buttons
  const verifyButtons = document.querySelectorAll('.verify-btn');
  verifyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleCertificateVerification(btn);
    });
  });
}

// Show certificate details in a modal or expanded view
function showCertificateDetails(card) {
  const certTitle = card.querySelector('h3').textContent;
  const certProvider = card.querySelector('.certification-provider span').textContent;
  const certDate = card.querySelector('.certification-date span').textContent;
  const certDescription = card.querySelector('p').textContent;
  const skills = Array.from(card.querySelectorAll('.skill-badge')).map(skill => skill.textContent);
  
  // Create modal content
  const modalContent = `
    <div class="cert-modal-overlay" id="certModal">
      <div class="cert-modal-content">
        <div class="cert-modal-header">
          <h3>${certTitle}</h3>
          <button class="cert-modal-close" id="closeCertModal">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="cert-modal-body">
          <div class="cert-modal-info">
            <div class="cert-info-item">
              <i class="fas fa-university"></i>
              <span><strong>Provider:</strong> ${certProvider}</span>
            </div>
            <div class="cert-info-item">
              <i class="fas fa-calendar"></i>
              <span><strong>Completed:</strong> ${certDate}</span>
            </div>
          </div>
          <div class="cert-modal-description">
            <h4>About this Certification</h4>
            <p>${certDescription}</p>
          </div>
          <div class="cert-modal-skills">
            <h4>Skills Gained</h4>
            <div class="modal-skills-list">
              ${skills.map(skill => `<span class="modal-skill-badge">${skill}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="cert-modal-footer">
          <button class="cert-btn verify-btn" onclick="handleCertificateVerification(this)">
            <i class="fas fa-certificate"></i> Verify Certificate
          </button>
          <button class="cert-btn secondary-btn" onclick="closeCertificateModal()">
            <i class="fas fa-times"></i> Close
          </button>
        </div>
      </div>
    </div>
  `;
  
  // Add modal to body
  document.body.insertAdjacentHTML('beforeend', modalContent);
  
  // Add modal styles
  addCertModalStyles();
  
  // Show modal
  const modal = document.getElementById('certModal');
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
  
  // Add event listeners
  document.getElementById('closeCertModal').addEventListener('click', closeCertificateModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCertificateModal();
    }
  });
}

// Close certificate modal
function closeCertificateModal() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
    }, 300);
  }
}

// Handle certificate verification
function handleCertificateVerification(button) {
  const card = button.closest('.certification-card');
  const certTitle = card.querySelector('h3').textContent;
  
  // Show loading state
  const originalText = button.innerHTML;
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
  button.disabled = true;
  
  // Simulate verification process
  setTimeout(() => {
    // Reset button
    button.innerHTML = originalText;
    button.disabled = false;
    
    // Show success message
    showNotification(
      'Certificate Verified!',
      `${certTitle} certificate has been successfully verified.`,
      'success'
    );
    
    // In a real implementation, this would link to the actual certificate
    // For now, we'll just show a success message
  }, 2000);
}

// Initialize certification stats with animation
function initializeCertificationStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  // Animate numbers when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStatNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  
  statNumbers.forEach(stat => {
    observer.observe(stat);
  });
}

// Animate stat numbers
function animateStatNumber(element) {
  const target = element.textContent;
  const isPercentage = target.includes('%');
  const numericTarget = parseInt(target.replace('%', ''));
  
  let current = 0;
  const increment = numericTarget / 50; // 50 steps for smooth animation
  
  const timer = setInterval(() => {
    current += increment;
    
    if (current >= numericTarget) {
      current = numericTarget;
      clearInterval(timer);
    }
    
    element.textContent = Math.floor(current) + (isPercentage ? '%' : '');
  }, 40);
}

// Initialize progress tracking for upcoming certifications
function initializeProgressTracking() {
  const upcomingItems = document.querySelectorAll('.upcoming-item');
  
  upcomingItems.forEach((item, index) => {
    // Add progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'upcoming-progress';
    progressBar.innerHTML = `
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${getRandomProgress()}%"></div>
      </div>
      <span class="progress-text">In Progress</span>
    `;
    
    item.appendChild(progressBar);
    
    // Add hover effect for progress update
    item.addEventListener('mouseenter', () => {
      updateProgress(progressBar.querySelector('.progress-fill'));
    });
  });
}

// Get random progress for upcoming certifications
function getRandomProgress() {
  const progressValues = [15, 30, 45, 60, 75];
  return progressValues[Math.floor(Math.random() * progressValues.length)];
}

// Update progress animation
function updateProgress(progressFill) {
  const currentWidth = parseInt(progressFill.style.width);
  const newWidth = Math.min(currentWidth + 10, 85);
  
  progressFill.style.width = newWidth + '%';
  
  if (newWidth >= 80) {
    progressFill.parentElement.nextElementSibling.textContent = 'Almost Complete!';
  }
}

// Certificate modal functionality
function initializeCertificationModal() {
  // Add keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('certModal');
      if (modal && modal.classList.contains('active')) {
        closeCertificateModal();
      }
    }
  });
}

// Show notification
function showNotification(title, message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <div class="notification-title">
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        ${title}
      </div>
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close">
      <i class="fas fa-times"></i>
    </button>
  `;
  
  // Add to body
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    removeNotification(notification);
  }, 5000);
  
  // Add close button functionality
  notification.querySelector('.notification-close').addEventListener('click', () => {
    removeNotification(notification);
  });
}

// Remove notification
function removeNotification(notification) {
  notification.classList.remove('show');
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// Add modal styles dynamically
function addCertModalStyles() {
  if (document.getElementById('certModalStyles')) return;
  
  const styles = document.createElement('style');
  styles.id = 'certModalStyles';
  styles.textContent = `
    .cert-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-out;
    }
    
    .cert-modal-overlay.active {
      opacity: 1;
      visibility: visible;
    }
    
    .cert-modal-content {
      background: var(--bg-tertiary);
      border: 1px solid var(--border);
      border-radius: 20px;
      width: 90%;
      max-width: 600px;
      max-height: 80vh;
      overflow-y: auto;
      transform: scale(0.8);
      transition: transform 0.3s ease-out;
    }
    
    .cert-modal-overlay.active .cert-modal-content {
      transform: scale(1);
    }
    
    .cert-modal-header {
      padding: 2rem 2rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
    }
    
    .cert-modal-header h3 {
      margin: 0;
      color: var(--text-primary);
      font-size: 1.5rem;
    }
    
    .cert-modal-close {
      background: none;
      border: none;
      color: var(--text-secondary);
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      transition: all 0.2s;
    }
    
    .cert-modal-close:hover {
      background: var(--bg-secondary);
      color: var(--primary);
    }
    
    .cert-modal-body {
      padding: 2rem;
    }
    
    .cert-modal-info {
      margin-bottom: 2rem;
    }
    
    .cert-info-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      color: var(--text-secondary);
    }
    
    .cert-info-item i {
      color: var(--primary);
      width: 20px;
    }
    
    .cert-modal-description {
      margin-bottom: 2rem;
    }
    
    .cert-modal-description h4,
    .cert-modal-skills h4 {
      color: var(--text-primary);
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    
    .cert-modal-description p {
      color: var(--text-muted);
      line-height: 1.6;
    }
    
    .modal-skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .modal-skill-badge {
      padding: 0.4rem 0.8rem;
      background: var(--primary);
      color: white;
      border-radius: 15px;
      font-size: 0.8rem;
    }
    
    .cert-modal-footer {
      padding: 1rem 2rem 2rem;
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }
    
    .secondary-btn {
      background: var(--bg-secondary);
      color: var(--text-secondary);
      border: 1px solid var(--border);
    }
    
    .secondary-btn:hover {
      background: var(--bg-tertiary);
      border-color: var(--primary);
      color: var(--text-primary);
    }
  `;
  document.head.appendChild(styles);
}