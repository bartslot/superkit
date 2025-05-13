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
