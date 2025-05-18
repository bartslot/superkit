# ⚡uperKit

A fully configured Next.js starter kit featuring:

- **Next.js 15+** with App Router (TypeScript-ready)
- **Tailwind CSS** for utility-first styling
- **Supabase** integration for authentication & database
- **Paddle** checkout for seamless paid subscriptions
- **Complete auth flows**, environment setup, and deployment patterns

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
- **TypeScript** configuration out of the box
- **TailwindCSS** with dark mode support
- **Supabase Integration**
  - Email/password sign-up & sign-in
  - Session persistence
  - Example CRUD operations with Supabase client
- **Paddle Payments**
  - Hosted checkout integration
  - Webhook handling for subscription management
- **Responsive** design with mobile-friendly components
- **Developer Tools**: ESLint, Prettier, and Husky pre-commit hooks

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) (or npm/yarn)
- A [Supabase](https://app.supabase.com/) project
- A [Paddle](https://vendors.paddle.com/) vendor account

---

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/superkit.git
   cd superkit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local` and fill in your keys (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

Your application should now be running at [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Create a `.env.local` file at the project root:

```bash
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Paddle
NEXT_PUBLIC_PADDLE_ENV=sandbox # or 'production'
PADDLE_API_KEY=your-paddle-api-key
PADDLE_NOTIFICATION_WEBHOOK_SECRET=your-webhook-secret
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=your-client-token
```


## Authentication Flow

SuperKit implements a secure authentication flow using Supabase Auth:

1. **Sign Up**: Users create an account with email/password
2. **Email Verification**: Optional verification via Supabase
3. **Sign In**: Email/password authentication
4. **Session Management**: Automatic session persistence
5. **Protected Routes**: Middleware-based route protection

## Paddle Integration

SuperKit includes a complete Paddle checkout integration:

1. **Checkout Flow**: Initiate purchases with the Paddle overlay
2. **Webhook Handling**: Process subscription events
3. **License Management**: Create and verify user subscriptions

## Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Linting & Formatting
pnpm lint         # Run ESLint
pnpm format       # Run Prettier

# Database
pnpm db:generate  # Generate Supabase types
```

## Deployment

SuperKit works seamlessly with Vercel:

1. **Connect your repository** to Vercel
2. **Set environment variables** in the Vercel dashboard
3. **Deploy** and enjoy automatic preview deployments for PRs

For other platforms, build with `pnpm build` and start with `pnpm start`.

## Contributing

We ❤️ contributions! Whether it's reporting bugs, suggesting features, improving documentation, or submitting code.

### How to Contribute

1. **Fork the repository**
   
   Click the "Fork" button at the top-right of the SuperKit repo page.

2. **Clone your fork locally**
   ```bash
   git clone https://github.com/yourusername/superkit.git
   cd superkit
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```
   Use descriptive branch names like `fix/navbar-scroll` or `feat/paddle-webhook`.

4. **Make your changes**
   - Follow the existing code style
   - Add or update code as needed
   - Update documentation when applicable

5. **Commit your work**
   ```bash
   git add .
   git commit -m "feat: describe your feature or fix"
   ```

6. **Push your branch to GitHub**
   ```bash
   git push origin feat/your-feature-name
   ```

7. **Open a Pull Request**
   - Navigate to your fork on GitHub
   - Click "Compare & pull request"
   - Fill out the PR template with details about your changes

### Reporting Issues

- Search existing issues before opening a new one
- Use clear, descriptive titles
- Include steps to reproduce bugs or screenshots if applicable

### Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/) to ensure a welcoming community for all contributors.

---

## License

SuperKit is released under the MIT License. See the LICENSE file for details.

---

Made with ❤️ & vibe by **Zeeshan**