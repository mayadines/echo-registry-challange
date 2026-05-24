# Summary

## APIs Used and How I Discovered Them

I started by watching network traffic in browser DevTools and searching for official Docker Hub API documentation — neither gave me the specific endpoints I needed. I then consulted Claude, which suggested candidate routes. Some of those initial routes didn't return all the data I needed, so I went back and forth with Claude in a conversation until we landed on the right endpoints.

Four endpoints power the app, all proxied through Vite to `hub.docker.com` to bypass CORS:

| Endpoint | Purpose |
|---|---|
| `GET /api/search/v3/catalog/search?query=&sort=pull_count&order=desc&from=0&size=10` | Fetch popular repositories for the home page showcase |
| `GET /api/search/v3/catalog/search?query=<term>&from=<offset>&size=<n>` | Keyword search with pagination |
| `GET /v2/repositories/{namespace}/{name}/` | Repository details (description, owner, last updated, pull count) |
| `GET /v2/repositories/{namespace}/{name}/tags/?page=<n>&page_size=<n>` | Paginated tag list with name, last updated, and compressed size |

## Frontend URL Routes

The app is a single-page application using `history.pushState` for navigation — no router library. All state lives in URL query parameters:

| URL | View |
|---|---|
| `/` (no params) | Home page with popular repositories |
| `?q=<query>` | Search results (page 0) |
| `?q=<query>&page=<n>` | Search results at page `n` |
| `?repo=<namespace>/<name>` | Repository details view |
| `?repo=<namespace>/<name>&q=<query>&page=<n>` | Repository details with preserved search context (enables back navigation) |

## Key Design Decisions

**Vite dev proxy for CORS.** DockerHub's APIs block direct browser requests. The Vite dev server proxy (configured in `vite.config.ts`) rewrites `/api` → `hub.docker.com/api` and `/v2` → `hub.docker.com/v2`, so there's no need for a backend server or CORS workaround in production.

**React Query for data fetching.** All API calls go through `useQuery`, which provides automatic caching, deduplication, and loading/error states. Popular repositories are cached with a 5-minute `staleTime` since they don't change fast; search results invalidate per query + page key.

**URL-preserved navigation.** Clicking a repository card stores the current search query and page in the `?repo=` URL so the back button restores the exact search context.

## Challenges and Lessons Learned

**CORS.** DockerHub's APIs don't include CORS headers, so every fetch fails in a browser without a proxy. Setting up the Vite proxy early saved a lot of friction.

## What I'd Improve with More Time

- **Infinite scroll** instead of pagination for tags, since tag lists can be very long.
- **Error retry UI** — React Query retries automatically in the background, but surfacing a manual "Retry" button on error states would improve perceived reliability.
- **Production proxy** — the Vite proxy only works in dev. A thin edge proxy (Cloudflare Worker, Vercel rewrite, or nginx) would be needed to ship this publicly.
