# 🚀 Vanguard Management System

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Vanguard** is an enterprise-grade task management solution designed to demonstrate advanced React patterns, including hybrid rendering (SSR), performance optimization, and atomic component architecture.

[🔗 Live Demo] | [📂 Technical Documentation](./ARCHITECTURE.md)

---

## 📖 Table of Contents
- [🛠️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [✨ Key Features](#-key-features)
- [📂 Project Structure](#-project-structure)
- [🏗️ Technical Challenges & Solutions](#️-technical-challenges--solutions)
- [🚀 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)

---

## 🛠️ Tech Stack & Architecture

This project focuses on scalability and **Clean Code** principles, ensuring high performance and strict type safety.

- **Framework:** [Next.js 15](https://nextjs.org/) (Pages Router) for optimized SEO and hybrid rendering.
- **Language:** [TypeScript](https://www.typescriptlang.org/) for robust development and developer ergonomics.
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) for predictable global state and complex data flows.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) using a mobile-first, utility-first approach.
- **Data Fetching:** Hybrid strategy: **SSR** for initial load and **Custom Hooks** for client-side interactions.

---

## ✨ Key Features

### 1. Enterprise-Grade Hybrid Rendering
Vanguard utilizes `getServerSideProps` to ensure critical business data is SEO-ready from the first millisecond, followed by client-side hydration for a seamless SPA experience.

### 2. Custom Infinite Scroll Architecture
I developed a native `useInfiniteScroll` hook utilizing the **Intersection Observer API**. This approach reduces external dependencies, improves bundle size, and optimizes memory consumption.

### 3. Dynamic Theming Engine
A reactive styling engine that adapts CSS properties (text decoration, visual weight, and colors) in real-time based on the application's complex state logic.

---

## 📂 Project Structure

```text
src/
├── api/            # Data fetching logic (Axios/Fetch config)
├── components/     # Atomic UI components (Button, Card, etc.)
├── hooks/          # Custom React hooks (useTasks, useInfiniteScroll)
├── layouts/        # Page wrappers and structural templates
├── store/          # Global state management (Redux Toolkit slices)
├── types/          # TypeScript interfaces and definitions
└── utils/          # Helper functions and data formatting
```
---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---
