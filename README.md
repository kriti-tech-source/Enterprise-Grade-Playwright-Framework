
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
flowchart TD
    A[Push / Pull Request to main] --> B[GitHub Actions Workflow Triggered]
    B --> C[Checkout Repository]
    C --> D[Setup Node.js Environment]
    D --> E[Install Dependencies (npm ci)]
    E --> F[Install Playwright Browsers]
    F --> G[Run Playwright Tests]
    G --> H[Upload Playwright Test Report Artifact]

