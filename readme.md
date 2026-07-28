# Atul Sah - Professional Cyber-Minimalist Portfolio

A premium, highly interactive, and responsive multi-page portfolio website designed and developed for **Atul Sah** (Computer Science Faculty, Full-Stack Developer, and Technical Author). 

This project is built from scratch utilizing clean, semantic source codes without heavy external libraries to ensure top-tier loading speeds, accessibility, and fluid animations.

---

## 🎨 Theme & Styling System

The website features a custom **Cyber-Minimalist** theme utilizing high contrast styling rules:
*   **Colors**: A strict palette of Pure Black (`#000000`), Cyber Yellow (`#FFDD00`), and Clean White (`#FFFFFF`). No color gradients are used in the layout to ensure a sharp, modern brutalist appearance.
*   **Typography**: Implements Google Fonts: `Space Grotesk` (for heavy futuristic headers) and `Plus Jakarta Sans` (for clean, readable body paragraphs), alongside `Space Mono` for technical labels.
*   **Aesthetic Details**: Sharp borders, outline-to-solid button transitions on hover, solid drop-shadow offsets, and responsive media query breakpoints.

---

## 🚀 Key Interactive Features

1.  **Custom Trailing Cursor**: A trailing interactive ring cursor that snaps and expands when hovering over clickable links, buttons, and card elements.
2.  **Interactive Canvas Particles**: A lightweight background HTML5 Canvas animation that draws interactive node points and connection webs in cyber yellow.
3.  **Dynamic Typing Carousel**: An automated text typing effect on the home screen carousel introducing the professional titles.
4.  **Scroll Reveal Animations**: Implements an `IntersectionObserver` system that triggers slide-in reveals and animates skill progress bars on scroll.
5.  **Dynamic Project Filter**: A client-side filter engine on the projects screen to sort works by domains (Full-Stack, AI & ML, Mobile Apps, or Other).
6.  **Interactive Blog Reader Modal**: An in-page fullscreen modal post reader allowing visitors to read the articles without reloading the page.
7.  **Real Amazon Book Covers**: Outbound covers load directly from retail image databases based on the book ASIN codes, complete with custom grayscale-to-color hover filters.

---

## 📂 Webpages Guide

*   `index.html` (Home): Contains the dynamic hero welcome, key stats dashboard, featured teaser for the college LMS case study, and highlights of bestselling publications.
*   `about.html` (About): Outlines professional bio details, educational background timeline (Patna University MCA/BCA), and teaching/development history.
*   `skills.html` (Skills): Categorized technical tag groups (Frontend, Backend, AI & ML, Systems & Tools) and animating progress bars showing core competence depth.
*   `projects.html` (Projects): Detailed breakdown of software projects. Highlights the **Personalized LMS created for B.N. College (Department of Computer Application)**, detailing notes repositories, assignment managers, student databases, and MCQ test engines.
*   `publications.html` (Books): Showcases the 8 self-published technical books on Agentic AI Systems, Java, Machine Learning, Generative AI, and Cybersecurity with purchase outbound links.
*   `blog.html` (Blog): Technical articles previews with an integrated modal content container.
*   `contact.html` (Contact): Active communication details and an asynchronous messaging form.

---

## 🛠️ Contact Form Configuration

The contact page uses an asynchronous `fetch` integration with **Web3Forms** to process email submissions without requiring server-side script codes.

### Activation Guide:
1.  Navigate to [web3forms.com](https://web3forms.com/) and register your email to generate a free Access Key.
2.  Open `contact.html` in your text editor.
3.  Locate the following hidden input line:
    ```html
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    ```
4.  Replace `YOUR_ACCESS_KEY_HERE` with your actual access token UUID.
5.  Save and deploy. The form is pre-coded with honey-pots for spam defense and triggers a success notification directly on submission.

---

## 💻 Technical Stack

*   **Markup**: HTML5 (Semantic Structure)
*   **Styling**: CSS3 (Vanilla Custom Properties, Flexbox, Grid, Keyframes, Media Queries)
*   **Interactivity**: ES6+ JavaScript (DOM APIs, Canvas API, Fetch API, Intersection Observer API)

---

## 🚀 Setup & Execution

1.  Copy all files into a local folder.
2.  Ensure `avatar.jpg` (profile photo) is placed in the root directory.
3.  Open `index.html` directly in any web browser or host the folder using a standard web server module (e.g., Live Server extension or HTTP Server npm module).
