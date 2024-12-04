# Full-Stack Application: Overview of Software Development Process

This project demonstrates the development of a full-stack application using **React**, **Node.js**, **Express**, **SQLite3**, **Docker**, **GitHub Actions**, and deployment to **Render**. It provides an end-to-end understanding of the software development lifecycle (SDLC), including planning, development, testing, deployment, and maintenance.

- [Full-Stack Application: Overview of Software Development Process](#full-stack-application-overview-of-software-development-process)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Running the App](#running-the-app)
    - [Run Locally](#run-locally)
  - [Docker Setup](#docker-setup)
  - [CI/CD with GitHub Actions](#cicd-with-github-actions)
  - [Deployment](#deployment)
  - [Manual API Testing with `test.http`](#manual-api-testing-with-testhttp)
    - [How to Use](#how-to-use)
    - [Location](#location)
    - [Note](#note)
  - [Project Structure in General](#project-structure-in-general)
  - [Contributing](#contributing)

---

## Features

- **Frontend (React):** A responsive, dynamic UI for users to interact with the app.
- **Backend (Node.js + Express):** Handles API requests and business logic.
- **Database (SQLite3):** Persistent data storage with a lightweight relational database.
- **Docker:** Containerization for consistent development, testing, and deployment environments.
- **GitHub Actions:** Automates testing, building, and deployment workflows.
- **Deployment:** Hosted on Render for public access.

---

## Technologies Used

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express
- **Database:** SQLite3
- **DevOps:** Docker, GitHub Actions
- **Deployment:** Render

---

## Getting Started

### Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- A Render account (for deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fullstack-app.git
   cd fullstack-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the App

### Run Locally

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

3. Access the app at `http://localhost:3000`.

---

## Docker Setup

1. Build the Docker image:

   ```bash
   docker build -t fullstack-app .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 -d fullstack-app
   ```

---

## CI/CD with GitHub Actions

This project uses **GitHub Actions** to automate testing, building, and deployment.

- Workflows are defined in `.github/workflows/`.
- Every push to `main` triggers:
  - **Linting and Testing:** Ensures code quality.
  - **Build and Deployment:** Automatically deploys to Render.

---

## Deployment

The app is deployed to **Render** for public access.

1. Link your GitHub repository to Render.
2. Configure build commands:
   - **Backend:** `npm install && npm start`
   - **Frontend:** `npm install && npm run build`

---

## Manual API Testing with `test.http`

A `test.http` file is available for manual testing of the API using the REST Client extension in Visual Studio Code.

### How to Use

1. Install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension in VS Code.
2. Open the `manual-tests/test.http` file.
3. Click the "Send Request" button next to each HTTP request to test the API.

### Location

The `test.http` file is located in the `manual-tests/` directory.

### Note

This file is for manual testing only and is not part of the automated test suite.

---

## Project Structure in General

```plaintext
fullstack-app/
├── backend/            # Backend code (Node.js + Express)
│   ├── app.js          # Main server file
├── frontend/           # Frontend code (React)
│   ├── src/            # React components and assets
│   └── public/         # Static files
├── .github/            # GitHub Actions workflows
├── Dockerfile          # Docker configuration
├── README.md           # Project documentation
└── package.json        # Project metadata
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes and push to your fork:
   ```bash
   git push origin feature-name
   ```
4. Submit a pull request.

---

Happy Coding! 🚀

Regards, Jussi
