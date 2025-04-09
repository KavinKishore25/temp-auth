
# 🔐 Fullstack Auth App (React + Node + JWT)

A simple fullstack authentication app using **React (Vite)** for frontend and **Node.js (Express)** for backend with **JWT**-based login and protected route handling.

---

## 📁 Project Structure

```
auth-fullstack/
├── auth-backend/       # Express backend (Node + JWT)
│   ├── index.js
│   └── ...
├── auth-frontend/      # React frontend (Vite)
│   ├── src/
│   └── ...
└── README.md
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed
- A terminal & a browser

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/auth-fullstack.git
cd auth-fullstack
```

### 2. Set up Backend

```bash
cd auth-backend
npm install
node index.js
```

Backend runs at: `http://localhost:5000`

### 3. Set up Frontend

Open a new terminal:

```bash
cd auth-frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## ✨ Features

- User Signup and Login
- Token-based Authentication (JWT)
- Protected `/profile` route
- Frontend form handling using React
- Simple Axios-based HTTP requests

---

## 🧪 How to Use

### Signup
1. Go to `http://localhost:5173`
2. Fill out the **Signup** form
3. A new user will be registered

### Login
1. Use the login form with the same credentials
2. On success, you'll receive a **JWT token**
3. The **Profile** section will display a welcome message

---

## 🛠 Built With

- **Frontend**: React (Vite), Axios, Hooks
- **Backend**: Node.js, Express, JWT
- **Data**: In-memory (no DB used for simplicity)

---

## 📬 Contact

Made with ❤️ by [Kavin](https://github.com/KavinKishore25)
