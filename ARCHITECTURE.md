# 🏗️ Technical Architecture - Vanguard Management System

This document outlines the architectural decisions, data flow, and design patterns implemented in the Vanguard Management System.

## 1. High-Level Overview

Vanguard is built as a **Hybrid Web Application**. It leverages the power of Next.js to combine the SEO benefits of static/server-side content with the rich interactivity of a modern React application.

## 2. Data Flow & Rendering Strategy

We use a **Layered Data Fetching** approach to optimize the Critical Rendering Path:

1.  **Server-Side Phase (SSR):** Using `getServerSideProps`, the application fetches core business data before the page reaches the browser. This ensures:
    * Immediate content visibility for users.
    * Full indexability for Search Engine crawlers.
2.  **Hydration Phase:** React takes over the static HTML. We utilize a **Custom Hydration Wrapper** to sync the server data with our **Redux Toolkit** store, preventing state mismatches.
3.  **Client-Side Phase:** Subsequent data updates and pagination (Infinite Scroll) are handled via client-side logic using custom hooks and the Intersection Observer API.

## 3. State Management Architecture

We implemented **Redux Toolkit (RTK)** following the "Ducks" pattern for a centralized source of truth:

* **Slices:** State is divided into logical slices (e.g., `taskSlice`, `uiSlice`).
* **Predictability:** Every state change is handled via strictly typed actions and reducers, making the application easy to debug and test.
* **Persistence:** A middleware layer ensures that critical user preferences are persisted across sessions.

## 4. Component Design Pattern: Atomic Design

The UI is organized using a simplified **Atomic Design** methodology to ensure reusability and maintainability:

* **Atoms:** Smallest units (Buttons, Inputs, Badges). Pure components with no business logic.
* **Molecules:** Groups of atoms working together (Search Bar, Task Card).
* **Organisms:** Complex UI sections (Task List, Sidebar).
* **Templates/Layouts:** Page-level structures that define where organisms are placed.

## 5. Performance Optimizations

* **Custom Infinite Scroll:** Instead of heavy libraries, we use a custom `useInfiniteScroll` hook with `IntersectionObserver`. This reduces the JavaScript execution overhead.
* **Dynamic Styling Logic:** We avoid unnecessary re-renders by calculating visual states (decorations, weights) through memoized selectors in Redux.
* **Tree Shaking:** Optimized imports to ensure the final bundle only contains the code being used.

## 6. Development Workflow

To maintain high code quality, we follow a strict **GitFlow** model:
* **Branching:** `main` (Production), `develop` (Integration), and `feat/*` (Features).
* **Quality Gates:** Branch protection rules require at least one Pull Request and conversation resolution before merging into protected branches.

---
*This architecture is designed to be scalable, allowing for the easy addition of Unit Testing (Jest) and Real-time backends (Supabase/Firebase) in future iterations.*