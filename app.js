/**
 * Application Entrypoint & Interactive DOM Orchestrator
 * Personal Developer Portfolio - Husam Abdulraheem
 */

import {
  PORTFOLIO_OWNER,
  TYPEWRITER_HEADLINES,
  ABOUT_ME,
  SKILL_CATEGORIES,
  SKILLS,
  PROJECT_CATEGORIES,
  PROJECTS,
  ACCOMPLISHMENTS
} from './js/data.js';

import {
  filterSkills,
  filterProjects,
  getProjectById,
  validateContactForm,
  generateMailtoUri
} from './js/portfolio-engine.js';

import {
  getInitialTheme,
  applyTheme,
  toggleTheme
} from './js/theme.js';

// Global state
let currentSkillCategory = 'all';
let currentSkillQuery = '';
let currentProjectCategory = 'all';

/**
 * Initialize application on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initTypewriter();
  initHeroContent();
  initAboutSection();
  initSkillsSection();
  initProjectsSection();
  initAccomplishmentsSection();
  initContactSection();
  initModal();
  initScrollspyAndBackToTop();
});

/* ==========================================================================
   Theme Management
   ========================================================================== */
function initTheme() {
  applyTheme(getInitialTheme());

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const newTheme = toggleTheme();
      showToast(`Switched to ${newTheme} mode`);
    });
  });
}

/* ==========================================================================
   Navigation
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      toggleBtn.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    // Close mobile menu on clicking any link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '&#9776;';
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '&#9776;';
      }
    });
  }
}

/* ==========================================================================
   Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  let currentIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseDuration = 1800;

  function type() {
    const fullText = TYPEWRITER_HEADLINES[currentIdx];

    if (isDeleting) {
      charIdx--;
      target.textContent = charIdx === 0 ? '\u00A0' : fullText.substring(0, charIdx);
    } else {
      charIdx++;
      target.textContent = fullText.substring(0, charIdx);
    }

    let nextDelay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIdx === fullText.length) {
      nextDelay = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      currentIdx = (currentIdx + 1) % TYPEWRITER_HEADLINES.length;
      nextDelay = 400;
    }

    setTimeout(type, nextDelay);
  }

  type();
}

/* ==========================================================================
   Hero Content & Stats
   ========================================================================== */
