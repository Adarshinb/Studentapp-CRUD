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
* Emotion Styling

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS

---

# Frontend Dependencies

```json
{
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "@mui/material": "^9.0.0",
  "axios": "^1.15.0",
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-router-dom": "^7.14.1"
}
```

---

# Backend Dependencies

```json
{
  "cors": "^2.8.6",
  "express": "^5.2.1",
  "mongoose": "^9.4.1"
}
```

---

# Project Structure

```bash
Studentapp-CRUD/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controller/
│   ├── server.js
│   └── db.js
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Adarshinb/Studentapp-CRUD.git
```

---

# Frontend Setup

## Navigate to Frontend

```bash
cd frontend
```

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

## Navigate to Backend

```bash
cd backend
```

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

Create a `.env` file inside backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Example:

```env
MONGO_URI=mongodb://127.0.0.1:27017/studentdb
```

---

# API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /students     | Fetch all students |
| POST   | /students     | Add new student    |
| PUT    | /students/:id | Update student     |
| DELETE | /students/:id | Delete student     |

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

# Future Improvements

* Authentication & Authorization
* JWT Login System
* Search & Filter
* Pagination
* Dashboard Analytics
* Student Profile Image Upload
* Role-based Access

---

# Author

Adarshin B Suresh

MERN Stack Developer | Full Stack Trainer | MCA Graduate

---

# License

This project is open-source and available for learning purposes.
