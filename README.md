# GlobalStoxfx Loan Application System

This is a simple full-stack loan application system using Node.js + Express and SQLite.

## Quick start

1. Copy files to a directory
2. `cp .env.example .env` and edit `.env`
3. `npm install`
4. `npm run dev` (requires nodemon) or `npm start`
5. Open `http://localhost:3000/loan.html`

## Endpoints

- POST /api/apply        -> submit application
- GET  /api/status/:id   -> get application status
- GET  /api/admin/list   -> list applications (requires x-admin-key header)
- POST /api/admin/decision -> approve/reject (requires x-admin-key)

See server.js for more details.
