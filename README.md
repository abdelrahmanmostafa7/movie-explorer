# 🎬 Movie Explorer App

Explore trending, top-rated, and popular movies with detailed info, trailers, cast, reviews, and more. Built with modern full-stack tools and production-ready practices.

---

## 📖 Overview

Movie Explorer is a full-stack movie browser app built with **Next.js 15** and powered by the **TMDb API**. It offers secure authentication, personalized favorites, optimized performance (SSG/SSR), and a modern responsive UI/UX using Tailwind CSS.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture Decisions](#architecture-decisions)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Authentication](#authentication)
- [State Management](#state-management)
- [Data Fetching](#data-fetching)
- [Security](#security)
- [Deployment & Scalability](#deployment--scalability)
- [SEO & Lighthouse Optimization](#seo--lighthouse-optimization)
- [Future Improvements](#future-improvements)

---

## ✨ Features

- 🎥 Discover trending and popular movies
- 🔍 Search with real-time suggestions (autocomplete)
- ❤️ Add/remove movies to your encrypted favorites
- 🔐 Auth via Clerk with JWT + refresh tokens
- 🎞️ Movie Details: trailer, cast, reviews, similar titles
- 🔒 Secure encrypted local storage (IndexedDB)
- 🚀 SEO optimized & Lighthouse score >90
- 🐳 Docker-ready for deployment

---

## 🧱 Tech Stack

| Category         | Technology                | Why?                                                                                  |
|------------------|--------------------------|---------------------------------------------------------------------------------------|
| 🔧 Framework     | Next.js 15 + TypeScript  | Modern App Router, SSR/SSG, optimal performance, and SEO                              |
| 🎨 Styling       | Tailwind CSS             | Utility-first, fast, responsive, maintainable                                         |
| 🧠 State Mgmt    | Zustand                  | Minimal, zero boilerplate, perfect for local state                                    |
| 🔐 Auth          | Clerk                    | Secure JWT auth, refresh tokens, route protection, prebuilt UI                        |
| 🌐 HTTP Client   | Axios                    | Direct API control, simple, aligns with tutorial                                      |
| 🎬 API           | TMDb API                 | Movie data: trending, popular, cast, reviews, trailers                                |
| 🔒 Storage       | idb-keyval + crypto-js   | Encrypted IndexedDB/localStorage for secure client-side storage                       |
| 🚢 Deployment    | Docker + Vercel/VPS      | Containerized deployment, auto-scaling, CDN, SSR caching                              |

---

## 🧠 Architecture Decisions

### ✅ State Management: Zustand vs Redux Toolkit

- Zustand is minimal, zero boilerplate, and integrates smoothly with Next.js App Router.
- Ideal for small-to-mid complexity apps and local state like favorites.
- Redux is powerful but overkill for this project’s needs.

### ✅ Data Fetching: Axios vs React Query

- Axios gives full control over requests and is easier to debug.
- React Query is better for complex data needs, but not necessary here.
- Axios aligns with the tutorial and is fine for this app where caching & auto-refetching aren’t critical.

### ✅ Authentication: Clerk vs Custom JWT Auth

- Clerk provides production-ready JWT auth (access + refresh tokens), HttpOnly cookies, session security, and refresh token rotation.
- Route protection via middleware and prebuilt UI components.
- Faster & more secure than building custom auth logic.

### ✅ Rendering Strategy

- **Home Page:** SSG → Better performance + SEO.
- **Movie Detail Page:** SSR → Always fresh content (trailers, reviews).

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
npm install
npm run dev
```

---

## 📁 Folder Structure

```
src
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── favorites/
│   ├── about/
│   └── movie/[id]/
├── components/
│   ├── Navbar.tsx
│   ├── MovieCard.tsx
│   └── SearchBar.tsx
├── lib/
│   ├── apiClient.ts
│   ├── fetchMovies.ts
├── store/
│   └── favoriteStore.ts
├── utils/
│   ├── secureStorage.ts
│   └── secureIndexedDB.ts
middleware
```

---

## 🔐 Authentication (Clerk)

- 🔑 **Signup/Login** via Clerk prebuilt components.
- 🔒 **Stateless JWT Auth** with access & refresh tokens.
- 🧁 **Secure Cookies** (HttpOnly) for authentication sessions.
- 🛡️ **Route Protection** using Clerk middleware on private routes (`/favorites`).

---

## 🧠 State Management (Zustand + Secure Storage)

- 💾 Favorites state stored using **Zustand** for simplicity and global access.
- 🔐 Synced with **Encrypted localStorage & IndexedDB** via `idb-keyval` and `crypto-js`.
- 🔧 Custom utilities to **encrypt/decrypt movie data** and ensure secure offline support.

---

## 🔄 Data Fetching (Axios + TMDb)

- 🔧 Centralized `apiClient.ts` setup for **Axios** instance with TMDb API key.
- 📡 Fetches:
    - 📺 Trending & Popular Movies (Home)
    - 🔍 Search with autocomplete & pagination
    - 🎬 Movie Details (cast, trailers, reviews, similar titles)
- 📑 Pagination supported using TMDb’s `page` query param.

---

## 🔒 Security

- 🧩 Authentication and session management handled by **Clerk** securely.
- 🔐 Favorites stored with **AES-like encrypted local storage** (CryptoJS + idb-keyval).
- 🛡️ Route-level protection via **Clerk middleware**.
- 📦 Security headers via `next.config.js` and **Helmet** for CSP, HSTS, etc.

---

## 🚀 Deployment & Scalability

- 🐳 **Dockerfile + Docker Compose** for containerized deployment.
- ☁️ **Vercel** for hosting:
    - ⚡ CDN via Cloudflare for static assets
    - ♻️ Auto-scaling infrastructure
    - 💾 Built-in SSR caching
- 🔐 Stateless JWT authentication enables **horizontal scaling**.

---

## 📈 SEO & Lighthouse Optimization

- 🖼️ Optimized images using Next.js `<Image />` component.
- 📄 Dynamic SEO tags & Open Graph metadata for social sharing.
- 💤 **Lazy loading** for secondary content (trailers, cast, reviews).
- 🚦 Achieved **Lighthouse Score > 90** for performance & accessibility.

---

## 🚧 Future Improvements

- 🔎 Integrate **Fuse.js** for enhanced client-side fuzzy search.
- 🔐 Enable **Social Auth** (Google, GitHub) using Clerk.
- 💾 Add **Offline support** by caching API data with service workers.
- 🌙 Add **Dark/Light Theme Toggle** for UI customization.
- 🔁 Sync favorites with a backend DB for **cross-device access**.

