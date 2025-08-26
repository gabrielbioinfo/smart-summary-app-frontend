# Project Context: Smart Summary App (Frontend)

## Project Overview

The **Smart Summary App** is a frontend web application designed to summarize text using an API powered by **OpenAI**. It is part of an AI Engineer challenge and is built with modern TypeScript, React, and Next.js tools and frameworks. The app interacts with the backend via HTTP and supports real-time updates for summary results.

---

## Project Rules and Guidelines

### General Rules

1. **Language**: All code, comments, and documentation must be written in **English**.
2. **Code Quality**: Follow TypeScript and React best practices, including linting and formatting standards (e.g., ESLint, Prettier).
3. **Async first**: Use async/await for API calls and side effects.
4. **Component-based**: Use reusable and composable React components.
5. **Early returns**: Prefer early returns in functions to avoid deep nesting.
6. **Testing**: Ensure all components and logic are unit/integration tested. Coverage should be measured using **Jest** and **React Testing Library**.
7. **Version Control**: Commit changes with clear and descriptive messages.
8. **Dependencies**: Use **npm** or **pnpm** for dependency management.

### Development Guidelines

1. **Frameworks**:
   - Use **React** and **Next.js** for building the frontend.
   - Use **TypeScript** for type safety.
2. **Linting and Formatting**:
   - Use **ESLint** and **Prettier** for linting and formatting.
   - Ensure all code passes lint checks before committing.
3. **Environment**:
   - API keys and secrets must be stored in environment variables and never exposed in the frontend codebase.
4. **Container**:
   - The application can be containerized and run using Docker for deployment.

### API Integration

1. **Endpoints**:
   - Summarization: `POST /v1/summarize` (calls backend API)
2. **Response Standards**:
   - Use JSON for all responses.
   - Support streaming updates if provided by backend.
3. **Error Handling**:
   - Display meaningful error messages to users.

### Security

1. **Authentication**:
   - Support JWT-based authentication for API requests if required.
2. **CORS**:
   - Ensure only allowed origins (frontend) can access the backend API.
3. **Secrets Management**:
   - Use environment variables for sensitive data; never commit secrets to the repository.
4. **Data Privacy**:
   - Ensure no sensitive data is exposed or logged in the frontend.

### Scalability

1. **Containerization**:
   - Use Docker for consistent deployments.
2. **Performance**:
   - Optimize frontend for fast load times and responsiveness.
3. **Monitoring**:
   - Integrate monitoring tools (e.g., Vercel Analytics, Sentry) for frontend observability.

---
