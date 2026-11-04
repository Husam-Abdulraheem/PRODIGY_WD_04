/**
 * Core Portfolio Engine: Filtering, Search, Validation & Utility Logic
 */

/**
 * Filter skills by category and query
 * @param {Array} skills
 * @param {string} category
 * @param {string} query
 * @returns {Array}
 */
export function filterSkills(skills, category = 'all', query = '') {
  if (!Array.isArray(skills)) return [];
  const normalizedQuery = (query || '').trim().toLowerCase();

  return skills.filter(skill => {
    const matchesCategory = category === 'all' || skill.category === category;
    const matchesQuery = !normalizedQuery ||
      skill.name.toLowerCase().includes(normalizedQuery) ||
      skill.level.toLowerCase().includes(normalizedQuery) ||
      skill.category.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}

/**
 * Filter projects by category
 * @param {Array} projects
 * @param {string} category
 * @returns {Array}
 */
export function filterProjects(projects, category = 'all') {
  if (!Array.isArray(projects)) return [];
  if (category === 'all') return [...projects];

  return projects.filter(project => project.category === category);
}

/**
 * Retrieve project by ID
 * @param {Array} projects
 * @param {string} id
 * @returns {Object|null}
 */
export function getProjectById(projects, id) {
  if (!Array.isArray(projects) || !id) return null;
  return projects.find(project => project.id === id) || null;
}

/**
 * Validate contact form payload
 * @param {Object} data - { name, email, subject, message }
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export function validateContactForm(data = {}) {
  const errors = {};
  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const subject = (data.subject || '').trim();
  const message = (data.message || '').trim();

  // Name validation
  if (!name) {
    errors.name = 'Please provide your full name.';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (name.length > 60) {
    errors.name = 'Name cannot exceed 60 characters.';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email) {
    errors.email = 'Please provide your email address.';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address (e.g., name@example.com).';
  }

  // Subject validation
  if (!subject) {
    errors.subject = 'Please enter a subject.';
  } else if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  } else if (subject.length > 100) {
    errors.subject = 'Subject cannot exceed 100 characters.';
  }

  // Message validation
  if (!message) {
    errors.message = 'Please write your message.';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  } else if (message.length > 1500) {
    errors.message = 'Message cannot exceed 1500 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Generate mailto URI safely
 * @param {string} recipient
 * @param {string} subject
 * @param {string} body
 * @returns {string}
 */
export function generateMailtoUri(recipient, subject = '', body = '') {
  const encSubject = encodeURIComponent(subject);
  const encBody = encodeURIComponent(body);
  return `mailto:${recipient}?subject=${encSubject}&body=${encBody}`;
}
