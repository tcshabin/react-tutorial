# React Docker Auth App

This is a React.js frontend application with:

* Login Page
* Registration Page
* Admin Dashboard
* Fake API Authentication
* Protected Routes
* Modular Folder Structure

The project runs completely using **Docker**.

---

## 🚀 Tech Stack

* React (Vite)
* Docker
* React Router
* Context API

---

## 📦 Prerequisites

Make sure you have installed:

* Docker
* Docker Compose

Check installation:

```
docker --version
docker compose version
```

---

## 🐳 Run Project Locally using Docker

### Step 1: Clone Repository

```
git clone https://github.com/your-username/react-docker-auth-app.git
cd react-docker-auth-app
```

---

### Step 2: Build & Run Container

```
docker compose up --build
```

---

### Step 3: Access Application

Open browser:

```
http://localhost:5173
```

---

## 🔐 Login Credentials (Fake API)

```
Email: admin@test.com
Password: 123456
```

---

## 📁 Folder Structure

```
src/
 ├── app/
 ├── modules/
 │   ├── auth/
 │   └── admin/
 ├── components/
 ├── layouts/
```

---

## 🛑 Stop Container

```
docker compose down
```

---

## 🔄 Rebuild Container (After Changes)

```
docker compose up --build
```

---

## 📌 Notes

* Fake API is used for authentication
* Replace authService with real backend API later
* Admin dashboard is under admin module

---

## 🧑‍💻 Author

Shabin T.C
