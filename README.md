# ✈️ Aviasales Tickets

![Aviasales UI](public/images/Logo.png)

Elegant flight search crafted with **React 19**, **Redux Toolkit**, and **TailwindCSS**. The project focuses on high-throughput data handling, responsive UX, and a feature-oriented architecture that keeps business logic scalable and discoverable.

---

## 🚀 Live Demo & Repository

- Production: https://aviasales-task-six.vercel.app/  
- Source: https://github.com/dnKihot/aviasales-task

---

## 🌟 Highlights

- ⚡️ Streams ~10 000 tickets from the Aviasales API with graceful retry logic for 500 responses  
- 🧭 Filters by exact stop count and sorts by price, duration, or optimal balance in real time  
- 🧱 Feature-oriented architecture: each domain (tickets, filters, sort) exposes a clean public API of selectors, hooks, and utilities  
- 🪄 Incremental rendering — the list is interactive before the entire dataset arrives, with skeleton loaders signalling progress  
- 🔐 Production-safe keys, zero console noise, and linting enforced via ESLint + Prettier  
- 🎨 Tailwind-driven UI mirroring the Aviasales experience while remaining fully responsive

---

## 🏗️ Architectural Notes

The codebase embraces a **feature-oriented** layout inspired by Domain-Driven Design. Business modules (tickets, filters, sort) co-locate Redux slices, selectors, hooks, and utilities. Presentation components stay pure, consuming only the exposed public APIs. This separation delivers:

- Predictable scaling — adding new ticket capabilities never leaks into unrelated modules  
- Fast onboarding — directories map directly to product language, not framework primitives  
- Safe reuse — feature boundaries make it trivial to lift modules into other products

```text
src/
├── api/                 # Aviasales HTTP clients
├── components/          # Pure UI blocks
├── features/
│   ├── filters/         # Selectors & helpers for stop filters
│   ├── sort/            # Sorting state selectors
│   └── tickets/         # Data hooks, selectors, formatting, filtering
├── store/               # Redux Toolkit store & slices
├── constants/           # Filter/sort descriptors
└── utils/               # Shared helpers
```

---

## 🛠️ Tech Stack

- React 19 • React Redux • Redux Toolkit  
- Vite 7 • TailwindCSS 3  
- ESLint • Prettier • PropTypes  
- Deployed on Vercel

---

## ▶️ Getting Started

```bash
yarn
yarn dev
```

---

## 📋 Available Scripts

- `yarn dev` – start the Vite dev server  
- `yarn build` – produce a production bundle  
- `yarn preview` – preview the built bundle locally  
- `yarn lint` – run ESLint with project rules

---

## ✅ Feature Checklist

- [x] Full dataset ingestion with resilient batching and stable list keys  
- [x] Stop-count filters, multi-mode sorting, empty-state messaging  
- [x] Progressive loaders indicating initial and incremental fetches  
- [x] Clean lint output, silent browser console  
- [x] Ready-to-ship deployment on Vercel

