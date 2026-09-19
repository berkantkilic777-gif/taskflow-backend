<div align="center">

# TASKFLOW - Task Management System REST API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)

<br/>

**[English](#english) | [Türkçe](#turkish)**

</div>

---

<h2 id="english">English</h2>

### Project Overview
**TaskFlow** is a modular RESTful API built with Node.js and Express.js for managing team workflows, development tasks, and assignments. It features an in-memory data store, clean separation of concerns across layers, custom logging middleware, and comprehensive CRUD endpoints.

### Key Features
- **RESTful Architecture:** Follows semantic HTTP status codes (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`).
- **Full CRUD Support:** Complete task lifecycle management (Create, Read All, Read by ID, Partial Update, and Delete).
- **Custom Logging Middleware:** Logs every incoming request's timestamp (ISO format), HTTP method, and route URL to the console.
- **Data Validation & Error Handling:** Validates payload parameters and handles missing resource exceptions cleanly.
- **Modular Directory Structure:** Isolated layers for controllers, routes, and middlewares.

### Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **API Client:** Postman
- **Dev Utility:** Nodemon

### Project Architecture
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