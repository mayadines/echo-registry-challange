# Registry UI Challenge

A Docker Hub browser built with React, TypeScript, and Vite. Search repositories, view tags, sizes, and copy pull commands — all in one place.

## Prerequisites

- Node.js 18+
- npm

## Getting Started

```bash
cd registry-challange
npm install
npm run dev
```

The app runs at **http://localhost:3000**.

> The Vite dev server proxies all `/api` and `/v2` requests to `https://hub.docker.com`, bypassing browser CORS restrictions. No backend or API key is required.

## Features

- **Explore page** — browse 10 popular repositories on load; search by keyword
- **Repository details** — title, description, owner, last updated
- **Tags panel** — tag name, last updated, compressed size, and a one-click "Copy Command" button (`docker pull <repo>:<tag>`)
