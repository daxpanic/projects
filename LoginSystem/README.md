# LoginSystem — Full-Stack Authentication

A full-stack login and registration app with a React frontend and an Express backend.

## Stack
- **Frontend:** React, Material UI, axios, React Router
- **Backend:** Node.js, Express, CORS

## Structure
- `frontend/` — React app (MUI components, axios calls, routing)
- `backend/` — Express server exposing login/register endpoints, backed by a JSON store

## Run
```bash
# backend
cd backend && npm install && node server.js
# frontend (new terminal)
cd frontend && npm install && npm start
```

> Learning demo: users are stored in a local `users.json` with plaintext passwords. Production would hash passwords (e.g. bcrypt) and use a real database.
