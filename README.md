# Library Management System

A full-stack library management system built with React, Express, and MongoDB.

## Features

- Add, search, update, and delete books
- Add, search, update, and delete library members
- Issue books to members with due dates
- Return issued books and restore available copies
- Dashboard stats for books, members, and active issues

## Setup

1. Install dependencies:

```bash
npm install
npm install --prefix client
```

2. Create `.env` in the project root:

```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/library_management
CLIENT_ORIGIN=http://localhost:5173
```

3. Start MongoDB locally, then run:

```bash
npm run dev
```

The React app runs at `http://localhost:5173` and the API runs at `http://localhost:5000`.