function initHeroContent() {
  const statsContainer = document.getElementById('stats-grid');
  if (statsContainer) {
    statsContainer.innerHTML = PORTFOLIO_OWNER.stats.map(stat => `
      <div class="stat-card">
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   About Section & Tabs
   ========================================================================== */
function initAboutSection() {
  // Render principles
  const principlesContainer = document.getElementById('principles-grid');
  if (principlesContainer) {
    principlesContainer.innerHTML = ABOUT_ME.principles.map(p => `
      <div class="principle-card">
        <h4 class="principle-title">
          <span style="color: var(--brand-accent);">◈</span> ${p.title}
        </h4>
        <p class="principle-desc">${p.description}</p>
      </div>
    `).join('');
  }

  // Render Experience Timeline
  const expTimeline = document.getElementById('experience-timeline');
  if (expTimeline) {
    expTimeline.innerHTML = ABOUT_ME.experience.map(job => `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${job.role}</h3>
              <div class="timeline-company">${job.company} · ${job.location}</div>
            </div>
            <span class="timeline-period">${job.period}</span>
          </div>
          <ul class="timeline-list">
            ${job.achievements.map(ach => `<li>${ach}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // Render Education Timeline
  const eduTimeline = document.getElementById('education-timeline');
  if (eduTimeline) {
    eduTimeline.innerHTML = ABOUT_ME.education.map(edu => `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${edu.degree}</h3>
              <div class="timeline-company">${edu.institution}</div>
            </div>
            <span class="timeline-period">${edu.period}</span>
          </div>
          <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-top: 0.5rem;">
            <strong>Credential:</strong> ${edu.grade}<br/>
            ${edu.details}
          </p>
        </div>
      </div>
    `).join('');
  }

  // Tab switcher
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(btn.dataset.target);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* ==========================================================================
   Skills Section (Filter & Search)
   ========================================================================== */
function initSkillsSection() {
  const chipsContainer = document.getElementById('skills-chips');
  const searchInput = document.getElementById('skills-search');
  const skillsGrid = document.getElementById('skills-grid');

  if (chipsContainer) {
    chipsContainer.innerHTML = SKILL_CATEGORIES.map(cat => `
      <button class="chip ${cat.id === currentSkillCategory ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    chipsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;

      chipsContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      currentSkillCategory = btn.dataset.category;
      renderSkills();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSkillQuery = e.target.value;
      renderSkills();
    });
  }

  function renderSkills() {
    if (!skillsGrid) return;
    const filtered = filterSkills(SKILLS, currentSkillCategory, currentSkillQuery);

    if (filtered.length === 0) {
      skillsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; color: var(--text-secondary);">
          <p style="font-size: 1.125rem;">No technologies matched your query "<strong>${currentSkillQuery}</strong>".</p>
          <button class="btn btn-secondary btn-sm" id="reset-skills-search" style="margin-top: 1rem;">Reset Filter</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-skills-search');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          currentSkillQuery = '';
          currentSkillCategory = 'all';
          chipsContainer.querySelectorAll('.chip').forEach(c => {
            c.classList.toggle('active', c.dataset.category === 'all');
          });
          renderSkills();
        });
      }
      return;
    }

    skillsGrid.innerHTML = filtered.map(skill => `
      <div class="skill-card ${skill.highlight ? 'card-interactive' : ''}">
        <div class="skill-header">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-level-badge">${skill.level}</span>
        </div>
        <div class="skill-meta">
          <span>Category: <strong style="color: var(--text-secondary); text-transform: capitalize;">${skill.category}</strong></span>
          <span>${skill.experience}</span>
        </div>
      </div>
    `).join('');
  }

  renderSkills();
}

/* ==========================================================================
   Projects Section
   ========================================================================== */
function initProjectsSection() {
  const chipsContainer = document.getElementById('project-chips');
  const projectsGrid = document.getElementById('projects-grid');

  if (chipsContainer) {
    chipsContainer.innerHTML = PROJECT_CATEGORIES.map(cat => `
      <button class="chip ${cat.id === currentProjectCategory ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    chipsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;

      chipsContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      currentProjectCategory = btn.dataset.category;
      renderProjects();
    });
  }

  function renderProjects() {
    if (!projectsGrid) return;
    const filtered = filterProjects(PROJECTS, currentProjectCategory);

    projectsGrid.innerHTML = filtered.map(proj => `
      <article class="project-card">
        <div class="project-header-bar">
          <span class="project-category-tag">${proj.category}</span>
          ${proj.featured ? '<span class="badge">Featured</span>' : ''}
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-summary">${proj.summary}</p>
          <div class="project-badges">
            ${proj.badges.map(b => `<span class="badge">${b}</span>`).join('')}
          </div>
        </div>
        <div class="project-footer">
          <button class="btn btn-outline btn-sm view-case-study" data-project-id="${proj.id}">
            Case Study
          </button>
          <div style="display: flex; gap: 0.5rem;">
            ${proj.github ? `
              <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View Source Code">
                GitHub
              </a>
            ` : ''}
            ${proj.demo ? `
              <a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="View Live Project">
                Live Preview
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `).join('');
  }

  renderProjects();

  // Attach event listener for case study buttons
  if (projectsGrid) {
    projectsGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.view-case-study');
      if (!btn) return;
      const projId = btn.dataset.projectId;
      const project = getProjectById(PROJECTS, projId);
      if (project) {
        openProjectModal(project);
      }
    });
  }
}

/* ==========================================================================
   Accomplishments Section
   ========================================================================== */
