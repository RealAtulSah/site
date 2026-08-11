# ToolHub Pro 
### All-in-One, Secure, Client-Side Web Tools Suite

ToolHub Pro is a modern, fast, and completely secure web tools platform offering 120+ utilities for image processing, PDF management, and file format conversions. It runs **100% client-side** in the browser, ensuring your files and data never leave your device.

---

## Key Features

- **100% Client-Side Processing:** All operations run locally on your device using browser APIs and local JavaScript engines. Perfect privacy—zero server uploads!
- **PWA Full Offline Support:** Fully installable as a Progressive Web App (PWA). Pre-caches all 150+ tools, scripts, stylesheets, and assets so they work 100% offline.
- **Smart Global Search:** Interactive floating search dropdown available on all tool pages with keyboard accessibility (`ArrowUp`/`ArrowDown` to highlight, `Enter` to open, `Escape` to close).
- **Favorites & Recently Used:** Local storage-backed favorites and recently accessed tools automatically sync in the sidebar and header.
- **Premium Jet-Black Dark Mode:** A sleek, minimal, and modern dark black/charcoal theme that is easy on the eyes.
- **Fully Responsive Layout:** Optimized for desktop, tablet, and mobile views.

---

## Repository Structure

```
├── assets/
│   ├── css/
│   │   ├── style.css           # Core minimalist design system and style rules
│   │   └── responsive.css      # Mobile, tablet, and screen layout adjustments
│   ├── js/
│   │   ├── app.js              # Bootstrap and main layout controller
│   │   ├── theme.js            # Light/Dark mode state engine
│   │   ├── storage.js          # LocalStorage helper for favorites/recents
│   │   └── search.js           # Debounced search and matching engine
│   └── images/                 # Favicons, icons, and logo assets
├── components/
│   ├── header.js               # Global header dropdowns, search bar, & theme toggle
│   ├── sidebar.js              # Categories navigation, favorites, & recents lists
│   └── footer.js               # Dynamic footer component
├── data/
│   └── tools.json              # Config database for all ~120 tools
├── tools/                      # Tool pages categorized by utility
│   ├── image/                  # Resize, compress, crop, crop-aspect, meme, OCR, and filters
│   ├── pdf/                    # Merge, split, annotate, secure, sign, encrypt, and convert PDFs
│   └── converter/              # Encoders, decoders, base64, hex, binary, currency, and unit converters
├── index.html                  # Homepage with category grids and central search bar
├── manifest.json               # PWA configuration manifest
└── sw.js                       # Service worker with comprehensive pre-cached assets list
```

---

## Running Locally

Because the project uses ES6 Javascript Modules (`type="module"`), opening the files directly in a browser via the file protocol (`file:///...`) will trigger browser CORS restrictions. You must run a local HTTP server:

### Option 1: Python (Built-in)
Run the following command in the project root:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: Node.js (http-server)
Run using npx:
```bash
npx http-server -p 8000
```
Then open `http://localhost:8000` in your browser.

---

## Security & Privacy

ToolHub Pro does not collect, log, or transmit any user files or text inputs. Everything is compiled and processed locally in your browser memory:
- **No Analytics Tracking:** We don't track your tools usage.
- **No Server Infrastructure:** The site is hosted statically and functions entirely in sandbox mode on client resources.
- **Immediate Resource Cleanup:** Files loaded for conversion are released from memory as soon as the browser tab is closed.

---

## License
This project is open-source. Feel free to use, modify, and self-host!
