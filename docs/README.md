# mdtopdf — Markdown Studio

**mdtopdf** ek modern, fast aur 100% client-side **Markdown to PDF & DOCX Converter** web application hai, jo sleek **Glassmorphic Black & Yellow** design me hai. Isme aap Markdown text likh ya paste kar sakte hain, side-by-side **Live Preview** dekh sakte hain, aur ek click me **PDF** ya **MS Word (.docx)** file download kar sakte hain.

---

## 🖥️ User Interface & Features Guide

Web app me user ko screen par dikhne wale sabhi sections aur features ki complete details:

---

### 1. 🔝 Top Header Bar (Navigation & Document Controls)

- **Brand Logo & Title**: Prominent `mdtopdf` logo with subtitle `Markdown Studio`.
- **Editable Document Title**: Header me document title input field (default: `Untitled Document`). Isme name change karne par export hone wali file ka name automatically sync ho jata hai.
- **Auto-Save Status Badge**: Real-time `<Saved>` indicator jo batata hai ki aapka text browser local storage me automatically save ho raha hai.
- **Upload .md Button** (`<Upload .md>`): Top bar me dedicated file upload button, jis par click karke aap local computer se koi bhi `.md`, `.markdown` ya `.txt` file load kar sakte hain.
- **View Toggle Switcher** (`Split` | `Edit` | `Preview`):
  - **Split**: Editor aur Preview dono side-by-side dikhte hain.
  - **Edit**: Screen par kewal Editor pane full view me dikhta hai.
  - **Preview**: Screen par kewal rendered Live Preview document dikhta hai.
- **Document Style Selector Dropdown**: Live Preview styling change karne ke 4 presets:
  - **Dark Yellow** *(Default)*: High-contrast obsidian black backdrop with yellow headings & accents.
  - **GitHub Style**: Official GitHub README Markdown layout.
  - **Academic Paper**: Formal paper design with serif typography (`Lora`).
  - **Minimalist**: Clean whitespace design with modern typography.
- **Theme Toggle Button** (`<Moon / Sun>`): App theme ko **Dark Glass** aur **Light Glass** me switch karne ke liye.
- **Export Button** (`<Export>`): Document export glass modal open karne ke liye.

---

### 2. 🛠️ Floating Formatting Toolbar

Editor ke theek upar ek floating glass toolbar hai jisme ye buttons milte hain:

| Category | Icon / Button | Function | Keyboard Shortcut |
| :--- | :---: | :--- | :---: |
| **History** | `<Undo>` | Last change ko Undo karein | `Ctrl + Z` |
| **History** | `<Redo>` | Undo kiye gaye change ko Redo karein | `Ctrl + Y` / `Ctrl + Shift + Z` |
| **Text Style** | **B** (Bold) | Selected text ko **Bold** karein (`**text**`) | `Ctrl + B` |
| **Text Style** | *I* (Italic) | Selected text ko *Italic* karein (`*text*`) | `Ctrl + I` |
| **Text Style** | ~~S~~ (Strikethrough) | Text par ~~Strikethrough~~ line add karein (`~~text~~`) | — |
| **Headings** | **H₁**, **H₂**, **H₃** | Heading 1 (`#`), Heading 2 (`##`), Heading 3 (`###`) insert karein | — |
| **Blocks** | Blockquote (`>`) | Quote callout block insert karein | — |
| **Blocks** | Inline Code (`` ` ``) | Code highlight text wrap karein | — |
| **Blocks** | Code Block (```) | Syntax highlighted code block wrap karein | `Ctrl + Shift + C` |
| **Lists** | Unordered List | Bullet list (`-`) insert karein | — |
| **Lists** | Ordered List | Numbered list (`1.`) insert karein | — |
| **Lists** | Task List | Checkbox list (`- [ ]`) insert karein | — |
| **Inserts** | Link | Hyperlink (`[title](url)`) insert karein | `Ctrl + K` |
| **Inserts** | Image | Image tag (`![alt](url)`) insert karein | — |
| **Inserts** | Table | Markdown Table structure insert karein | — |
| **Inserts** | Horizontal Line | Divider line (`---`) insert karein | — |
| **Utilities** | Copy HTML | Rendered HTML code ko clipboard par copy karein | — |
| **Utilities** | Clear Editor | Confirmation prompt ke sath editor clear karein | — |
| **Utilities** | Cheat Sheet (`?`) | Keyboard Shortcuts & Markdown guide modal kholein | — |

---

### 3. ✍️ Workspace Split View (Editor & Live Preview)

- **Markdown Editor Pane (Left Side)**:
  - **Line Numbers Gutter**: Left margin par lines 1, 2, 3... automatically sync hoti hain.
  - **Monospace Editor Font**: Clear `Fira Code` code font.
  - **Sync Scroll Badge** (`Sync Scroll: ON/OFF`): Editor scroll karne par Live Preview bhi proportionally scroll hota hai. Toggle button se ise ON/OFF kar sakte hain.
  - **Drag & Drop Zone**: `.md` file ko direct editor par drag & drop karke load kar sakte hain.
- **Draggable Resizer Divider**: Center me vertical line jise mouse se drag karke Editor aur Preview panes ki width adjust kar sakte hain.
- **Live Preview Pane (Right Side)**:
  - Real-time rendered HTML document display.
  - **Syntax Highlighting**: Code blocks me language badge aur one-click **Copy Code** button.
  - **Print Button** (`<Print>`): Direct multi-page document print karne ya PDF save karne ke liye browser print dialog open karta hai.

---

### 4. 📊 Bottom Glass Footer (Status Bar)

Screen ke bottom me live document metrics dikhte hain:
- **Words**: Total word count.
- **Characters**: Total character count.
- **Est. Reading Time**: Document read karne ka estimated time (`1 min`, `2 min` etc.).
- **Lines**: Total line count.
- **Branding**: `Powered by mdtopdf Studio`.

---

### 5. 🗂️ Modals (Dialog Windows)

#### 📄 Export Document Modal (`<Export>` Click par)
- **File Name Input**: Custom filename set karne ke liye (default document title se sync hota hai).
- **Page Format Selector**: Page size select karein (`A4`, `Letter`, `Legal`).
- **Margin Selector**: Margins adjust karein (`Normal 10mm`, `Narrow 5mm`, `Wide 15mm`, `Zero 0mm`).
- **Download PDF Button**: Clean vector PDF compile karta hai jisme headings aur font **crisp black font (#000000)** me hoti hain.
- **Download DOCX Button**: Direct Microsoft Word compatible **OpenXML `.docx`** file download karta hai.

#### ⌨️ Keyboard Shortcuts Cheat Sheet Modal (`< ? >` Click par)
- Editor shortcuts (`Ctrl+Z`, `Ctrl+Y`, `Ctrl+B`, `Ctrl+I`, `Ctrl+K`, `Ctrl+S`, `Ctrl+Shift+C`) aur Markdown guide ka visual cheat sheet.

---

## 🛠️ Technology Stack

- **Frontend Core**: HTML5, CSS3 (Glassmorphic variables & tokens, `@media print`), Vanilla JavaScript ES6+.
- **CDN Libraries**:
  - `Marked.js` (Markdown parsing)
  - `DOMPurify` (XSS sanitization security)
  - `Highlight.js` (Code block syntax highlighting)
  - `html2pdf.js` (Vector PDF compilation)
  - `html-docx-js` (Native MS Word OpenXML DOCX compilation)
  - `Font Awesome 6` (Vector icons)
  - `Google Fonts` (`Plus Jakarta Sans`, `Inter`, `Fira Code`, `Lora`)


