# Fluxify Media

Production-ready PHP + MySQL website and admin CMS for Fluxify Media.

## Stack
- PHP 8.2 (MySQLi)
- MySQL 8
- PHPMailer (Composer)
- Frontend: HTML/CSS/JS + Tailwind CDN + AOS + Font Awesome + Quill + DataTables + SortableJS + Toastify + Dropzone

## Local Setup (XAMPP / WAMP / Laragon)
1. Put project in your web root (example `htdocs/fluxify-media`).
2. Create database and schema:
   - Open phpMyAdmin and create DB (or run `database/schema.sql` directly).
3. Update `config/config.php`:
   - `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`
   - `SITE_URL` (example `http://localhost/fluxify-media`)
   - `MAIL_HOST`, `MAIL_USER`, `MAIL_PASS`, `MAIL_PORT`
   - `ANTHROPIC_API_KEY`
   - `WHATSAPP_NUMBER`
4. Install PHPMailer:
   - `composer require phpmailer/phpmailer`
5. Seed default data:
   - Open terminal in project and run `php database/seed.php`
6. Ensure upload permissions:
   - `uploads/` writable (`chmod 755 uploads` on Linux hosting)

## Admin Login
- URL: `/admin/login.php`
- Default email: value of `ADMIN_EMAIL` from `config/config.php`
- Default password: value of `ADMIN_DEFAULT_PASSWORD` from `config/config.php`

## Core Paths
- Public site: `index.php`, `about.php`, `services.php`, `portfolio.php`, `case-studies.php`, `testimonials.php`, `blog.php`, `blog-post.php`, `contact.php`
- Admin: `/admin/*`
- APIs: `/api/*`

## Gmail SMTP (PHPMailer)
1. Enable 2-step verification on Gmail account.
2. Create App Password from Google account security.
3. Use:
   - `MAIL_USER = your Gmail address`
   - `MAIL_PASS = app password`
   - `MAIL_HOST = smtp.gmail.com`
   - `MAIL_PORT = 587`

## Deploy to Shared Hosting / cPanel (Optional)
1. Upload all files to `public_html/fluxify-media`.
2. Import `database/schema.sql`.
3. Set config constants and SMTP credentials.
4. Run `database/seed.php` once.
5. Ensure `uploads/` folder is writable.
