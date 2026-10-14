# Atul Sah — Official Portfolio & Academic Systems Repository

> **Cyber-Minimalist Bilingual Web Platform, Enterprise Software Architecture Showcase, Technical Publications & Applied AI Research**  
> *Patna, Bihar, India* • [Official Website (EN)](https://atulsah.in/) • [आधिकारिक वेबसाइट (HI)](https://atulsah.in/hi/) • [GitHub](https://github.com/RealAtulSah) • [LinkedIn](https://in.linkedin.com/in/realatulsah/) • [Amazon Author Page](https://www.amazon.in/s?k=atul+sah)

---

## 1. Executive Summary

This repository contains the complete production source code for the official personal portfolio and academic web portal of **Atul Sah** — Computer Science Educator (Faculty, Department of Computer Applications, B.N. College, Patna University), Published Technical Author (8 published volumes), Full-Stack Software Engineer, and Applied AI Researcher.

The platform is engineered from the ground up utilizing pure semantic web standards (HTML5, Vanilla CSS3, ES6+ JavaScript) without heavy runtime frameworks or external component libraries. It delivers sub-second load times, instant Core Web Vitals painting, full bilingual accessibility (English and Hindi across 28 standalone HTML pages), an interactive Cyber-Minimalist visual identity, and integrated Cloudflare Web Analytics.

---

## 2. Key Architectural Innovations

### A. Full Bilingual Dual-Portal Architecture (28 HTML Pages)
The web platform operates as a complete, mirrored bilingual portal serving both global English-speaking audiences and native Hindi-speaking students, researchers, and clients:
*   **English Edition (14 Pages)**: 7 core application pages in the root directory and 7 standalone technical deep-dive research articles located in `/blogs/`.
*   **Hindi Edition (14 Pages in `/hi/`)**: Complete Hindi counterpart (`https://atulsah.in/hi/`) with 7 core pages and 7 standalone technical deep-dive articles in `/hi/blogs/`.
*   **Bidirectional Language Switcher (`Aअ`)**: A high-contrast Cyber-Minimalist button integrated in `.nav-actions` across all 28 HTML pages, enabling instantaneous bi-directional switching between equivalent pages.
*   **Strict Linguistic Standard**: In accordance with academic best practices, untranslatable technical proper nouns, framework names, stack items, and English book titles remain in clean Latin script (`React`, `Node.js`, `Express.js`, `PostgreSQL`, `Prisma ORM`, `Model Context Protocol (MCP)`, `Agentic AI Systems`), while native vocabulary uses pure, dignified Hindi (`पुस्तकें`, `प्राध्यापक`, `शोध`, `मार्गदर्शिका`, `अवकाश एवं उपस्थिति प्रबंधन`).

### B. Cyber-Minimalist Design System
The visual presentation utilizes a high-contrast brutalist design language:
*   **Color Palette**: Strict high-contrast triad consisting of Pure Black (`#000000`), Cyber Yellow (`#FFDD00`), and Clean White (`#FFFFFF`). Solid black text (`color: #000000 !important;`) is strictly enforced on all yellow background elements to guarantee WCAG AAA accessibility.
*   **Typography Hierarchy**: Google Fonts web font cascade:
    *   `Space Grotesk`: Heavy, futuristic headings and section markers.
    *   `Plus Jakarta Sans`: Clean, highly legible body text and article paragraphs.
    *   `Space Mono`: Technical metadata labels, status tags, and code blocks.
    *   `Noto Sans Devanagari`: Clean Devanagari rendering across all Hindi pages.
*   **Brutalist Visual Accents**: Sharp geometric borders (no soft rounding), solid offset box shadows (`4px 4px 0px #000000`), outline-to-solid button transitions, and glassmorphic modal overlays (`backdrop-filter: blur(8px)`).

### C. Client-Side Interactivity & Dynamic Engines
*   **Interactive Canvas Particle Network**: Lightweight HTML5 Canvas particle system drawing dynamic floating nodes and proximity connection webs in cyber yellow (`#FFDD00`).
*   **Magnetic Trailing Ring Cursor**: Trailing cursor ring with acceleration physics that snaps, contracts, and expands upon hovering interactive anchors, buttons, and card elements.
*   **Dynamic Hero Typewriter Carousel**: Automated cycling text typewriter animation presenting professional designations in both English and Hindi.
*   **Interactive Project Detail Modal**: Client-side JavaScript modal engine on `projects.html` and `hi/projects.html` rendering verified architectural overviews, feature breakdowns with SVG icons, and tech stack tags for all 10 projects.
*   **In-Page Article Preview Modal**: Quick-read modal container on `blog.html` and `hi/blog.html` allowing instant article scanning alongside links to dedicated deep-dive pages.
*   **Mathematical Typesetting & ASCII Architecture**: Technical blog articles incorporate CDN-delivered KaTeX LaTeX mathematics and structured ASCII system flow diagrams.

### D. Core Web Vitals & Performance Engineering
*   **Zero Framework Overhead**: Built with pure vanilla technologies; 0 kB of framework runtime overhead (no React, Next.js, or Vue client hydration bundles).
*   **Render-Blocking Elimination**: Zero CSS `@import` rules in stylesheets; preconnected Google Fonts CDNs (`<link rel="preconnect">`) in every HTML document `<head>`.
*   **Instant LCP (Largest Contentful Paint)**: Hero sections and above-the-fold content render with 0ms transition delays.
*   **Non-Blocking Scripts**: All interactive scripts are loaded with non-blocking `defer` attributes.
*   **Server-Side Compression & Caching**: Apache `.htaccess` activates `mod_deflate` Gzip compression and `mod_expires` aggressive browser caching for static assets.
*   **Asset Optimization**: Transparent `favicon.png` compressed to 4.1 KB (98.2% reduction) using Python `rembg` and Pillow.

### E. Multilingual SEO, Schema.org & AI Discovery
*   **Bidirectional `hreflang` Annotations**: Every page includes `<link rel="alternate" hreflang="en">`, `<link rel="alternate" hreflang="hi">`, and `<link rel="alternate" hreflang="x-default">`.
*   **Multilingual `sitemap.xml`**: Configured with `xmlns:xhtml` namespace containing bidirectional link alternates for all 14 URL pairs.
*   **Schema.org JSON-LD**: Comprehensive structured data schemas (`Person`, `WebSite`, `CreativeWork`, `TechArticle`) providing search engines with rich semantic context.
*   **AI Agent Indexing (`llms.txt` & `robots.txt`)**: Machine-readable `llms.txt` documenting all pages, books, and articles for LLM agents, paired with permissive `robots.txt` crawler policies for GPTBot, ClaudeBot, PerplexityBot, and Google-Extended.
*   **Clean URLs**: Apache `.htaccess` rewrites clean extensionless URLs (e.g., `/projects`, `/about`, `/hi/skills`).

### F. Privacy, Security & Analytics
*   **Cloudflare Web Analytics**: Integrated Cloudflare Web Analytics beacon (`static.cloudflareinsights.com/beacon.min.js`, token `e7651eb4980a4d819b94ab12839bc0a9`) deployed immediately before `</body>` across all 28 HTML pages.
*   **Secure Contact Form**: Asynchronous `fetch` integration with Web3Forms featuring anti-spam honeypot defense and instant toast notifications.
*   **Global UI Icon Rule**: Strictly zero representative emojis for UI actions or interface text; all interface markers use clean SVG vector icons.
*   **HTTP Security Headers**: Configured via `.htaccess` including `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and strict directory browsing denial (`Options -Indexes`).

---

## 3. Webpages & Sitemap Matrix (28 Pages)

| Page Focus / Module | English Route (`en`) | Hindi Route (`hi`) | Description |
| :--- | :--- | :--- | :--- |
| **Homepage** | [`/`](https://atulsah.in/) | [`/hi/`](https://atulsah.in/hi/) | Dynamic hero greeting, verified metrics dashboard, featured Hyphenet case study, and published books shelf. |
| **Biography & Pedagogy** | [`/about`](https://atulsah.in/about) | [`/hi/about`](https://atulsah.in/hi/about) | Academic background (MCA, BCA, Patna University), faculty appointment at B.N. College, and pedagogical timeline. |
| **Technical Competencies** | [`/skills`](https://atulsah.in/skills) | [`/hi/skills`](https://atulsah.in/hi/skills) | Categorized skill inventory (Frontend, Backend & Systems, AI/ML, DevOps & Tools) and milestone metrics. |
| **Software Projects** | [`/projects`](https://atulsah.in/projects) | [`/hi/projects`](https://atulsah.in/hi/projects) | 10 categorized production and applied AI projects with dynamic filter tabs and interactive detail modal. |
| **Published Volumes** | [`/publications`](https://atulsah.in/publications) | [`/hi/publications`](https://atulsah.in/hi/publications) | 8 self-published technical books with direct Amazon India purchasing channels and live cover renders. |
| **Technical Articles** | [`/blog`](https://atulsah.in/blog) | [`/hi/blog`](https://atulsah.in/hi/blog) | Publication index and quick-reading modal previewing all 7 in-depth engineering and academic articles. |
| **Contact & Inquiries** | [`/contact`](https://atulsah.in/contact) | [`/hi/contact`](https://atulsah.in/hi/contact) | Direct professional channels and asynchronous Web3Forms messaging transmission. |
| **Article 1: Generative AI** | [`/blogs/blog-generative-ai-architecture-foundations`](https://atulsah.in/blogs/blog-generative-ai-architecture-foundations) | [`/hi/blogs/blog-generative-ai-architecture-foundations`](https://atulsah.in/hi/blogs/blog-generative-ai-architecture-foundations) | Deep-dive on Transformer self-attention, diffusion mechanics, training pipelines (SFT, RLHF, DPO), and KV cache optimization with KaTeX math. |
| **Article 2: AI Agents Anatomy** | [`/blogs/blog-engineering-anatomy-ai-agents`](https://atulsah.in/blogs/blog-engineering-anatomy-ai-agents) | [`/hi/blogs/blog-engineering-anatomy-ai-agents`](https://atulsah.in/hi/blogs/blog-engineering-anatomy-ai-agents) | Engineering handbook on agent runtime control loops, tool JSON schemas, memory hierarchies, and Model Context Protocol (MCP). |
| **Article 3: CS Research Gap** | [`/blogs/blog-research-gap-computer-science`](https://atulsah.in/blogs/blog-research-gap-computer-science) | [`/hi/blogs/blog-research-gap-computer-science`](https://atulsah.in/hi/blogs/blog-research-gap-computer-science) | Systematic guide to discovering defensible computer science research gaps through literature matrices and methodology teardowns. |
| **Article 4: Small Language Models** | [`/blogs/blog-small-language-models`](https://atulsah.in/blogs/blog-small-language-models) | [`/hi/blogs/blog-small-language-models`](https://atulsah.in/hi/blogs/blog-small-language-models) | Technical analysis of 1B–8B SLMs, GGUF/AWQ quantization, Edge AI economics, and hybrid LLM routing. |
| **Article 5: Multi-Agent Systems** | [`/blogs/blog-multi-agent-systems`](https://atulsah.in/blogs/blog-multi-agent-systems) | [`/hi/blogs/blog-multi-agent-systems`](https://atulsah.in/hi/blogs/blog-multi-agent-systems) | Architectural patterns for multi-agent collaboration, orchestration topologies, and collaborative software pipelines. |
| **Article 6: Autonomous AI Agents** | [`/blogs/blog-ai-agents-autonomous`](https://atulsah.in/blogs/blog-ai-agents-autonomous) | [`/hi/blogs/blog-ai-agents-autonomous`](https://atulsah.in/hi/blogs/blog-ai-agents-autonomous) | Evolution of AI agents into digital workers, least-privilege security guardrails, human-in-the-loop patterns, and threat modeling. |
| **Article 7: Open-Source LLMs** | [`/blogs/blog-open-source-llms`](https://atulsah.in/blogs/blog-open-source-llms) | [`/hi/blogs/blog-open-source-llms`](https://atulsah.in/hi/blogs/blog-open-source-llms) | Comprehensive analysis of open-weight foundational models (Llama, DeepSeek-R1, Qwen) and private enterprise deployment economics. |

---

## 4. Software Deployments Showcase (10 Projects)

The portfolio categorizes 10 production software deployments, client solutions, and applied artificial intelligence implementations:

### Category 1: Freelancing & Enterprise Deployments
1.  **Hyphenet Enterprise Portal (Featured Case Study)**:
    *   *Domain*: Enterprise Helpdesk, Field Service Management & Logistics.
    *   *Architecture*: Node.js, Express 4.x, self-healing MySQL/MariaDB database, Pure Web Standards (HTML5, CSS3, Vanilla JS, PWA), and Hostinger Cloud deployment.
    *   *Core Modules*: 5-Role Helpdesk & Real-Time Server-Sent Events (`/api/realtime/stream`), **Staff HRMS & Automated Payroll Engine** (attendance synchronization, tiered leave approvals, automated salary slip dispatch), and **Multi-Hub Warehouse Inventory Tracking** (centralized inventory, asset lifecycle management, 24-hour hardware swap workflow).
    *   *Full Documentation*: See dedicated [Hyphenet_README.md](Hyphenet_README.md) for in-depth architecture, API endpoints, and schema details.
2.  **Fluxify Media Platform**:
    *   *Domain*: Digital Agency CMS & Asset Management.
    *   *Stack*: Next.js, TypeScript, PostgreSQL, Prisma ORM, Tailwind CSS.
    *   *Highlights*: High-throughput digital asset management, automated image transformation pipelines, and dynamic client approval workflows.
3.  **CampusPulse LMS**:
    *   *Domain*: Higher Education Academic Operations.
    *   *Stack*: PHP, MySQL, Vanilla JavaScript, Apache HTTP Server.
    *   *Highlights*: Custom institutional management system engineered for the Department of Computer Applications at B.N. College (Patna University), managing attendance tracking, student records, syllabus distribution, and internal marks computation.
4.  **Vistredge Corporate Site**:
    *   *Domain*: Corporate Showcase & Consulting Services.
    *   *Stack*: HTML5, Vanilla CSS3, ES6+ JavaScript.
    *   *Highlights*: High-performance static web platform designed for corporate visibility, service showcases, and lead generation.

### Category 2: Fun & Developer Tools
5.  **StrengthFuel**:
    *   *Domain*: AI-Assisted Sports Nutrition & Fitness.
    *   *Stack*: React.js, Tailwind CSS, Google Gemini AI API.
    *   *Highlights*: Intelligent personalized nutrition planner providing macronutrient distribution, hydration guidelines, and customized workout meal scheduling.
6.  **mdtopdf | Markdown Studio**:
    *   *Domain*: Developer Productivity & Document Publishing.
    *   *Stack*: Vanilla JavaScript, CSS Paged Media, Showdown.js.
    *   *Highlights*: Browser-based zero-dependency Markdown-to-PDF compiler featuring real-time preview, multiple styling themes, and instantaneous print-ready PDF generation.
7.  **ToolHub Pro**:
    *   *Domain*: Web Utility Suite.
    *   *Stack*: Vanilla JavaScript, HTML5 Canvas API, Web Cryptography API.
    *   *Highlights*: Modular Swiss-army-knife browser toolkit providing client-side image compression, format converters, hash generators, and text utilities without server transmissions.
8.  **Expenses Tracker App**:
    *   *Domain*: Personal Financial Management.
    *   *Stack*: JavaScript (ES6+), HTML5 LocalStorage, SVG Charting.
    *   *Highlights*: Lightweight, privacy-first personal finance tracking utility featuring offline persistence, category breakdowns, and SVG budget charts.

### Category 3: Academic & Applied Artificial Intelligence
9.  **Plant Diseases Detector**:
    *   *Domain*: Computer Vision & Precision Agriculture.
    *   *Stack*: Python, TensorFlow, Keras, OpenCV, Flask.
    *   *Highlights*: Deep convolutional neural network (CNN) trained on plant leaf datasets to diagnose crop pathologies with confidence ratings and treatment guidance.
10. **Fake News Detector**:
    *   *Domain*: Natural Language Processing & Media Credibility.
    *   *Stack*: Python, Scikit-Learn, NLTK, TF-IDF Vectorization, Flask.
    *   *Highlights*: Text classification machine learning pipeline analyzing linguistic patterns and credibility markers to determine the authenticity of news headlines and articles.

---

## 5. Published Technical Books Catalog (8 Volumes)

Authored by Atul Sah and cataloged on Amazon India, Google Books, and Pothi:

| # | Book Title | ASIN / ISBN | Primary Focus Areas | Amazon Channel |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **Agentic AI Systems & Autonomous Agents** | `B0H8FP3VGX` | ReAct loops, tool calling schemas, Multi-Agent Systems (MAS), Model Context Protocol (MCP), and production guardrails. | [Amazon Link](https://www.amazon.in/Agentic-AI-Systems-Autonomous-Agents-ebook/dp/B0H8FP3VGX) |
| 2 | **Introduction to Java Programming** | `B0GHXRBLZD` | Core Java, OOP principles, JVM internal architecture, Collections framework, multithreading, and JDBC. | [Amazon Link](https://www.amazon.in/Introduction-Java-Programming-Practical-Concepts-ebook/dp/B0GHXRBLZD) |
| 3 | **Generative AI: An Introduction** | `B0GL26R2XR` | Foundations of GenAI, Transformer architecture, Diffusion models, LLM APIs, and fine-tuning paradigms. | [Amazon Link](https://www.amazon.in/Generative-AI-Introduction-Atul-Sah-ebook/dp/B0GL26R2XR) |
| 4 | **Machine Learning: From Basics to Advance** | `B0GBWYHLDC` | Statistical learning, mathematical foundations, supervised/unsupervised algorithms, neural networks, and model evaluation. | [Amazon Link](https://www.amazon.in/Machine-Learning-Advance-Atul-Sah-ebook/dp/B0GBWYHLDC) |
| 5 | **The Unseen Battlefield: AI in Cybersecurity** | `B0G3XG55HX` | AI-driven threat vectors, automated penetration testing, adversarial machine learning, and SOC automated response. | [Amazon Link](https://www.amazon.in/Unseen-Battlefield-Revolutionizing-Cybersecurity-Cybercrime-ebook/dp/B0G3XG55HX) |
| 6 | **The AI Product Manager: Prompt to Production** | `B0FXWL4CXT` | AI product lifecycle, prompt engineering, RAG cost economics, latency optimization, and product guardrails. | [Amazon Link](https://www.amazon.in/AI-Product-Manager-Prompt-Production-ebook/dp/B0FXWL4CXT) |
| 7 | **The Promptcrafter's Handbook** | `B0G5262DT1` | Structured prompt engineering frameworks (CoT, ReAct, Tree of Thoughts), zero/few-shot architectures, and system instructions. | [Amazon Link](https://www.amazon.in/Promptcrafters-Handbook-First-Advanced-Dialogue-ebook/dp/B0G5262DT1) |
| 8 | **The AI-Powered Shield** | `B0FYGZ95DB` | Defensive cybersecurity engineering, intrusion detection models, automated anomaly classification, and zero-trust systems. | [Amazon Link](https://www.amazon.in/AI-Powered-Shield-Guide-Modern-Cybersecurity-ebook/dp/B0FYGZ95DB) |

---

## 6. Repository Directory Structure

```text
site-main/
│
├── .htaccess                 # Apache configuration: clean URLs, Gzip compression, browser caching, security headers
├── .gitignore                # Git ignore configuration
├── CNAME                     # Custom domain binding for atulsah.in
├── robots.txt                # Search engine & AI crawler directive map (OAI-SearchBot, GPTBot, ClaudeBot, etc.)
├── sitemap.xml               # Bilingual XML sitemap with bidirectional xhtml:link alternates (28 URLs)
├── llms.txt                  # Structured context map of core pages, articles, and books for AI agents
├── readme.md                 # Primary project documentation (this document)
├── editing.md                # Persistent agent development memory, change logs, and security audit records
├── aboutAtul.md              # Comprehensive professional dossier, academic credentials, and career timeline
├── Hyphenet_README.md        # Production architecture dossier for Hyphenet Enterprise Portal
│
├── style.css                 # Master stylesheet: Cyber-Minimalist tokens, responsive layouts, glassmorphism
├── script.js                 # Global client-side logic: canvas particles, cursor physics, modals, typing carousel
├── avatar.jpg                # High-resolution author portrait
├── favicon.png               # Optimized transparent site favicon (4.1 KB)
│
├── index.html                # English Homepage (Hero, metrics, Hyphenet teaser, books)
├── about.html                # English About (Bio, Patna University MCA/BCA, B.N. College faculty role)
├── skills.html               # English Skills (Categorized competencies & milestone metrics)
├── projects.html             # English Projects (10 categorized projects with interactive detail modal)
├── publications.html         # English Publications (8 published technical books with Amazon channels)
├── blog.html                 # English Blog Index (Quick-preview modal & article listings)
├── contact.html              # English Contact (Web3Forms asynchronous transmission)
│
├── blogs/                    # English Standalone Technical Deep-Dive Articles
│   ├── blog-ai-agents-autonomous.html
│   ├── blog-engineering-anatomy-ai-agents.html
│   ├── blog-generative-ai-architecture-foundations.html
│   ├── blog-multi-agent-systems.html
│   ├── blog-open-source-llms.html
│   ├── blog-research-gap-computer-science.html
│   └── blog-small-language-models.html
│
├── hi/                       # Hindi Edition Portal (हिन्दी संस्करण)
│   ├── index.html            # Hindi Homepage (Devanagari typography, dynamic typing, featured showcase)
│   ├── about.html            # Hindi About (Academic journey, faculty role at B.N. College, philosophy)
│   ├── skills.html           # Hindi Skills (4 competency categories, empirical proof cards)
│   ├── projects.html         # Hindi Projects (10 projects with pure Hindi descriptions & detail modal)
│   ├── publications.html     # Hindi Publications (8 technical books with direct Amazon links)
│   ├── blog.html             # Hindi Blog Index (Devanagari preview modal & technical articles)
│   ├── contact.html          # Hindi Contact (Bilingual Web3Forms contact form with anti-spam)
│   └── blogs/                # Hindi Standalone Technical Deep-Dive Articles
│       ├── blog-ai-agents-autonomous.html
│       ├── blog-engineering-anatomy-ai-agents.html
│       ├── blog-generative-ai-architecture-foundations.html
│       ├── blog-multi-agent-systems.html
│       ├── blog-open-source-llms.html
│       ├── blog-research-gap-computer-science.html
│       └── blog-small-language-models.html
│
└── docs/                     # Original markdown manuscripts & technical research drafts
    ├── AI_Agents_Are_Becoming_Autonomous.md
    ├── How Open-Source LLMs Are Changing the AI Industry.md
    ├── How to Find a Research Gap in Computer Science.md
    ├── The Engineering Anatomy of AI Agents.md
    ├── generative-ai--architecture--foundations--and-production-engineering.md
    ├── multi-agent-systems.md
    └── small-language-models.md
```

---

## 7. Technology Stack & Specifications

*   **Structure & Semantics**: HTML5 (W3C Validated, Semantic Landmarks, Schema.org Microdata & JSON-LD).
*   **Styling & Design System**: Vanilla CSS3 (Custom Properties/Variables, CSS Grid, Flexbox, Keyframe Animations, Glassmorphic Backdrop Filters).
*   **Typography**: Google Fonts CDN (`Space Grotesk`, `Plus Jakarta Sans`, `Space Mono`, `Noto Sans Devanagari`).
*   **Interactivity & Logic**: Modern Vanilla ES6+ JavaScript (DOM Manipulation, Canvas API, Fetch API, Intersection Observer API).
*   **Mathematical Typesetting**: KaTeX CDN (`katex.min.css`, `katex.min.js`, `auto-render.min.js`).
*   **Message Transmission**: Web3Forms RESTful Asynchronous API with Honeypot Anti-Spam protection.
*   **Analytics & Telemetry**: Cloudflare Web Analytics (`https://static.cloudflareinsights.com/beacon.min.js`).
*   **Web Server Engine**: Apache HTTP Server 2.4+ / LiteSpeed with `mod_rewrite`, `mod_deflate`, `mod_expires`, and `mod_headers`.

---

## 8. Setup, Local Execution & Deployment

### Local Development
To preview the website locally without an external web server:

1.  **Clone or Download the Repository**:
    ```bash
    git clone https://github.com/RealAtulSah/site.git
    cd site
    ```

2.  **Serve via Any Static Web Server**:
    *   *Python 3*:
        ```bash
        python -m http.server 8000
        ```
    *   *Node.js (`serve`)*:
        ```bash
        npx serve .
        ```
    *   *VS Code*: Right-click `index.html` and select **"Open with Live Server"**.

3.  **Navigate in Browser**:
    *   English Portal: `http://localhost:8000/index.html`
    *   Hindi Portal: `http://localhost:8000/hi/index.html`

### Production Deployment
*   **Apache / LiteSpeed / Hostinger Cloud Web Hosting**:
    *   Upload all repository contents directly to the web root (`public_html/`).
    *   Verify that `.htaccess` is present and readable to activate clean URL rewrites, Gzip compression, and security headers.
    *   Confirm custom domain mapping (`atulsah.in`) with SSL/TLS active.
*   **GitHub Pages**:
    *   The repository includes a `CNAME` file pointing to `atulsah.in`.
    *   When hosting on GitHub Pages, navigation links seamlessly resolve to `.html` files or directories.

---

## 9. Contact & Author Information

**Atul Sah**  
*Faculty of Computer Science, Department of Computer Applications, B.N. College, Patna University*  
*Full-Stack Software Engineer & Published Technical Author*  

*   **Official Website (English)**: [https://atulsah.in/](https://atulsah.in/)
*   **आधिकारिक वेबसाइट (हिन्दी)**: [https://atulsah.in/hi/](https://atulsah.in/hi/)
*   **Primary Email**: `atulsah8873@gmail.com`
*   **Author / Publications Email**: `author.atulsah@gmail.com`
*   **GitHub**: [https://github.com/RealAtulSah](https://github.com/RealAtulSah)
*   **LinkedIn**: [https://in.linkedin.com/in/realatulsah/](https://in.linkedin.com/in/realatulsah/)
*   **Amazon Author Central**: [https://www.amazon.in/s?k=atul+sah](https://www.amazon.in/s?k=atul+sah)

---

## 10. License & Copyright

Copyright (c) 2026 Atul Sah. All rights reserved.  
Source code is maintained for portfolio demonstration, pedagogical reference, and open academic transparency. All authored books and publication titles are proprietary works of Atul Sah.
