Before I start Create or implement any line of code should plan and thinking about how to do this so let's create a plan for this and what is tec I will choose and why to make it clearly and easy to do it

## Installation
- Setup Next.js (App Router) with TypeScript
- Install Tailwind CSS
- Initialize Git repo
- Setup environment variables
- Install Axios, Zustand, Clerk, TMDb API, etc.

## UI Implementation

**Home Page**
*Navbar* it will show in all pages so we will put it in layout
  - Logo (link to home)
  - Nav Items → Home / Favorites / About
  - Sign In / Sign Up button (Clerk)

*SearchBar* (with autocomplete)
*TrendBar*   Top Rated or Pupilar  movie 

*MovieCard Component*
  - Poster
  - Title
  - Rating
  - Add/Remove Favorite button
  - Link to Movie Detail Page

**Movie Detail Page**
- Embedded Trailer (YouTube)
- Cast List (actors, roles)
- Reviews Section
- Similar Movies Section

**Favorites Page**
- Show user’s favorite movie cards
- Requires user to be authenticated
- Favorite button should be active (different color or icon)
- Protect the route using middleware / Clerk

## Search & Filter
- Search with TMDb API
- Fuzzy Search using Fuse.js
- Autocomplete suggestions
- Filter by genre, rating, etc.

## Authentication (Clerk)
- Sign in / Sign up / Sign out
- Sync Clerk user with MongoDB
- Secure access to user-specific data

## State Management (Zustand)
- Store favorites in Zustand
- Sync Zustand state with localStorage/IndexedDB (encrypted)

## Data Fetching (Axios)
- Get Trending Movies (Home Page)
- Get Movie Details (by ID)
- Search Movies
- Get Similar Movies, Cast, Reviews

## Security
- Use HTTPS headers in `next.config.js`
- Encrypt favorites data in browser (Base64/custom logic)
- Use Clerk JWT (stateless auth)
- Helmet or custom headers for security

## Deployment & Scalability
- Dockerfile + Docker Compose
- Use Vercel or VPS with CDN (Cloudflare)
- Explain scalability strategy in README

## SEO & Performance
- Use `<Image />` for optimization
- Metadata: title, description, OG tags
- Lazy load trailers and secondary content
- Lighthouse score > 90

**Weather API** (Optional – if time allows)

## README Checklist
- Project Description
- Features
- Tech Stack
- How to Run Locally
- Docker Instructions
- Security Considerations
- SEO, Performance
- Live Demo + Screenshots


## Why These Tools Were Chosen

**Zustand (State Management)**
- I chose Zustand instead of Redux Toolkit because:
  - It's lightweight and has no boilerplate.
  - Easier to integrate with Next.js, especially App Router.
  - Ideal for simple state management like auth or favorites.
  - Redux Toolkit is better for complex, enterprise-level apps.


**Axios (Data Fetching)**
- I chose Axios instead of React Query because:
  - It's simple and gives full control over HTTP requests.
  - The video tutorial is based on Axios, so it aligns with the implementation.
  - React Query is great for caching and advanced scenarios, but not needed here.


**Fuse.js (Search & Filtering)**
- I used Fuse.js instead of server-side filtering because:
  - It allows fuzzy client-side search without creating a custom backend.
  - Fast and easy to implement in the search bar.
  - The movie dataset is relatively small, so client-side filtering is enough.
  - Server-side filtering makes more sense for massive datasets.


**Static Generation (SSG) for Home Page**
- I chose SSG instead of SSR for the homepage because:
  - The trending/popular movie data doesn't change frequently.
  - SSG ensures faster performance and better SEO.
  - No authentication needed for this page, so static rendering fits best.


**Clerk (Authentication)**
- I used Clerk instead of building JWT manually because:
  - Clerk provides a secure and production-ready auth system.
  - It supports Social Logins, Refresh Tokens, and easy integration with MongoDB.
  - Much faster to set up than writing a custom auth system.
  - Ideal for mid-size projects like this one.

---

**Zustand + Encrypted Storage**
- I used Zustand with encrypted localStorage (or IndexedDB) to store favorites because:
  - It's a quick, offline-friendly solution.
  - Works well for storing non-sensitive preferences.
  - Encryption (e.g., with Base64 or CryptoJS) adds an extra security layer.
  - No need for a remote DB unless you want cross-device sync.

