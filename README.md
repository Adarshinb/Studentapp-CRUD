# StudentApp CRUD - MERN Stack Application

A full-stack MERN application for managing student records with complete CRUD (Create, Read, Update, Delete) operations.

Built using:

* MongoDB
* Express.js
* React.js
* Node.js

The application provides a modern UI using Material UI (MUI) and seamless frontend-backend communication using Axios.

---

# Features

* Add new students
* View all students
* Update student details
* Delete student records
* REST API integration
* MongoDB database connectivity
* Responsive Material UI design
* React Router DOM navigation
* Axios API handling
* Clean component-based architecture

---

# Tech Stack

## Frontend

* React.js
* Vite
* Material UI (MUI)
* React Router DOM
* Axios
  

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS

```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Adarshinb/Studentapp-CRUD.git
```

---

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

## Install Dependencies

```bash
npm install
```

## Start Backend

```bash
node index.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

# MongoDB Connection

Example:

```env
MONGO_URI=mongodb://127.0.0.1:27017/studentdb
```

---

# API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /             | Fetch all students |
| POST   | /add          | Add new student    |
| PUT    | /edit/:id     | Update student     |
| DELETE | /remove/:id   | Delete student     |

---

# Frontend Packages Used

## Material UI

Used for responsive UI components and styling.

```bash
npm install @mui/material @emotion/react @emotion/styled
```

## React Router DOM

Used for frontend routing.

```bash
npm install react-router-dom
```

## Axios

Used for API requests.

```bash
npm install axios
```

---

# Backend Packages Used

## Express.js

Backend framework for REST API creation.

```bash
npm install express
```

## Mongoose

MongoDB object modeling package.

```bash
npm install mongoose
```

## CORS

Used for enabling frontend-backend communication.

```bash
npm install cors
```

---

# Author

Adarshin B Suresh

MERN Stack Developer | Full Stack Trainer | MCA Graduate

---

# License

This project is open-source and available for learning purposes.
