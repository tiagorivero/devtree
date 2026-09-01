# DevTree

A Linktree clone: each user gets a public profile (`/your-handle`) with their links, reorderable via drag & drop.

Link: https://tiagorivero-devtree.netlify.app/

## Stack

**Backend:** Node · Express · TypeScript · MongoDB (Mongoose) · JWT · express-validator · Cloudinary

**Frontend:** React · Vite · TypeScript · Tailwind · React Router · React Query · React Hook Form · Axios · dnd-kit

## Setup

```bash
# backend
cd backend && npm i && npm run dev

# frontend
cd frontend && npm i && npm run dev
```

## Environment variables

```bash
# backend/.env
MONGO_URI=
JWT_SECRET=
FRONTEND_URL=http://localhost:5173
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# frontend/.env.local
VITE_API_URL=http://localhost:4000
```

## Features

- Sign up and log in with JWT
- Unique handle and public profile
- Create, edit and reorder links
- Profile image upload to Cloudinary

## Deployment

Backend on Render · Frontend on Netlify
