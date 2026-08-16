# Atul Sah - Professional Cyber-Minimalist Portfolio

A premium, highly interactive, and responsive multi-page portfolio website designed and developed for **Atul Sah** (Computer Science Faculty, Full-Stack Developer, and Technical Author). 

This project is built from scratch utilizing clean, semantic source codes without heavy external libraries to ensure top-tier loading speeds, accessibility, and fluid animations.

---

## Theme & Styling System

The website features a custom **Cyber-Minimalist** theme utilizing high contrast styling rules:
*   **Colors**: A strict palette of Pure Black (`#000000`), Cyber Yellow (`#FFDD00`), and Clean White (`#FFFFFF`). No color gradients are used in the layout to ensure a sharp, modern brutalist appearance.
*   **Typography**: Implements Google Fonts: `Space Grotesk` (for heavy futuristic headers) and `Plus Jakarta Sans` (for clean, readable body paragraphs), alongside `Space Mono` for technical labels.
*   **Aesthetic Details**: Sharp borders, outline-to-solid button transitions on hover, solid drop-shadow offsets, and responsive media query breakpoints.

---

## Key Interactive Features

1.  **Custom Trailing Cursor**: A trailing interactive ring cursor that snaps and expands when hovering over clickable links, buttons, and card elements.
2.  **Interactive Canvas Particles**: A lightweight background HTML5 Canvas animation that draws interactive node points and connection webs in cyber yellow.
3.  **Dynamic Typing Carousel**: An automated text typing effect on the home screen carousel introducing the professional titles.
4.  **Scroll Reveal Animations**: Implements an `IntersectionObserver` system that triggers slide-in reveals and animates skill progress bars on scroll.
5.  **Dynamic Project Filter**: A client-side filter engine on the projects screen to sort works by domains (Full-Stack, AI & ML, Mobile Apps, or Other).
6.  **Interactive Blog Reader Modal**: An in-page fullscreen modal post reader allowing visitors to read the articles without reloading the page.
7.  **Real Amazon Book Covers**: Outbound covers load directly from retail image databases based on the book ASIN codes, complete with custom grayscale-to-color hover filters.
8.  **SEO & Clean URLs**: Apache `.htaccess` clean URL routing without `.html` extensions.

---

## Webpages Guide

*   `index.html` (Home): Contains the dynamic hero welcome, key stats dashboard, featured teaser for the Fluxify Media platform, and highlights of bestselling publications.
*   `about.html` (About): Outlines professional bio details, educational background timeline (Patna University MCA/BCA), and teaching/development history.
*   `skills.html` (Skills): Categorized technical tag groups (Frontend, Backend, AI & ML, Systems & Tools) and animating progress bars showing core competence depth.
*   `projects.html` (Projects): Detailed breakdown of software projects including Fluxify Media, CampusPulse LMS for B.N. College, mdtopdf Markdown Studio, and ToolHub Pro.
*   `publications.html` (Books): Showcases the 8 self-published technical books on Agentic AI Systems, Java, Machine Learning, Generative AI, and Cybersecurity with purchase outbound links.
*   `blog.html` (Blog): Technical articles previews with an integrated modal content container and deep-dive articles.
*   `contact.html` (Contact): Active communication details and an asynchronous Web3Forms messaging transmission form.

---

## Contact Form Configuration

The contact page uses an asynchronous `fetch` integration with **Web3Forms** configured to process transmission submissions directly to the configured endpoint with anti-spam honeypot defense and instant toast notifications.

---

## Technical Stack

*   **Markup**: HTML5 (Semantic Structure)
*   **Styling**: CSS3 (Vanilla Custom Properties, Flexbox, Grid, Keyframes, Media Queries)
*   **Interactivity**: ES6+ JavaScript (DOM APIs, Canvas API, Fetch API, Intersection Observer API)

---

## Setup & Execution

1.  Copy all files into a local folder or web server directory.
2.  Ensure `avatar.jpg` (profile photo) and `favicon.png` (transparent icon) are placed in the root directory.
3.  Open `index.html` directly in any web browser or host the folder using a standard web server module (e.g., Apache, Nginx, or Live Server extension).
