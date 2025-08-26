# Smart Summary App (Frontend)

## Overview

Smart Summary App is a frontend web application that summarizes text using an API powered by OpenAI. Built with TypeScript, React, and Next.js, it supports real-time streaming of summary results and is designed for the AI Engineer challenge.

## Getting Started

### Local development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Docker (production build)

1. **Build the Docker image:**
   ```bash
   docker build -t smart-summary-frontend .
   ```
2. **Run the container:**
   ```bash
   docker run -p 3000:3000 smart-summary-frontend
   ```
3. **Access the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

- All code, comments, and documentation must be in **English**.
- Follow TypeScript and React best practices (linting, formatting, ESLint, Prettier).
- Use async/await for API calls and side effects.
- Build with reusable, composable React components.
- Prefer early returns in functions to avoid deep nesting.
- Ensure all components and logic are unit/integration tested (Jest, React Testing Library).
- Commit changes with clear and descriptive messages.
- Use **npm** or **pnpm** for dependency management.

## API Integration

- Summarization endpoint: `POST /v1/summarize` (calls backend API)
- The backend URL configuration is in `src/config.ts`.
- Uses JSON for all responses and supports streaming updates.
- Displays meaningful error messages to users.

## Security

- Supports JWT-based authentication for API requests if required.
- CORS: Only allowed origins (frontend) can access the backend API.
- Secrets: Use environment variables for sensitive data; never commit secrets to the repository.
- Data privacy: No sensitive data exposed or logged in the frontend.

## Scalability & Performance

- Containerized with Docker for consistent deployments.
- Optimized for fast load times and responsiveness.
- Monitoring tools (e.g., Vercel Analytics, Sentry) can be integrated for frontend observability.

---

For more details, see [`copilot-context.md`](./copilot-context.md).
