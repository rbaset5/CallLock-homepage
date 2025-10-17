---
description: Core project guidelines for Next.js web app with auth and AI features
globs: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"]  # Auto-attach to TypeScript/JS files
alwaysApply: true  # Always include in relevant prompts
---

# Project Overview
- This is a Next.js web app for user authentication and AI-generated content.
- Tech stack: Next.js (framework), Tailwind CSS (styling), Supabase (database), Clerk (auth), Stripe (payments), OpenAI/Claude API (AI features).
- Always use TypeScript for type safety.
- Deploy to Vercel; use GitHub for version control.

# Code Style Rules
- Follow ESLint and Prettier configs in the repo.
- Components: Use functional components with hooks; keep them under 200 lines.
- Naming: CamelCase for components, kebab-case for CSS classes.
- Error Handling: Wrap API calls in try-catch; log errors to console.
- Security: Store API keys in .env.local; never commit them.

# Workflow Instructions
- Break tasks into small features (e.g., "Add login page" before "Integrate dashboard").
- Always run tests after changes: npm test.
- For UI: Make responsive with Tailwind; test on mobile preview.
- Debugging: If errors occur, analyze stack trace and suggest fixes step-by-step.
- IMPORTANT: Optimize for performance—lazy load images, use memoization for expensive components.

# Bash Commands
- npm run dev: Start local server.
- npm run build: Build for production.
- git commit -m "feat: [description]": Commit changes.

# Testing Guidelines
- Use Jest for unit tests; aim for 80% coverage.
- Write tests before code for new features.

# References (Optional: Include other files for extra context)
@eslint-config.js  # Pulls in your ESLint config as context
@package.json       # Includes dependencies