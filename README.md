<div align="center">

# TASKFLOW - Task Management System REST API

[English](#english) | [Türkçe](#türkçe)

</div>

---

<a name="english"></a>
## English

### Project Overview
**TaskFlow** is a modular RESTful API built with Node.js and Express.js for tracking software development tasks, project workflows, and team assignments. It provides a clean, layered architecture featuring custom middleware logging and complete in-memory CRUD operations.

### Key Features
- **RESTful Architecture:** Built following strict HTTP conventions and semantic status codes (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`).
- **Complete CRUD Operations:** Create, Read (all and single by ID), Update (partial updates), and Delete tasks.
- **Custom Logging Middleware:** Intercepts every incoming request to log timestamp (ISO format), HTTP method, and original URL.
- **Defensive Error Handling:** Validates required fields in request bodies and handles non-existent resource IDs gracefully.
- **Modular Structure:** Distinct separation of concerns across controllers, routes, and middlewares.

### Tech Stack
- **Runtime Environment:** Node.js
- **Web Framework:** Express.js
- **API Testing:** Postman
- **Development Tool:** Nodemon

### Project Structure
```text
taskflow-backend/
├── screenshots/
│   ├── 01-get-all-tasks.png
│   ├── 02-get-task-by-id.png
│   ├── 03-create-task.png
│   ├── 04-update-task.png
│   ├── 05-delete-task.png
│   ├── 06-verify-delete.png
│   └── 07-error-404.png
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   ├── middlewares/
│   │   └── logger.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md