# Prodigy InfoTech — Web Development Internship
## Task 04: Personal Developer Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://husam-abdulraheem.github.io/PRODIGY_WD_04/)
[![Deploy to GitHub Pages](https://github.com/Husam-Abdulraheem/PRODIGY_WD_04/actions/workflows/deploy.yml/badge.svg)](https://github.com/Husam-Abdulraheem/PRODIGY_WD_04/actions/workflows/deploy.yml)
![Prodigy InfoTech Task-04](https://img.shields.io/badge/PRODIGY__WD__04-Task--04-6366f1?style=for-the-badge&logo=target)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, responsive, accessible, and high-performance **Personal Developer Portfolio Website** designed and built for **Husam Abdulraheem** as part of the **Prodigy InfoTech Web Development Internship (Task-04)**.

🌐 **Live URL**: [https://husam-abdulraheem.github.io/PRODIGY_WD_04/](https://husam-abdulraheem.github.io/PRODIGY_WD_04/)

---

## 🌟 Key Highlights & Features

### 1. Captivating Home & Hero Section
- **Dynamic Typewriter Headline**: Smooth real-time typewriter rotator highlighting core competencies (*Software Engineer*, *Backend & API Architect*, *.NET & C# Specialist*, *React & TypeScript Developer*, *Open-Source Builder*).
- **Professional Avatar Visual**: High-resolution profile photo surrounded by an animated radial gradient ring, interactive elevation, and floating accomplishment badges (*3+ Years Building Systems*, *Clean Architecture & APIs*).
- **Quick Skills Summary**: Instant pill tags showcasing core proficiencies across backend and frontend domains.
- **Dynamic Stats Counter**: Grid displaying real-time metrics (30+ public repos, 3+ years experience, 4/4 Prodigy tasks completed, <35ms average API latency).

### 2. Comprehensive "About Me" Section
- **Engineering Philosophy & Bio**: Clear articulation of core development principles (*Clarity Over Cleverness*, *Separation of Concerns*, *Design for Change*, *Empirical Verification*).
- **Interactive Timeline**:
  - **Professional Experience**: Roles at **ArabixDev**, **Prodigy InfoTech**, and **Open-Source Creator**.
  - **Education & Credentials**: Degree in Software Engineering / Computer Science with First Class Honours, alongside continuous specialized certifications in ASP.NET Core and clean system architecture.

### 3. Interactive Technical Skills Explorer
- **Categorized Multi-View**: Instant filtering by *All Technologies*, *Backend & APIs*, *Frontend & UI*, *Databases & Storage*, and *Architecture & DevOps*.
- **Live Search**: Instant keyword filtering across skill names, categories, and proficiency tiers.
- **Skill Cards**: Clear indicators of proficiency (*Expert*, *Advanced*, *Intermediate*) and years of production experience.

### 4. Featured Projects & Case Studies
- **Filterable Project Showcase**: Switch seamlessly between *All Projects*, *Full-Stack & Web*, *Backend & APIs*, *Developer Tooling*, and *Prodigy InfoTech Tasks*.
- **Case Study Modal Dialog**: Accessible modal with ESC key dismiss and backdrop blur detailing the architectural problem, solution, tech stack, and engineering impact metrics.
- **Live Links**: Direct integration with production deployments, live demos, and GitHub source code repositories.

### 5. Accomplishments & Recognition
- Recognition of technical fellowships, open-source creation (including *Retransify* and *Awesome Yemeni Open Source*), and engineering benchmarks.

### 6. Interactive Contact Section
- **Dual-Pane Layout**: Contact cards featuring verified location, response guarantee (<24h), and social badges.
- **One-Click Email Copy**: Integrated clipboard copy button with animated toast notifications.
- **Validated Contact Form**: Real-time client-side validation (name, email regex, subject, and length bounds) with dynamic character counter (up to 1500 chars) and automated mailto client launcher.

### 7. Bold Neo-Brutalism Visual Design & Accessibility (a11y)
- **Signature Neo-Brutalist Aesthetic**: Thick solid borders (`2.5px - 3.5px solid`), zero-blur hard drop shadows (`4px 4px 0px`, `6px 6px 0px`, `8px 8px 0px`), and tactile mechanical button press feedback (`translate(2px, 2px)`).
- **Vibrant Accent Palette**: High-contrast Canary Yellow (`#FFE600`), Cyber Cyan (`#00F0FF`), Neon Lime (`#22C55E`), and Hot Coral (`#FF5376`).
- **Typography & Details**: Space Grotesk display headings, JetBrains Mono code tags, animated infinite marquee ticker strip, and sticker-style rotated badges.
- **Dual Neo-Brutalist Themes**: Dark Brutalism (deep obsidian canvas with neon hard shadows) and Light Neo-Brutalism (warm paper canvas with bold black borders and hard drop shadows) with persistent `localStorage` sync.
- **Accessibility**: Full semantic HTML5 structure, skip navigation link, focus-visible outlines, ARIA landmarks, and WCAG AA contrast.
- **Zero External Dependencies**: Pure vanilla JavaScript (ES6+ modules), semantic HTML5, and modular CSS variables.

---

## 📁 Repository Structure

```text
PRODIGY_WD_04/
├── assets/
│   └── avatar.jpg             # High-resolution professional profile photo
├── css/
│   ├── base.css               # Resets, typography, skip link, and ambient styling
│   ├── components.css         # Reusable buttons, badges, chips, cards, timeline, modals
│   ├── responsive.css         # Media queries for mobile, tablet, laptop, and desktop
│   ├── sections.css           # Header, hero, about, skills, projects, contact, footer
│   └── variables.css          # Design tokens for dark and light color schemes
├── js/
│   ├── data.js                # Profile data, skills, projects, and career milestones
│   ├── portfolio-engine.js    # Pure filtering, search, and form validation engine
│   └── theme.js               # Dark/Light theme manager and storage persistence
├── scripts/
│   ├── build-check.js         # Build asset verification and linkage checks
│   └── lint.js                # Code integrity, HTML5, and JavaScript syntax linter
├── test/
│   └── portfolio.test.js      # Unit tests for data integrity, filters, and validation
├── app.js                     # Application entrypoint & interactive DOM controller
├── index.html                 # Semantic single-page portfolio layout
├── package.json               # NPM scripts and project metadata
├── styles.css                 # Main stylesheet orchestrator
└── README.md                  # Comprehensive documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Edge, Firefox, Safari)
- [Node.js](https://nodejs.org/) v18+ (for automated tests and verification scripts)

### Installation & Preview
Clone the repository:
```bash
git clone https://github.com/Husam-Abdulraheem/PRODIGY_WD_04.git
cd PRODIGY_WD_04
```

To run a lightweight local static server:
```bash
# Using Python
python3 -m http.server 8080

# Or using Node
npx serve .
```
Open [http://localhost:8080](http://localhost:8080) in your web browser.

---

## 🧪 Testing & Verification

Run the complete verification suite with a single command:
```bash
npm run check
```

Or execute individual checks:
```bash
# 1. Run automated unit tests
npm test

# 2. Run code syntax & HTML integrity lint
npm run lint

# 3. Run production build & asset verification
npm run build
```

---

## 👨‍💻 Author

**Husam Abdulraheem**  
*Software Engineer · Backend & Full-Stack Development*  
- **Email**: [husam.t.abdulraheem@gmail.com](mailto:husam.t.abdulraheem@gmail.com)  
- **LinkedIn**: [linkedin.com/in/husam-abdulraheem](https://linkedin.com/in/husam-abdulraheem)  
- **GitHub**: [@Husam-Abdulraheem](https://github.com/Husam-Abdulraheem)  
- **Website**: [husamabdulraheem.arabixdev.com](https://husamabdulraheem.arabixdev.com)  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
