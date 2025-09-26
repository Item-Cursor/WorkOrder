# Item Work Order Portal (React + Vite)

This is a React + Vite prototype for the Item Work Order portal. It includes a collapsible sidebar, top bar with language and theme toggles, and routed pages for Dashboard, Work Orders, Service (CSR), PM, and Resources (Users, Vendors, Equipment, Properties), plus System Setup and a User Profile page.

## Run locally

1. Install Node 18+ (recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL shown (default `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/       # Sidebar, Topbar
  layouts/          # AppLayout wrapping sidebar/topbar/content
  pages/            # Routed pages: Dashboard, WorkOrders, WorkOrderList,
                    # Service/CSRDashboard, PM, Resources/*, SystemSetup, UserProfile
  styles/           # CSS tokens and global styles (light/dark theming)
  assets/logos/     # App logos (SVG/PNG)
  routes.jsx        # React Router configuration
  main.jsx          # App bootstrap
public/fonts/       # Satoshi fonts
design/brand-source # (ignored) AI/EPS/OTF source assets
```

## Key features

- Collapsible sidebar with hover flyout in collapsed mode and togglable submenus in expanded mode
- Top bar with Home, language select (EN/中文), profile menu, and light/dark theme toggle (persisted)
- Themed UI via CSS variables; brand palette defined in `src/styles/tokens.css`
- Pages:
  - Dashboard: KPI cards, Daily/WTD/MTD chart (Recharts) and AI Insights panel
  - Work Orders: list page with search/filters, actions
  - Service (CSR): requests list with search/filters
  - PM: KPIs and List/Calendar (weekly/monthly) views
  - Resources: Users, Vendors, Equipment, Properties management tables
  - System Setup: General Settings, Approval Workflows (tiers), Validation Rules
  - User Profile: editable profile form

## Theming

- Theme tokens (light/dark) in `src/styles/tokens.css`
- Semantic variables in `src/styles/globals.css` consume tokens for background, text, borders, panels, tables, badges
- Theme is switched by setting `data-theme="light|dark"` on `<html>` (handled by Topbar toggle)

## Assets

- App loads SVG/PNG logos from `src/assets/logos/*`
- Design/source files (AI/EPS/OTF) live under `design/brand-source/` and are git-ignored

## Linting

```bash
npm run lint
```

## Notes

- Environment files `.env*` are ignored by git; create `.env` if needed
- To change brand colors, edit `src/styles/tokens.css`
