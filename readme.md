# GitHub Favorites Explorer 🚀

A simple **MERN stack project** that lets users **search GitHub repositories** and **save their favorite repositories** for quick access later.

## ✨ Features

* 🔍 Search GitHub repositories using the GitHub API
* ⭐ Save repositories to favorites
* 📂 View saved favorite repositories
* 🗑️ Remove repositories from favorites

## 🛠️ Tech Stack

* **Frontend:** React, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **API:** GitHub REST API

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

---

## ▶️ Run Backend

```bash
cd Backend
npm i
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

## ▶️ Run Frontend

```bash
cd frontend
npm i
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint                  | Description                  |
| ------ | ------------------------- | ---------------------------- |
| GET    | `/api/search?query=react` | Search GitHub repositories   |
| POST   | `/api/favorites`          | Save repository to favorites |
| GET    | `/api/favorites`          | Get all saved favorites      |
| DELETE | `/api/favorites/:id`      | Delete a favorite repository |

---

## 📌 Example Use Case

1. Search for repositories (e.g., **react**, **node**).
2. Click **Save** to add a repository to favorites.
3. View and manage saved repositories in the **Favorites** section.

---

## 👨‍💻 Author

**Deepak Vishwakarma**

Built for learning **MERN stack and API integration**.
