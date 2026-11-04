/**
 * Theme Manager: Dark / Light Mode with Local Storage & OS Preference Sync
 */

export const THEME_STORAGE_KEY = 'husam_portfolio_theme';
export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
};

/**
 * Get the initial theme based on localStorage or OS preference
 * @returns {string} 'dark' | 'light'
 */
export function getInitialTheme() {
  if (typeof window === 'undefined') return THEMES.DARK;

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === THEMES.DARK || saved === THEMES.LIGHT) {
      return saved;
    }
  } catch (err) {
    console.warn('localStorage not accessible for theme persistence', err);
  }

  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return THEMES.LIGHT;
  }

  return THEMES.DARK;
}

/**
 * Apply theme to document element
 * @param {string} theme
 */
export function applyTheme(theme) {
  if (typeof document === 'undefined') return;
  const targetTheme = (theme === THEMES.LIGHT) ? THEMES.LIGHT : THEMES.DARK;
  document.documentElement.setAttribute('data-theme', targetTheme);

  try {
    localStorage.setItem(THEME_STORAGE_KEY, targetTheme);
  } catch (err) {
    console.warn('Failed to save theme in localStorage', err);
  }

  // Update theme toggle buttons if present
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.setAttribute('aria-label', `Switch to ${targetTheme === THEMES.DARK ? 'light' : 'dark'} mode`);
    btn.setAttribute('title', `Switch to ${targetTheme === THEMES.DARK ? 'light' : 'dark'} mode`);
  });
}

/**
 * Toggle between dark and light theme
 * @returns {string} new theme
 */
export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || THEMES.DARK;
  const next = current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  applyTheme(next);
  return next;
}
