Cypress Demo — UI Automation Project
This repository contains a clean Cypress automation framework demonstrating UI and API testing fundamentals, project structure, and Jenkins CI/CD integration.

🚀 Features
Cypress 13+

UI + API tests

JUnit XML reporting

Screenshot + video capture

Jenkins pipeline automation

npm‑based project setup

📁 Project Structure
Code
cypress-demo/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── screenshots/
│   └── results/
│
├── cypress.config.js
├── package.json
└── Jenkinsfile
🧪 Running Tests Locally
Install dependencies:

Code
npm ci
Run Cypress headless:

Code
npx cypress run
Run Cypress UI:

Code
npx cypress open
🔧 Jenkins Pipeline
The Jenkinsfile performs:

SCM checkout

Install Node.js (Node20 tool)

Install dependencies (npm ci)

Run Cypress tests with JUnit reporter

Archive:

cypress/screenshots/**

cypress/results/*.xml