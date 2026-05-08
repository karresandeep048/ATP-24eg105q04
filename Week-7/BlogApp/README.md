# BlogSpace — Full Stack Blog Application

## Features Added / Updated

### Authentication & Profiles
- ✅ Register with profile photo upload (Cloudinary)
- ✅ Login / Logout with JWT cookie
- ✅ Role-based routing: USER, AUTHOR, ADMIN

### User (Reader)
- ✅ Browse all active articles
- ✅ Like / Unlike articles
- ✅ Add comments on articles
- ✅ Blocked users cannot login

### Author
- ✅ Create new articles
- ✅ Edit their own articles only
- ✅ Soft-delete / restore their own articles

### Admin
- ✅ Admin login (seed admin directly in DB)
- ✅ View all users (authors + readers) with stats
- ✅ Block / Unblock users (blocked users cannot login)
- ✅ Delete users permanently
- ✅ View all articles (active + blocked)
- ✅ Block / Unblock any article
- ✅ Admin cannot comment or like articles

---

## Setup

### Backend

```bash
cd backend
npm install
```

Create `.env`:
```
DB_URL=mongodb://localhost:27017/blogspace
SECRET_KEY=your_jwt_secret_here
PORT=4000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Seed Admin User

Run this in MongoDB shell or Compass:

```js
db.users.insertOne({
  firstName: "Admin",
  lastName: "User",
  email: "admin@blogspace.com",
  password: "<bcrypt_hash_of_your_password>",
  role: "ADMIN",
  isUserActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

Use bcryptjs to generate the hash:
```js
import { hash } from 'bcryptjs';
const hashed = await hash('yourpassword', 12);
```

---

## API Endpoints

### Auth (`/auth`)
- `POST /users` — Register
- `POST /login` — Login
- `GET /logout` — Logout
- `GET /check-auth` — Verify session

### User (`/user-api`)
- `GET /articles` — Get all active articles
- `GET /articles/:id` — Get single article
- `PUT /articles` — Add comment
- `PATCH /articles/like` — Toggle like

### Author (`/author-api`)
- `GET /article` — Get author's articles
- `POST /article` — Create article
- `PUT /article` — Update own article
- `PATCH /article` — Toggle article active/inactive

### Admin (`/admin-api`)
- `GET /users` — All users
- `PATCH /user/:id/block` — Block/unblock user
- `DELETE /user/:id` — Delete user
- `GET /articles` — All articles
- `PATCH /article/:id/block` — Block/unblock article
