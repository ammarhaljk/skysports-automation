# Sky Sports Automation Testing Suite

## Overview
This project is an end-to-end automation testing suite for the Sky Sports website developed using Playwright and the Page Object Model (POM) framework. The suite covers various key functionalities such as video playback, responsive design, login, and more.

## Prerequisites
Before running the tests, ensure you have the following installed:

- **Node.js** (version 16 or later)
- **npm** or **yarn** (for managing dependencies)
- **Git** (for cloning the repository)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify Playwright installation:**
   Playwright requires browser binaries to be downloaded. You can install the necessary browsers using the following command:
   ```bash
   npx playwright install
   ```

4. **Run Playwright tests to ensure setup is correct:**
   ```bash
   npx playwright test --help
   ```

## Running the Tests

1. **Run all tests:**
   ```bash
   npx playwright test
   ```

2. **Run a specific test file:**
   ```bash
   npx playwright test <test-file-name>.spec.ts
   ```
   Example:
   ```bash
   npx playwright test video-playback.spec.ts
   ```

