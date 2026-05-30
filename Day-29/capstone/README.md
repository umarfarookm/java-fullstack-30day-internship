# Day 29 – Capstone: Full-Stack Task Manager

A complete full-stack Task Manager application built with **React** (frontend) and **Spring Boot** (backend).

## Architecture

```
Frontend (React + Vite)        Backend (Spring Boot)        Database (H2)
   localhost:5173        →        localhost:8080         →    In-memory DB

   React Router                  REST API (/api/*)           JPA/Hibernate
   Axios HTTP client             Controller → Service        Auto-seeded
   Tailwind CSS                  → Repository → DB           with sample data
```

## Features

- **Full CRUD** — Create, read, update, delete tasks
- **Categories** — Organize tasks with color-coded categories
- **Filtering** — Filter by status, priority, or category
- **Search** — Search tasks by title or description
- **Status flow** — Click to cycle: To Do → In Progress → Done
- **Validation** — Client + server-side validation with error messages
- **Responsive** — Mobile-friendly with Tailwind CSS
- **API docs** — Swagger UI at http://localhost:8080/swagger-ui.html

## Quick Start

### 1. Start the backend
```bash
cd backend
mvn spring-boot:run
```
Backend runs at http://localhost:8080
Swagger UI at http://localhost:8080/swagger-ui.html
H2 Console at http://localhost:8080/h2-console

### 2. Start the frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at http://localhost:5173

### 3. Open browser
Go to http://localhost:5173 — the frontend proxies API calls to the backend.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | List tasks (filter: status, priority, categoryId) |
| GET | /api/tasks/:id | Get task by ID |
| GET | /api/tasks/search?q= | Search tasks |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| PATCH | /api/tasks/:id/status | Update status only |
| DELETE | /api/tasks/:id | Delete task |
| GET | /api/categories | List categories |
| POST | /api/categories | Create category |
| DELETE | /api/categories/:id | Delete category |

## Tech Stack

- **Frontend:** React 18, Vite, React Router 6, Axios, Tailwind CSS
- **Backend:** Java 17, Spring Boot 3.2, Spring Data JPA, Bean Validation, Springdoc OpenAPI
- **Database:** H2 (in-memory, auto-seeded with sample data)
