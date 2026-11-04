import test from 'node:test';
import assert from 'node:assert/strict';

import {
  PORTFOLIO_OWNER,
  ABOUT_ME,
  SKILLS,
  PROJECTS,
  ACCOMPLISHMENTS,
  SKILL_CATEGORIES,
  PROJECT_CATEGORIES
} from '../js/data.js';

import {
  filterSkills,
  filterProjects,
  getProjectById,
  validateContactForm,
  generateMailtoUri
} from '../js/portfolio-engine.js';

import { THEMES } from '../js/theme.js';

test('Data Integrity - Portfolio Owner metadata', () => {
  assert.equal(typeof PORTFOLIO_OWNER.name, 'string');
  assert.ok(PORTFOLIO_OWNER.name.length > 0);
  assert.ok(PORTFOLIO_OWNER.email.includes('@'));
  assert.ok(Array.isArray(PORTFOLIO_OWNER.stats));
  assert.ok(PORTFOLIO_OWNER.stats.length >= 3);
});

test('Data Integrity - About Me section', () => {
  assert.ok(typeof ABOUT_ME.overview === 'string' && ABOUT_ME.overview.length > 50);
  assert.ok(Array.isArray(ABOUT_ME.principles) && ABOUT_ME.principles.length >= 4);
  assert.ok(Array.isArray(ABOUT_ME.education) && ABOUT_ME.education.length >= 2);
  assert.ok(Array.isArray(ABOUT_ME.experience) && ABOUT_ME.experience.length >= 2);

  // Check experience structure
  const firstExp = ABOUT_ME.experience[0];
  assert.ok(firstExp.role);
  assert.ok(firstExp.company);
  assert.ok(Array.isArray(firstExp.achievements));
});

test('Data Integrity - Skills and Projects collections', () => {
  assert.ok(Array.isArray(SKILLS) && SKILLS.length >= 10);
  for (const skill of SKILLS) {
    assert.ok(skill.name, 'Skill must have a name');
    assert.ok(skill.category, 'Skill must have a category');
    assert.ok(skill.level, 'Skill must have a level');
  }

  assert.ok(Array.isArray(PROJECTS) && PROJECTS.length >= 4);
  for (const project of PROJECTS) {
    assert.ok(project.id, 'Project must have an id');
    assert.ok(project.title, 'Project must have a title');
    assert.ok(project.category, 'Project must have a category');
    assert.ok(project.summary, 'Project must have a summary');
    assert.ok(Array.isArray(project.badges), 'Project must have badges array');
  }

  assert.ok(Array.isArray(ACCOMPLISHMENTS) && ACCOMPLISHMENTS.length >= 2);
});

test('Portfolio Engine - filterSkills category and query', () => {
  // All skills
  const allSkills = filterSkills(SKILLS, 'all', '');
  assert.equal(allSkills.length, SKILLS.length);

  // Backend category only
  const backendSkills = filterSkills(SKILLS, 'backend', '');
  assert.ok(backendSkills.length > 0);
  assert.ok(backendSkills.every(s => s.category === 'backend'));

  // Search query 'React'
  const reactSkills = filterSkills(SKILLS, 'all', 'React');
  assert.ok(reactSkills.length >= 1);
  assert.ok(reactSkills.some(s => s.name.includes('React')));

  // Case insensitive query
  const sqlSkills = filterSkills(SKILLS, 'all', 'sql');
  assert.ok(sqlSkills.length >= 1);

  // Combined category and query
  const filtered = filterSkills(SKILLS, 'database', 'Server');
  assert.ok(filtered.length >= 1);
  assert.equal(filtered[0].category, 'database');

  // No match
  const none = filterSkills(SKILLS, 'all', 'nonexistent_tool_xyz_999');
  assert.equal(none.length, 0);

  // Fallbacks for invalid arguments
  assert.deepEqual(filterSkills(null), []);
});

test('Portfolio Engine - filterProjects category', () => {
  const all = filterProjects(PROJECTS, 'all');
  assert.equal(all.length, PROJECTS.length);

  const prodigyProjects = filterProjects(PROJECTS, 'prodigy');
  assert.ok(prodigyProjects.length >= 3);
  assert.ok(prodigyProjects.every(p => p.category === 'prodigy'));

  assert.deepEqual(filterProjects(null), []);
});

test('Portfolio Engine - getProjectById', () => {
  const proj = getProjectById(PROJECTS, 'retransify');
  assert.ok(proj !== null);
  assert.equal(proj.id, 'retransify');

  const invalid = getProjectById(PROJECTS, 'non_existent_project');
  assert.equal(invalid, null);

  assert.equal(getProjectById(null, 'retransify'), null);
});

test('Portfolio Engine - validateContactForm with valid data', () => {
  const validData = {
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    subject: 'Full-Stack Developer Opportunity',
    message: 'Hello Husam, we loved your work on Clean Architecture and would like to talk!'
  };

  const result = validateContactForm(validData);
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('Portfolio Engine - validateContactForm error detection', () => {
  // Empty data
  const emptyResult = validateContactForm({});
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.subject);
  assert.ok(emptyResult.errors.message);

  // Invalid email
  const badEmail = validateContactForm({
    name: 'Sarah',
    email: 'invalid-email-address',
    subject: 'Inquiry',
    message: 'This is a long enough message to pass length test.'
  });
  assert.equal(badEmail.isValid, false);
  assert.ok(badEmail.errors.email);
  assert.equal(badEmail.errors.name, undefined);

  // Short message (< 10 chars)
  const shortMsg = validateContactForm({
    name: 'Sarah',
    email: 'sarah@example.com',
    subject: 'Inquiry',
    message: 'Hi!'
  });
  assert.equal(shortMsg.isValid, false);
  assert.ok(shortMsg.errors.message);
});

test('Portfolio Engine - generateMailtoUri', () => {
  const uri = generateMailtoUri('test@example.com', 'Hello & Welcome', 'Line 1\nLine 2');
  assert.ok(uri.startsWith('mailto:test@example.com?'));
  assert.ok(uri.includes('Hello%20%26%20Welcome'));
});

test('Theme Constants', () => {
  assert.equal(THEMES.DARK, 'dark');
  assert.equal(THEMES.LIGHT, 'light');
});