function initAccomplishmentsSection() {
  const container = document.getElementById('accomplishments-grid');
  if (!container) return;

  container.innerHTML = ACCOMPLISHMENTS.map(acc => `
    <div class="accomplishment-card">
      <div class="accomplishment-header">
        <div>
          <h3 class="accomplishment-title">${acc.title}</h3>
          <span class="accomplishment-issuer">${acc.issuer}</span>
        </div>
        <span class="accomplishment-year">${acc.year}</span>
      </div>
      <p class="accomplishment-desc">${acc.description}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   Modal Dialog
   ========================================================================== */
let modalOverlay;
let modalContent;
let modalCloseBtn;

function initModal() {
  modalOverlay = document.getElementById('project-modal');
  modalContent = document.getElementById('modal-details');
  modalCloseBtn = document.getElementById('modal-close-btn');

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }
}

function openProjectModal(project) {
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="badge" style="margin-bottom: 0.5rem; background: var(--color-yellow); color: #000;">[ ${project.category.toUpperCase()} ]</span>
      <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem; text-transform: uppercase;">${project.title}</h2>
      <div class="project-badges" style="margin-top: 0.5rem;">
        ${project.badges.map(b => `<span class="badge">${b}</span>`).join('')}
      </div>
    </div>

    <div style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
      <p>${project.fullDescription}</p>
    </div>

    ${project.metrics && project.metrics.length ? `
      <div style="margin-bottom: 1.5rem; background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-sm); border: var(--border-width) solid var(--border-color); box-shadow: var(--shadow-sm);">
        <strong style="color: var(--text-primary); display: block; margin-bottom: 0.5rem; font-family: var(--font-display); text-transform: uppercase;">// Key Engineering Highlights:</strong>
        <ul style="list-style: square; margin-left: 1.25rem; color: var(--text-secondary); font-size: 0.9375rem; font-family: var(--font-mono);">
          ${project.metrics.map(m => `<li>${m}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
      ${project.demo ? `
        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          Explore Live
        </a>
      ` : ''}
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          View Repository on GitHub
        </a>
      ` : ''}
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   Contact Section & Form Validation
   ========================================================================== */
function initContactSection() {
  const form = document.getElementById('contact-form');
  const copyBtn = document.getElementById('copy-email-btn');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('message-char-count');

  // Copy email to clipboard
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(PORTFOLIO_OWNER.email);
        showToast('Email address copied to clipboard!', 'success');
      } catch (err) {
        // Fallback
        showToast(`Contact: ${PORTFOLIO_OWNER.email}`);
      }
    });
  }

  // Live character counter
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      charCounter.textContent = `${messageInput.value.length} / 1500`;
    });
  }

  // Form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = {
        name: form.elements['name']?.value || '',
        email: form.elements['email']?.value || '',
        subject: form.elements['subject']?.value || '',
        message: form.elements['message']?.value || ''
      };

      const result = validateContactForm(formData);

      // Clear previous error states
      form.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));
      form.querySelectorAll('.form-error').forEach(el => {
        el.textContent = '';
        el.classList.remove('visible');
      });

      if (!result.isValid) {
        for (const [field, message] of Object.entries(result.errors)) {
          const input = form.elements[field];
          const errEl = document.getElementById(`error-${field}`);
          if (input) input.classList.add('is-invalid');
          if (errEl) {
            errEl.textContent = message;
            errEl.classList.add('visible');
          }
        }
        showToast('Please correct the errors in the form.', 'error');
        return;
      }

      // Success: generate mailto link option and show confirmation
      showToast('Thank you! Your message is ready to send.', 'success');
      const mailtoUrl = generateMailtoUri(
        PORTFOLIO_OWNER.email,
        `[Portfolio Inquiry] ${formData.subject}`,
        `Hello Husam,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      );

      // Reset form
      form.reset();
      if (charCounter) charCounter.textContent = '0 / 1500';

      // Open email client
      window.open(mailtoUrl, '_blank');
    });
  }
}

/* ==========================================================================
   Scrollspy & Back to Top
   ========================================================================== */
function initScrollspyAndBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  const icon = type === 'success' ? '✔' : (type === 'error' ? '✖' : 'ℹ');
  toast.innerHTML = `
    <span style="font-weight: 700; color: var(--brand-primary);">${icon}</span>
    <span style="font-size: 0.9375rem; flex: 1;">${message}</span>
  `;

  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 3500);
}
