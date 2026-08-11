# CampusPulse LMS

> **Full-Stack Learning Management System**  
> Tailored for the Department of Computer Applications, B. N. College, Patna.  
> Designed for managing courseware, academic assessments, notice updates, and student records under a modern and responsive light-theme system.

---

## Features

### 1. Student Self-Registration & Verification
* **Email Verification (OTP-based)**: Validates student email addresses during registration by sending a 6-digit verification code using Brevo's HTTP Email API.
* **Mandatory Profile Photo**: Requires students to upload a profile photo during registration. Employs `Cropper.js` to ensure the photo is cropped to a perfect square.
* **Teacher Approval Flow**: Newly registered student accounts default to pending status and must be approved by a teacher or administrator before obtaining login access.
* **Profile & Photo Editing**: Students can modify their profile details and change their photo, but are restricted from deleting or clearing their profile picture.

### 2. Academic & Courseware Management
* **Dynamic Enrollment**: Automatically enrolls students into courses aligned with their current semester.
* **Study Material & Assignments**: Teachers can post class notes, study materials, and assign assignments with file attachment support (PDF, DOCX, Images).
* **MCQ Examination System**: Integrated portal for students to take timed online exams with automatic submission support and subsequent result analytics.

### 3. Analytics & Attendance Tracking
* **Daily Engagement Metrics**: Tracks page views, active session lengths, and unique visitor logins.
* **Attendance Tracking**: Auto-calculates attendance records. Warns students and alerts teachers/admins if attendance percentages drop below the configured threshold (e.g., 75%).

### 4. Progressive Web App (PWA)
* **Installable App**: Supports installation on desktop and mobile home screens.
* **Web Push Notifications**: Leverages VAPID keys and Service Workers to notify users about notices and announcements in real-time.

---

## Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas (with Mongoose ODM & GridFS for media files storage)
* **Frontend**: Plain HTML5, Vanilla JavaScript, CSS Custom Properties (Design System)
* **Email Integration**: Brevo (Sendinblue) HTTP API
* **Third-Party Libraries**: `Cropper.js` (Image cropping), `bcryptjs` (Hashing), `jsonwebtoken` (Auth tokens), `express-rate-limit` (Security), `ua-parser-js` (Device analytics)

---

## Directory Structure

```text
e:\BCA LMS
├── config/             # Database connection & Multer GridFS setup
├── controllers/        # Express handlers (auth, student, admin, notices, etc.)
├── models/             # Mongoose schemas (User, Course, Attendance, RegistrationOtp)
├── routes/             # Express routing middleware & rate limiters
├── utils/              # Helper functions & email templates
├── public/             # Static UI pages, styles, scripts, and sw.js
├── uploads/            # Temporary disk uploads location
├── server.js           # Server boot entry point
├── package.json        # Dependencies & start scripts
└── README.md           # System documentation
```

---

## Setup & Installation

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **MongoDB** (Local instance or MongoDB Atlas Connection URI)
* **Brevo API Key** (Required for sending OTP emails)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd campuspulse-lms
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and define the following variables:
   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret_key
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/campuspulse
   
   # Admin Account Seed Options
   ADMIN_EMAIL=admin@bncollege.edu
   ADMIN_PASS=Admin@1234
   
   # Brevo Email SMTP Config
   BREVO_API_KEY=your_brevo_api_key
   BREVO_SENDER_EMAIL=your_brevo_verified_sender@email.com
   
   # PWA Push Notifications Config
   VAPID_PUBLIC_KEY=your_vapid_public_key
   VAPID_PRIVATE_KEY=your_vapid_private_key
   VAPID_EMAIL=mailto:contact@yourdomain.com
   ```

4. **Run the Server locally**
   ```bash
   npm run dev
   ```
   The application will start on `http://localhost:3000`.

---

## Security Measures

* **Hashed Credentials**: Uses `bcryptjs` for secure password hashing and registration/forgot-password OTP hashing.
* **JWT Cookie-Based Session**: Employs HTTPOnly cookies for security against XSS.
* **Rate Limiting**: Protects sensitive endpoints (login, register, and OTP requests) using rate limit configurations to defend against brute-force attacks.
* **Input Sanitization**: Protects against HTML injection and scripts using `sanitize-html`.
