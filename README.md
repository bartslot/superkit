## SuperKit

A fully configured Next.js starter kit featuring:

- **Next.js 14** with App Router (TypeScript-ready)  
- **Tailwind CSS** for utility-first styling  
- **Supabase** integration for authentication & database  
- **Paddle** checkout for seamless paid subscriptions  
- Example auth flows, environment setup, and deployment scripts  

Get up and running in minutes—no boilerplate headaches.

---

## Table of Contents

1. [Features](#features)  
2. [Prerequisites](#prerequisites)  
3. [Getting Started](#getting-started)  
4. [Environment Variables](#environment-variables)  
5. [Project Structure](#project-structure)  
6. [Authentication Flow](#authentication-flow)  
7. [Paddle Integration](#paddle-integration)  
8. [Scripts](#scripts)  
9. [Deployment](#deployment)  
10. [Contributing](#contributing)  
11. [License](#license)  

---

## Features

- **Next.js App Router** with file-based routing and layouts  
- **TypeScript** config out of the box  
- **TailwindCSS** with dark mode support  
- **Supabase**  
  - Email/password sign-up & sign-in  
  - Session persistence  
  - Example CRUD with Supabase client  
- **Paddle Payments**  
  - Hosted checkout integration  
  - Webhook handling for license management  
- **Responsive** design and mobile-friendly components  
- **ESLint**, **Prettier**, and **Husky** pre-commit checks  

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18+  
- [pnpm](https://pnpm.io/) (or npm/yarn)  
- A [Supabase](https://app.supabase.com/) project  
- A [Paddle](https://vendors.paddle.com/) vendor account  

---

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/superkit.git
   cd superkit

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install

3. **Set up environment**
   - Copy .env.example to .env.local and fill in your keys (see Environment Variables).

4. **Run in development**
   ```bash
   npm run dev
   # or
   pnpm dev

---

## Environment Variables
   - Create a .env.local file at the project root:
   ```bash
   # Next.js
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=https://xyz.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   
   # Paddle
   NEXT_PUBLIC_PADDLE_ENV=sandbox # or `production`
   PADDLE_API_KEY=
   PADDLE_NOTIFICATION_WEBHOOK_SECRET=
   NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=

---

## Contributing

We ❤️ contributions! Whether it’s reporting bugs, suggesting new features, improving documentation, or submitting code, your input is welcome.

### How to Contribute

1. **Fork the repository**  
   Click the “Fork” button at the top-right of the SuperKit repo page to create your own copy.

2. **Clone your fork locally**  
   ```bash
   git clone https://github.com/zeeshana07x/superkit.git
   cd superkit

3. **Create a new branch**  
   ```bash
   git checkout -b feat/your-feature-name
 - Use a descriptive branch name, e.g. fix/navbar-scroll or feat/paddle-webhook. 

4. **Make your changes**  

 - Follow the existing code style.
 - Add or update code as needed.
 - Update documentation in README.md.

5. **Commit your work**  
   ```bash
   git add .
   git commit -m "feat: describe your feature or fix"

6. **Push your branch to GitHub**
   ```bash
   git push origin feat/your-feature-name

7. **Open a Pull Request**

 - Navigate to your fork on GitHub.
 - Click “Compare & pull request."
 - Fill out the PR template, explaining what you changed and why.

### Reporting Issues
 - Please search existing issues before opening a new one.
 - Use a clear, descriptive title and include steps to reproduce bugs or screenshots if applicable. 

### Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor‑covenant.org/) to ensure a welcoming and respectful community for all contributors. Please read the full text of the code on the Contributor Covenant website before participating.

---

---
Made with ❤️ & vibe by **Zeeshan**
