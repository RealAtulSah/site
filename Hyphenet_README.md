# Hyphenet Enterprises — Enterprise IT & Mobility Rentals Platform, Support Helpdesk, HRMS & Inventory Engine

A unified, full-stack enterprise web portal, IT service desk management system, Staff HRMS & Automated Payroll Engine, and Multi-Hub Warehouse Inventory Tracking platform for **Hyphenet Enterprises** (Est. 2019), India's premier provider of Enterprise IT Infrastructure, Server Farms, Mobility Solutions, and Computer-Based Examination Centers.

The platform unites an **18-page public commercial catalog & solutions showcase** with a **multi-tenant IT service desk & incident management portal (`/portal`)**, an integrated **Staff HRMS & Automated Payroll Engine**, and **Multi-Hub Warehouse Inventory Tracking**, supported by real-time event streaming, role-based workflows, automated SLA escalations, Google Workspace email routing, and statutory DPDP Act 2023 compliance.

---

## Table of Contents

- [Corporate Identity & Credentials](#corporate-identity--credentials)
- [Architecture Overview](#architecture-overview)
- [Key Technical Highlights](#key-technical-highlights)
- [Multi-Portal Role Architecture](#multi-portal-role-architecture)
- [Core Functional Workflows](#core-functional-workflows)
  - [Staff HRMS & Automated Payroll Engine](#staff-hrms--automated-payroll-engine)
  - [Multi-Hub Warehouse Inventory Tracking](#multi-hub-warehouse-inventory-tracking)
- [Public Website & Statutory Legal Hub](#public-website--statutory-legal-hub)
- [Security & Statutory Compliance](#security--statutory-compliance)
- [Project Directory Structure](#project-directory-structure)
- [RESTful API Reference](#restful-api-reference)
- [Environment Configuration](#environment-configuration)
- [Getting Started & Local Setup](#getting-started--local-setup)
- [Automated Testing & Verification](#automated-testing--verification)
- [Production Deployment (Hostinger Cloud)](#production-deployment-hostinger-cloud)
- [Contact & Support](#contact--support)

---

## Corporate Identity & Credentials

- **Entity**: Hyphenet Enterprises (Established 2019)
- **Registered Headquarters**: Devika Tower 6, Nehru Place, South Delhi, Delhi 110019, India
- **GSTIN**: `07AAMFH7619C1ZC`
- **PAN**: `AAMFH7619C`
- **Operational Support**: `+91 9354045878`
- **Support Desk Email**: `support@hyphenet.net`
- **Official Portal**: `https://hyphenet.net`

---

## Architecture Overview

```
                      +---------------------------------------+
                      |         End Users & Devices           |
                      |  (Desktop / Mobile / Tablet Viewports)|
                      +---------------------------------------+
                                          |
                                          v
                      +---------------------------------------+
                      |       LiteSpeed / Apache Web Server   |
                      |    (.htaccess Security & Static Cache)|
                      +---------------------------------------+
                         |                                 |
        Static HTML / CSS / Assets                 /api/* & Dynamic Routes
                         |                                 |
                         v                                 v
        +---------------------------------+  +-------------------------------+
        | Public Web & Legal Hub (27 pgs) |  |   Node.js Express Server      |
        | - Enterprise Catalog & Services |  |   (server.js, Port 3000)      |
        | - DPDP Cookie Consent Engine    |  +-------------------------------+
        | - Progressive Web App (PWA)     |     |       |          |       |
        +---------------------------------+     |       |          |       |
                                                |       |          |       |
                 +------------------------------+       |          |       +-------------------------+
                 |                                      |          |                                 |
                 v                                      v          v                                 v
+-------------------------------+  +--------------------------+  +-------------------+  +-------------------------+
| Multi-Role Support Portals    |  | Realtime Event Stream    |  | Background SLA    |  | External Integrations   |
| (/portal/)                    |  | (Server-Sent Events)     |  | Scheduler (Cron)  |  | - Google Workspace     |
| - Admin Command Center        |  | - Instant ticket updates |  | - Breach warning  |  |   Service Account API   |
| - Coordinator Operations      |  | - Live status sync       |  | - TL escalation   |  |   (Gmail REST API v1)   |
| - Field Engineer Workstation  |  | - Toast notifications    |  | - Daily digests   |  | - ExcelJS (Bulk Import) |
| - Client IT Support Desk      |  +--------------------------+  +-------------------+  +-------------------------+
| - Individual Client Desk      |                                          |
+-------------------------------+                                          v
                 |                                        +----------------------------------+
                 +--------------------------------------->| MySQL / MariaDB Relational DB    |
                                                          | - Self-Healing Schema Integrity  |
                                                          | - Composite & Covering Indexes   |
                                                          | - utf8mb4 Collation Safe         |
                                                          +----------------------------------+
```

---

## Key Technical Highlights

- **Pure Web Standards Design System**: Semantic HTML5, Vanilla CSS3 tokens, and modular Vanilla JavaScript with zero client-side bundling requirements.
- **Strict Zero-Gradient & Pure SVG Icon Rule**: 100% flat corporate color tokens (Deep Navy `#0f2740`, Brand Blue `#1565a0`, Brand Green `#4caf3f`, Neutral `#f4f6f9`) with vector SVG icons across all interfaces (zero representative UI emojis).
- **Multi-Tenant RESTful Backend**: Express 4.x application with strict rate limiting, Helmet HTTP security headers, CORS origin controls, and defense-in-depth file access blocks.
- **Self-Healing Relational Database**: Automated runtime verification (`src/database/schemaIntegrity.js`) ensuring missing columns, tables, composite indexes, and roles are dynamically applied without application downtime.
- **Real-Time Server-Sent Events (SSE)**: Native browser `EventSource` connection on `/api/realtime/stream` for zero-latency dashboard refresh across Admin, Coordinator, and Engineer consoles without external message broker overhead.
- **Automated SLA Tracking & Escalation Engine**: Dynamic timer calculation honoring client-specific SLA windows, supporting pause states, 24-hour hardware replacement shifts, and automated Team Lead email escalations upon breach risk.
- **Google Workspace Service Account Integration**: Direct RFC 2822 email generation and dispatch using official Google APIs with domain-wide delegation, originating from `support@hyphenet.net`.
- **Staff HRMS & Automated Payroll Engine**: Integrated employee attendance tracking, multi-tier leave approval workflows, dynamic tax/deduction calculations, and automated downloadable PDF salary slip generation.
- **Multi-Hub Warehouse Inventory Tracking**: Centralized asset lifecycle tracking managing enterprise servers, laptops, networking kits, and hardware maintenance status with cross-hub dispatch.
- **Progressive Web App (PWA)**: Mobile-optimized experience with Service Worker offline caching (`portal/sw.js`), web app manifest (`portal/manifest.json`), touch-friendly bottom navigation, and zero iOS auto-zoom form inputs.
- **Statutory DPDP Act 2023 Compliance**: Autonomous cookie consent modal with granular preference switches, persistent storage, unbundled communication consent, and audit logging.

---

## Multi-Portal Role Architecture

The Hyphenet IT Support Desk (`/portal`) provides dedicated operational workspaces tailored for five distinct roles:

### 1. Enterprise Admin Command Center (`/portal/admin`)
- **Executive Metrics Strip**: 4 compact KPI cards displayed in a single line (Total Tickets, Active In-Progress, Pending SLA, Resolved/Closed).
- **Master Enterprise Ticket Stream**: 1-line horizontal filter bar with real-time text search, status dropdown, date range picker (`All Time`, `Today`, `This Week`, `This Month`, `Custom Range`), and column sorting.
- **Staff HRMS & Attendance Management**: Employee records, leave requests, attendance logs, and appraisal workflows across office branches.
- **Automated Payroll Processing Engine**: Dynamic tax rules, gross-to-net salary computation, and bulk payslip dispatch.
- **Multi-Hub Warehouse & Inventory Command**: Cross-hub equipment stock transfers, vendor purchase orders, and asset retirement logs.
- **Authorized Client Domains Management**: Provision corporate clients, specify primary and secondary servicing locations, configure dedicated company group emails (`group_email`) for ticket notifications, and manage individual users.
- **Staff Directory & Management Hierarchy**: Provision and manage `ADMIN`, `COORDINATOR`, `ENGINEER`, and `CLIENT_IT_SUPPORT` accounts with reporting supervisor enforcement and ticket assignment preservation.
- **Automated Assignment Matrix**: Create and edit multi-company engineer dispatch rules with in-place branch location creation and collision-safe in-memory deduplication.

### 2. Service Coordinator Operations Desk (`/portal/coordinator`)
- **Real-Time Dispatch Queue**: Stream of all unassigned and newly raised incidents across client tenants.
- **Interactive Engineer Workload Inspection**: Live workload visualizer displaying active tickets, location assignments, and direct dispatch triggers.
- **Manual Assignment & Reassignment**: Assign tickets to eligible field engineers based on location coverage rules, preserving original engineer history.

### 3. Field Engineer Workstation (`/portal/engineer`)
- **Active Workstream Dashboard**: Unified tabs for `Active Work`, `Pending`, `Paused`, `Resolved`, and `Transferred`.
- **Live Ticket Action Lifecycle**: One-click actions to `Start Work`, `Pause Work` (with reason capture), `Resume Work`, and `Close Ticket` (with mandatory resolution remarks).
- **24-Hour SLA Shift for Hardware Replacement**: Dedicated action for complex hardware faults, shifting ticket SLA window by +24 hours, recalculating countdown timers, and notifying the client.
- **Colleague & Coordinator Reassignment**: Reassign tickets to peers or coordinators with automatic handover notice banners and retained read-only history.
- **Engineer Working Hours Metric**: Real-time KPI tracking net on-ticket working time for "Today" and "This Month", automatically deducting pause intervals.

### 4. Client IT Support Corporate Desk (`/portal/client-it`)
- **Single-Screen Master Feed**: 10-column compact table fitting standard displays without horizontal scrollbars, displaying Assigned Engineer status, Priority badges, and Station numbers.
- **Bulk Incident Spreadsheet Upload**: Streamed Excel (`.xlsx`) and CSV processing supporting hundreds of rows per file with requester employee name preservation.
- **External Ticket Number Duplicate Prevention**: Targeted duplicate checking strictly validating `external_reference` (client ticket ID) against database records and active spreadsheet rows.
- **Corporate Associate Provisioning**: 2-step OTP email verification flow for adding verified company associates matching the corporate email domain.
- **24-Hour Resolution Reopen Window**: Full authority to reopen closed company tickets within 24 hours of resolution.

### 5. Individual Client Portal (`/portal/user`)
- **Self-Service Incident Submission**: Dynamic office location selection restricted strictly to the user's registered corporate premises.
- **Live Ticket Tracker**: Real-time progress updates, assigned engineer profile cards, and SLA countdowns.
- **24-Hour Resolution Reopen Policy**: Reopen button active for exactly 24 hours post-resolution; transitions to disabled status with policy note once the window lapses.

---

## Core Functional Workflows

### Sequential Ticket Numbering (`HYP-ddmmyyyy-n`)
Generated by `src/utils/ticketNumber.js`, formatting the submission date as `ddmmyyyy` and appending an unpadded sequential integer counter reset daily per tenant.
*Example: `HYP-09102026-1`, `HYP-09102026-2`.*

### Immediate Support Desk & Group Email Routing
- **Central Support Notification**: Every new ticket raised immediately dispatches a detailed dossier to `support@hyphenet.net` (configurable via `SUPPORT_EMAIL`) with `replyTo` mapped directly to the client's email address.
- **Company Group Email (`group_email`)**: If a client domain has a designated corporate group email, a branded notification is sent strictly upon ticket raising (lifecycle events like assignment, close, or pause are excluded).
- **Lifecycle Client CC**: All client status communications (`sendTicketCreatedEmail`, `sendTicketAssignedEmail`, `sendTicketResolvedEmail`, `sendTicketClosedEmail`) CC `support@hyphenet.net`.

### 24-Hour SLA Reopen Policy Window
- Tickets resolved and closed remain eligible for client reopening for exactly 24 hours (`hoursSinceClosed <= 24`).
- Upon reopen (`POST /api/tickets/:id/reopen`), status reverts to `ASSIGNED` (or `OPEN`), `closed_at` and `closing_remark` are cleared, timeline events are recorded, and alerts are dispatched.
- Once 24 hours elapse, the reopen button is permanently disabled with a `>24h closed` indicator advising the user to log a new ticket.

### Realtime Dashboard Synchronization
Powered by `src/services/realtimeService.js` and `portal/js/realtime.js`:
- Connection opened over HTTP via `/api/realtime/stream` using Server-Sent Events.
- Automated 20-second keep-alive heartbeats prevent proxy timeouts on LiteSpeed and Nginx.
- Broadcast events (`TICKET_CREATED`, `TICKET_ASSIGNED`, `TICKET_UPDATED`) trigger instant queue updates.
- In-progress modal forms are protected from background re-render interruptions.

### Staff HRMS & Automated Payroll Engine
- **Attendance & Biometric Sync**: Daily check-in/out tracking with geolocation tagging and late arrival/overtime thresholds across office locations.
- **Multi-Tier Leave Workflow**: Self-service employee leave applications with automated manager routing, balance recalculation, and emergency leave policies.
- **Automated Payroll Computation**: Configurable base salary rules, statutory PF and ESI calculations, TDS deduction tiers, and variable allowances.
- **Automated Salary Slip Generation**: Batch generation of PDF salary slips with RFC 2822 email dispatch directly to employees.

### Multi-Hub Warehouse Inventory Tracking
- **Warehouse Inventory Nodes**: Centralized equipment tracking across inventory depots with serial number auditing.
- **Asset Lifecycle States**: Comprehensive status tracking (`Available`, `Rented`, `In-Transit`, `Under Maintenance`, `Retired`) with serial number auditing.
- **Hardware Fault & 24h Replacement Flow**: Tight coupling with the Field Engineer helpdesk workflow to dispatch replacement equipment within the 24-hour SLA window.
- **Cross-Hub Dispatch & Transfers**: Inter-hub asset movement tracking with digital gate-pass generation and transit status logs.

---

## Public Website & Statutory Legal Hub

### 18 Public Pages
1. `index.html` — Master Homepage with hero slider, rental equipment showcase, corporate statistics, and quick quote builder.
2. `about-us.html` — Corporate history (Est. 2019), Nehru Place headquarters, and core operational values.
3. `laptops-rental.html` — Enterprise commercial laptops (Dell Latitude, HP EliteBook, Lenovo ThinkPad).
4. `desktops-rental.html` — Commercial desktops, micro form factors, and all-in-one workstations.
5. `mac-rental.html` — Apple Silicon hardware (M1/M2/M3 MacBook Pro, MacBook Air, Mac Studio, Mac Mini).
6. `workstations-rental.html` — High-performance GPU rendering stations (NVIDIA RTX 4090, RTX 6000 Ada, Intel Xeon W).
7. `servers-rental.html` — Enterprise rackmount and blade servers (Dell PowerEdge, HPE ProLiant).
8. `networking-rental.html` — Managed networking hardware (Cisco Catalyst switches, Meraki Wi-Fi 6 APs, Fortinet firewalls).
9. `storage-rental.html` — Enterprise SAN & NAS storage systems (Synology, Dell EMC PowerVault).
10. `cctv-rental.html` — 4K IP security surveillance kits and monitoring infrastructure.
11. `services.html` — Turnkey IT infrastructure rental solutions and 4-step deployment lifecycle.
12. `exam-center-solutions.html` — Computer-Based Test (CBT) examination center infrastructure (100 to 5,000+ nodes).
13. `managed-it-services.html` — Enterprise managed IT support and on-site resident engineer programs.
14. `careers.html` — Career opportunities, corporate culture, active job openings, and online application form.
15. `contact-us.html` — Central contact hub with interactive quote form and corporate branch directories.
16. `blog.html` — Enterprise IT knowledge center, industry insights, and infrastructure whitepapers.
17. `legal.html` — Central statutory compliance and policy hub.
18. `404.html` — Context-aware branded 404 error page.

### 9 Statutory Legal Compliance Pages (`legal/`)
1. `legal/index.html` — Legal documents directory and compliance index.
2. `legal/terms-and-conditions.html` — Website and general service terms of use.
3. `legal/privacy-policy.html` — Comprehensive Privacy Policy aligned with the Digital Personal Data Protection (DPDP) Act 2023.
4. `legal/rental-terms-and-conditions.html` — Master IT equipment rental agreement, security deposit, and equipment custody terms.
5. `legal/it-support-service-terms.html` — Service Level Agreement (SLA), incident response matrices, and maintenance terms.
6. `legal/cookie-policy.html` — Granular cookie usage disclosures and user consent management.
7. `legal/refund-cancellation-policy.html` — Commercial cancellation, advance rental refund, and security deposit settlement terms.
8. `legal/data-security-protection.html` — Technical and organizational security measures, encryption, and access control policies.
9. `legal/grievance-redressal.html` — Statutory grievance redressal mechanism and Data Protection Officer (DPO) contact matrix.

---

## Security & Statutory Compliance

The platform adheres to strict enterprise defensive standards and has undergone a comprehensive **50-category full-stack security audit**:

- **Defensive Source Code Isolation**: Direct HTTP access to `/src`, `/tests`, `/scratch`, `package.json`, `.config.js`, `.sql`, `.log`, `.env`, and markdown documentation is blocked with custom 404 responses.
- **XSS Mitigation**: Global HTML entity sanitization (`window.escapeHtml`) applied to all user-controlled data fields across all portal views.
- **Production Secret Validation**: Mandatory verification of `JWT_SECRET` strength (>= 32 characters, rejecting default development keys) before server boot in production.
- **CORS Whitelisting**: Strict origin controls permitting configured domains (`hyphenet.net`, `www.hyphenet.net`, `localhost`) and Hostinger preview subdomains (`*.hostingersite.com`).
- **File Upload Security**: Cryptographically randomized filenames using CSPRNG, strict image MIME type whitelisting, 5MB file size limits, and script execution prevention via `uploads/.htaccess`.
- **Granular Rate Limiting**: Independent rate limiting policies for authentication attempts (`authLimiter`), OTP requests (`otpResendLimiter`), and standard API queries (`apiLimiter`).
- **DPDP Act 2023 Compliance**: Mandatory cookie consent, unbundled communications consent, and full audit logging for terms acceptance across registration and contact forms.

---

## Project Directory Structure

```
hyphenet/
├── .env.example                     # Environment template for local development
├── .env.production.example          # Production environment template for Hostinger
├── .htaccess                        # Master Apache / LiteSpeed server rules & security
├── 404.html                         # Public website context-aware 404 error page
├── HOSTINGER_DEPLOYMENT_GUIDE.md    # Hostinger Cloud & hPanel deployment manual
├── README.md                        # Master project documentation
├── ecosystem.config.js              # PM2 process manager configuration
├── favicon.png                      # Official site favicon
├── logo.png                         # Official corporate brand logo
├── package.json                     # Node.js project manifest & scripts
├── robots.txt                       # Search engine crawler instructions
├── server.js                        # Master Express application entry point
├── sitemap.xml                      # XML sitemap for public pages
│
├── css/                             # Public website styles
│   ├── cookieConsent.css            # DPDP Act 2023 Cookie Consent styling
│   └── style.css                    # Master zero-gradient corporate stylesheet
│
├── js/                              # Public website interactive scripts
│   ├── app.js                       # Public UI logic (sliders, tabs, modals, accordions)
│   └── cookieConsent.js             # Autonomous DPDP Cookie Consent engine
│
├── legal/                           # Statutory legal policies (9 pages)
│   ├── cookie-policy.html
│   ├── data-security-protection.html
│   ├── grievance-redressal.html
│   ├── index.html
│   ├── it-support-service-terms.html
│   ├── privacy-policy.html
│   ├── refund-cancellation-policy.html
│   ├── rental-terms-and-conditions.html
│   └── terms-and-conditions.html
│
├── portal/                          # Support Helpdesk & Incident Management System
│   ├── 404.html                     # Portal-scoped branded 404 page
│   ├── index.html                   # Portal gateway & automatic role router
│   ├── login.html                   # Central sign-in & registration portal
│   ├── manifest.json                # PWA application manifest
│   ├── offline.html                 # PWA offline fallback screen
│   ├── sw.js                        # Service Worker caching & background sync
│   ├── admin/
│   │   └── index.html               # Admin Command Center
│   ├── client-it/
│   │   └── index.html               # Client IT Support Corporate Desk
│   ├── coordinator/
│   │   └── index.html               # Service Coordinator Operations Desk
│   ├── engineer/
│   │   └── index.html               # Field Engineer Workstation
│   ├── user/
│   │   └── index.html               # Individual Client Self-Service Desk
│   ├── css/
│   │   └── portal.css               # Support portal stylesheet & mobile card grids
│   └── js/
│       ├── api.js                   # Unified API client & JWT token management
│       ├── icons.js                 # Pure SVG vector icon library
│       ├── mobileNav.js             # Responsive 4-tab mobile bottom navigation
│       ├── profile.js               # User profile dropdown & sign-out handlers
│       └── realtime.js              # Server-Sent Events client & live sync engine
│
├── src/                             # Backend application source code
│   ├── config/
│   │   └── database.js              # MySQL connection pool & collation handler
│   ├── controllers/
│   │   ├── adminController.js       # Admin domain, staff, and assignment APIs
│   │   ├── authController.js        # Authentication, JWT issuance, OTP, and registration
│   │   ├── clientItController.js    # Client IT domain tickets, users, and bulk upload
│   │   ├── coordinatorController.js # Dispatch queue, assignment, and workload inspection
│   │   ├── engineerController.js    # Workstation tickets, timer tracking, and handover
│   │   ├── exportController.js      # Ticket export in Excel and CSV formats
│   │   ├── hrmsController.js        # Staff HRMS attendance, leaves, and payroll engine
│   │   ├── inventoryController.js   # Multi-hub warehouse stock and equipment lifecycle
│   │   └── ticketController.js      # Ticket creation, detail retrieval, and reopen logic
│   ├── database/
│   │   ├── init.js                  # Database seeder & table initialization
│   │   ├── schema.sql               # Master MySQL schema DDL & seed records
│   │   ├── schemaIntegrity.js       # Self-healing database verification service
│   │   └── migrate_*.js             # Incremental database migrations (v5 to v11)
│   ├── middleware/
│   │   ├── auth.js                  # JWT verification & multi-role authorization
│   │   ├── errorHandler.js          # Centralized error handler
│   │   ├── rateLimiter.js           # Express rate limiting policies
│   │   └── upload.js                # Secure Multer file upload handler
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── clientItRoutes.js
│   │   ├── coordinatorRoutes.js
│   │   ├── engineerRoutes.js
│   │   ├── exportRoutes.js
│   │   ├── hrmsRoutes.js
│   │   ├── inventoryRoutes.js
│   │   ├── realtimeRoutes.js
│   │   └── ticketRoutes.js
│   ├── services/
│   │   ├── assignmentService.js     # Location & domain-based engineer matching
│   │   ├── bulkTicketService.js     # ExcelJS bulk ticket parser & importer
│   │   ├── duplicateDetectionService.js # External ticket number duplicate engine
│   │   ├── emailService.js          # Branded HTML email generator & dispatcher
│   │   ├── escalationService.js     # Background SLA monitor & Team Lead alerts
│   │   ├── hrmsService.js           # Biometric attendance rules & payroll PDF generator
│   │   ├── inventoryService.js      # 6-hub warehouse inventory allocation & tracking
│   │   └── realtimeService.js       # Server-Sent Events broadcasting hub
│   └── utils/
│       ├── gmail.js                 # Google Workspace Service Account client
│       └── ticketNumber.js          # Sequential HYP-ddmmyyyy-n ticket generator
│
├── scripts/
│   └── package_production.js        # Hostinger production packaging script
│
├── tests/                           # Automated test suites (38 suites)
│   ├── verify_bulk_upload_e2e.js
│   ├── verify_client_it_support.js
│   ├── verify_company_group_email.js
│   ├── verify_dpdp_and_consent.js
│   ├── verify_engineer_portal_enhancements.js
│   ├── verify_mobile_ux.js
│   ├── verify_production.js
│   ├── verify_realtime_auto_refresh.js
│   ├── verify_security_audit.js
│   └── verify_ticket_reopen_24h.js
│
└── uploads/                         # User-submitted ticket attachment directory
    └── .htaccess                    # Script execution prevention rules
```

---

## RESTful API Reference

All backend API routes are mounted under the `/api/` prefix and protected by rate limiters and authentication middleware:

### Authentication (`/api/auth`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/auth/login` | Authenticate with email and password | Public |
| `POST` | `/api/auth/register` | Register a new client user under an authorized domain | Public |
| `POST` | `/api/auth/forgot-password` | Request password reset OTP | Public |
| `POST` | `/api/auth/verify-otp` | Verify OTP code | Public |
| `POST` | `/api/auth/reset-password` | Reset password using verified token | Public |
| `GET` | `/api/auth/me` | Fetch authenticated user profile | Authenticated |
| `POST` | `/api/auth/change-password` | Update account password | Authenticated |

### Ticket Management (`/api/tickets`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/tickets` | Submit a single support incident | `USER`, `CLIENT_IT_SUPPORT` |
| `GET` | `/api/tickets/my-tickets` | List tickets submitted by current user | `USER` |
| `GET` | `/api/tickets/:id` | Retrieve full ticket dossier and timeline | Authenticated |
| `POST` | `/api/tickets/:id/reopen` | Reopen resolved ticket within 24-hour window | `USER`, `CLIENT_IT_SUPPORT` |
| `GET` | `/api/tickets/locations/active` | Get registered office locations for user's domain | Authenticated |
| `GET` | `/api/tickets/bulk-template` | Download standardized bulk Excel import template | `CLIENT_IT_SUPPORT`, `ADMIN` |
| `POST` | `/api/tickets/bulk-upload` | Import batch incidents via Excel or CSV | `CLIENT_IT_SUPPORT`, `ADMIN` |

### Field Engineer Operations (`/api/engineer`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/engineer/tickets` | Retrieve assigned and transferred workstream | `ENGINEER` |
| `POST` | `/api/engineer/tickets/:id/start` | Transition ticket to IN_PROGRESS | `ENGINEER` |
| `POST` | `/api/engineer/tickets/:id/pause` | Pause active work and log reason | `ENGINEER` |
| `POST` | `/api/engineer/tickets/:id/resume` | Resume paused ticket work | `ENGINEER` |
| `POST` | `/api/engineer/tickets/:id/close` | Resolve and close ticket with remarks | `ENGINEER` |
| `POST` | `/api/engineer/tickets/:id/reassign` | Transfer ticket to colleague or coordinator | `ENGINEER` |
| `POST` | `/api/engineer/tickets/:id/hardware-replacement` | Shift SLA deadline by +24 hours for hardware fault | `ENGINEER` |
| `GET` | `/api/engineer/work-hours` | Retrieve net working hours for today and current month | `ENGINEER` |

### Service Coordinator Operations (`/api/coordinator`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/coordinator/tickets` | Retrieve operational queue (unassigned & active) | `COORDINATOR`, `ADMIN` |
| `POST` | `/api/coordinator/tickets/:id/assign` | Manually assign ticket to field engineer | `COORDINATOR`, `ADMIN` |
| `GET` | `/api/coordinator/engineers/workload` | Inspect real-time engineer workloads | `COORDINATOR`, `ADMIN` |

### Admin Command Center (`/api/admin`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/admin/metrics` | Retrieve enterprise KPI metrics | `ADMIN` |
| `GET` | `/api/admin/tickets` | Master ticket stream with filters and sorting | `ADMIN` |
| `GET` | `/api/admin/domains` | List authorized client domains and group emails | `ADMIN` |
| `POST` | `/api/admin/domains` | Register new corporate domain with locations | `ADMIN` |
| `PUT` | `/api/admin/domains/:id` | Update domain, locations, status, or group email | `ADMIN` |
| `POST` | `/api/admin/domains/:id/locations`| Add branch office location to existing domain | `ADMIN` |
| `GET` | `/api/admin/staff` | List staff directory with reporting hierarchy | `ADMIN` |
| `POST` | `/api/admin/staff` | Create new staff user account | `ADMIN` |
| `PUT` | `/api/admin/staff/:id` | Update staff profile, designation, or manager | `ADMIN` |
| `GET` | `/api/admin/assignments` | List automated engineer assignment rules | `ADMIN` |
| `POST` | `/api/admin/assignments` | Create multi-company engineer assignment rules | `ADMIN` |
| `PUT` | `/api/admin/assignments/:id` | Update individual assignment rule scope | `ADMIN` |
| `DELETE` | `/api/admin/assignments/:id` | Delete assignment rule | `ADMIN` |

### Client IT Support Operations (`/api/client-it`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/client-it/tickets` | Retrieve all tickets across company tenant | `CLIENT_IT_SUPPORT` |
| `GET` | `/api/client-it/users` | List company associates in tenant directory | `CLIENT_IT_SUPPORT` |
| `POST` | `/api/client-it/users/send-otp` | Send email OTP for associate creation | `CLIENT_IT_SUPPORT` |
| `POST` | `/api/client-it/users/verify-and-create` | Verify OTP and provision company associate | `CLIENT_IT_SUPPORT` |
| `PATCH` | `/api/client-it/users/:id/status` | Toggle associate active/restricted status | `CLIENT_IT_SUPPORT` |

### Staff HRMS & Payroll (`/api/hrms`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/hrms/employees` | List active employees and attendance profiles across hubs | `ADMIN`, `COORDINATOR` |
| `POST` | `/api/hrms/attendance/check-in` | Record daily employee check-in with location log | Authenticated Staff |
| `POST` | `/api/hrms/leaves` | Submit new staff leave application | Authenticated Staff |
| `PUT` | `/api/hrms/leaves/:id/status` | Approve or reject leave request | `ADMIN`, `COORDINATOR` |
| `POST` | `/api/hrms/payroll/generate` | Run automated monthly payroll engine and deductions | `ADMIN` |
| `GET` | `/api/hrms/payroll/payslip/:id` | Download standardized PDF salary slip | Authenticated Staff |

### Multi-Hub Warehouse & Inventory (`/api/inventory`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/inventory/hubs` | List warehouse inventory nodes and stock summaries | `ADMIN`, `COORDINATOR` |
| `GET` | `/api/inventory/items` | Query IT equipment catalog with hub & condition filters | `ADMIN`, `COORDINATOR`, `ENGINEER` |
| `POST` | `/api/inventory/dispatch` | Initiate cross-hub equipment transfer or client delivery | `ADMIN`, `COORDINATOR` |
| `POST` | `/api/inventory/maintenance` | Log hardware replacement status under 24h SLA | `ENGINEER`, `ADMIN` |

### Real-Time & System (`/api/realtime`, `/api/health`, `/api/export`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/api/realtime/stream` | Server-Sent Events stream for live dashboard sync | Authenticated |
| `GET` | `/api/health` | Service health status and database integrity check | Public |
| `GET` | `/api/export/tickets` | Export ticket dataset as Excel or CSV | `ADMIN`, `COORDINATOR` |

---

## Environment Configuration

Create a `.env` file in the project root based on `.env.example`:

```env
# Server Runtime
PORT=3000
NODE_ENV=development

# MySQL / MariaDB Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=hyphenet_db
DB_USER=your_db_username
DB_PASSWORD=your_db_password

# JWT Authentication
JWT_SECRET=your_secure_random_jwt_secret_min_32_chars
JWT_EXPIRES_IN=7d

# Initial Administrator Seed Credentials
ADMIN_EMAIL=admin@hyphenet.net
ADMIN_INITIAL_PASSWORD=your_secure_initial_admin_password
SEED_DEMO_DATA=false

# Central Support Desk Routing
SUPPORT_EMAIL=support@hyphenet.net

# Google Workspace / Gmail Service Account API
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="<paste_private_key_pem_from_google_cloud_console_here>"
GOOGLE_IMPERSONATE_USER=operations@hyphenet.net
GMAIL_USER=operations@hyphenet.net

# File Storage Limits
UPLOAD_DIR=uploads
MAX_FILE_SIZE_MB=5

# Allowed CORS Origins (comma-separated in production)
ALLOWED_ORIGINS=https://hyphenet.net,https://www.hyphenet.net,http://localhost:3000
```

---

## Getting Started & Local Setup

### Prerequisites
- **Node.js**: Version 18.x or 20.x LTS
- **npm**: Version 9.x or higher
- **MySQL / MariaDB**: Version 8.0+ or MariaDB 10.5+

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RealAtulSah/Hyphenet.git
   cd Hyphenet
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure the environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your local MySQL credentials and JWT secret
   ```

4. **Initialize the database**:
   ```bash
   npm run db:init
   ```
   *This seeds core roles, warehouse hubs, the primary admin account, and default configurations.*

5. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The server starts on `http://localhost:3000` with automated watch mode.*

6. **Access the application**:
   - **Public Website**: `http://localhost:3000/`
   - **Support Portal Gateway**: `http://localhost:3000/portal`
   - **Central Sign-In**: `http://localhost:3000/portal/login.html`
   - **API Health Check**: `http://localhost:3000/api/health`

---

## Automated Testing & Verification

The project includes over **38 automated test suites** validating full-stack features, security posture, and production integrity:

```bash
# Run core test suites
npm test

# Run Hostinger Cloud production readiness checks (28 checks)
npm run prod:check

# Run full 50-category defensive security audit (48 checks)
node tests/verify_security_audit.js

# Run DPDP Act 2023 statutory consent verification (44 checks)
node tests/verify_dpdp_and_consent.js

# Run mobile responsiveness and card layout checks (20 checks)
node tests/verify_mobile_ux.js

# Run 24-hour ticket reopen policy verification (28 checks)
node tests/verify_ticket_reopen_24h.js

# Run real-time SSE event verification (30 checks)
node tests/verify_realtime_auto_refresh.js
```

---

## Production Deployment (Hostinger Cloud)

The application is tailored for deployment on **Hostinger Cloud / Web Hosting** using the **hPanel Node.js Application Manager**:

### 1. Build the Production Bundle
Generate a clean, production-ready package excluding development tests, git history, and local environment secrets:
```bash
npm run build:prod
```
*Creates `hyphenet-hostinger-production.zip` in the project root.*

### 2. Upload to Hostinger File Manager
1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com) and navigate to **Websites** &rarr; `hyphenet.net` &rarr; **File Manager**.
2. Open `public_html/`.
3. Upload `hyphenet-hostinger-production.zip` and extract its contents into `public_html/`.

### 3. Create Database & Configure Environment
1. In hPanel, go to **Databases** &rarr; **Management** and create a new MySQL database and user.
2. In `public_html/`, copy `.env.production.example` to `.env`.
3. Update `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `JWT_SECRET`, and Google Service Account credentials.

### 4. Configure Node.js Application in hPanel
1. In hPanel, go to **Core** / **Advanced** &rarr; **Node.js**.
2. Select:
   - **Node.js Version**: `18.x` or `20.x`
   - **Application Mode**: `Production`
   - **Application Root**: `public_html`
   - **Application Startup File**: `server.js`
3. Click **Install Dependencies** (`npm install`).
4. Click **Run NPM Script** and select `db:init` (or import `src/database/schema.sql` via phpMyAdmin).
5. Start or restart the Node.js application.

---

## Contact & Support

- **Corporate Office**: Hyphenet Enterprises, Devika Tower 6, Nehru Place, South Delhi, Delhi 110019, India
- **Customer Support**: `+91 9354045878`
- **Service Desk**: `support@hyphenet.net`
- **Official Website**: [https://hyphenet.net](https://hyphenet.net)
- **Legal Compliance & Grievance**: [legal@hyphenet.net](mailto:legal@hyphenet.net)
