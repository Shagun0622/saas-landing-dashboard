# SaaS Landing + Dashboard

A full-featured SaaS web application built with **React (Vite)** and **Tailwind CSS** — featuring a pixel-accurate Figma landing page, a clean auth flow, and a fully interactive dashboard with search, sorting, pagination, and theme persistence.

🔗 **Live Demo:** [saas-landing-dashboard-ruddy.vercel.app](https://saas-landing-dashboard-ruddy.vercel.app/)
&nbsp;&nbsp;|&nbsp;&nbsp;
📁 **Repo:** [github.com/Shagun0622/saas-landing-dashboard](https://github.com/Shagun0622/saas-landing-dashboard)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
  - [Landing Page](#-part-a--landing-page)
  - [Authentication](#-part-b--authentication)
  - [Dashboard](#-part-c--dashboard)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Design Decisions](#design-decisions)

---

## Overview

This project was built as a frontend shortlisting assignment. The goals were to demonstrate:

- Pixel-accurate implementation of a Figma design
- A complete, protected authentication flow
- Real interactive UI behaviors (search, sort, paginate, modal)
- Clean, reusable component architecture
- Responsive and accessible design throughout

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 (Vite) |
| Routing | React Router v6 |
| Styling | Tailwind CSS |
| Language | JavaScript (ES6+) |
| Data | JSONPlaceholder REST API |
| Deployment | Vercel |

---

## Features

### 🎨 Part A — Landing Page

A pixel-close implementation of the provided Figma design.

- Accurate typography, spacing, and color
- Button hover and focus states
- Fully responsive with no horizontal overflow
- Clean, semantic section structure

---

### 🔐 Part B — Authentication

A minimal but complete auth flow with route protection.

- Login page with form validation
- Token stored in `localStorage`
- `ProtectedRoute` wrapper prevents unauthenticated access
- Logout clears token and redirects
- Auth state persists across page refreshes

**Demo credentials:**

```
Email:    user@example.com
Password: password
```

> ⚠️ This is a frontend-only mock — no real backend is involved.

---

### 📊 Part C — Dashboard

#### Summary Page

- Total users count card
- Derived metrics (e.g. unique company count)
- Loading skeletons and error states handled gracefully

#### Users Page

Data sourced from [`jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users).

| Feature | Details |
|---|---|
| View | Table + card layouts |
| Search | Filter by name or email (real-time) |
| Sort | Alphabetical A–Z / Z–A |
| Pagination | Client-side, configurable page size |
| Detail | Click any user to open a modal |
| States | Loading, error, and empty handled |

#### Settings Page

- Editable profile form UI
- Light / Dark theme toggle
- Theme preference persisted in `localStorage`

---

## Screenshots

### Landing Page
![Landing Page](./screenshots/saas-landing-dashboard-ruddy.vercel.app_.png)

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
git clone https://github.com/Shagun0622/saas-landing-dashboard.git
cd saas-landing-dashboard
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Folder Structure

```
src/
├── assets/          # Static images and icons
├── components/
│   ├── ui/          # Reusable primitives (Button, Input, Card, Modal)
│   └── layout/      # Layout shells and ProtectedRoute wrapper
├── pages/
│   ├── Landing/     # Landing page sections
│   ├── Login/       # Auth page
│   └── dashboard/   # Dashboard, Users, Settings
├── hooks/           # Custom React hooks
├── utils/           # Helpers and constants
└── main.jsx         # Entry point
```

---

## Design Decisions

**Client-side auth mock** — Since this is a frontend assignment, auth is simulated with localStorage token storage rather than a real backend. In production, this would be replaced with JWT/session-based auth against a real API.

**JSONPlaceholder** — Used for realistic user data without needing a custom backend. All filtering, sorting, and pagination happen client-side.

**Tailwind CSS** — Chosen for rapid, consistent styling without fighting specificity. Combined with a component-based architecture to keep styles co-located and maintainable.

**Theme persistence** — Dark mode preference is saved to localStorage so the user's choice survives page refreshes without a flash of incorrect theme.

---

## License

MIT © [Shagun0622](https://github.com/Shagun0622)
