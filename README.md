
# Enterprise Playwright Framework

## Tech Stack
- Playwright
- TypeScript
- CI/CD (GitHub Actions)
- Docker
- API + UI Testing

## Features
- Page Object Model
- Environment-based config
- Parallel execution
- HTML Reporting
- Dockerized test execution
- CI pipeline integration

## Run Tests

npx playwright test

## Run with Docker

docker build -t playwright-framework .
docker run playwright-framework

## Test Report Screenshot
<img width="1091" height="497" alt="image" src="https://github.com/user-attachments/assets/b2e614a5-606c-4d7a-8253-087364f5bbc6" />


# Enterprise Playwright Framework

![Playwright CI](https://github.com/kriti-tech-source/Enterprise-Grade-Playwright-Framework/actions/workflows/playwright.yaml/badge.svg)

This repository contains an **enterprise-grade Playwright framework** with CI integration for automated testing of UI and API projects.

---

## CI Workflow Overview

The Playwright CI workflow automatically runs on every **push** or **pull request** to `main`.  
Here’s a visual overview of the CI pipeline:

```mermaid
graph TD
    A[Start] --> B["Install Dependencies (npm ci)"]
    B --> C[Run Linting]
    C --> D[Run Unit Tests]
    D --> E{Tests Pass?}
    E -- Yes --> F[Build Application]
    E -- No --> G[Fix Errors]
    G --> B
    F --> H[Deploy to Production]

