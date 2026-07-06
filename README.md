# IMMPACT Dashboard

Immigration & Sponsored Worker Job Portal — React JSX + Tailwind CSS dashboard.

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Stack

- **React 18** — UI framework
- **Vite** — build tool & dev server
- **Tailwind CSS 3** — styling
- **lucide-react** — icons
- **recharts** — charts (Analytics page)

## Project Structure

```
src/
├── App.jsx                        # Root with page router (useState)
├── main.jsx                       # ReactDOM entry point
├── index.css                      # Tailwind directives
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx            # Fixed left nav
│   │   └── Topbar.jsx             # Sticky top bar
│   └── ui/
│       ├── Avatar.jsx
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Input.jsx
│       ├── Progress.jsx
│       ├── StarRating.jsx
│       └── StatusBadge.jsx
├── lib/
│   └── mockData.js                # All mock data in one place
└── pages/
    ├── Overview.jsx               # KPI cards + pipeline funnel
    ├── Candidates.jsx             # Searchable candidate table
    ├── Jobs.jsx                   # Sponsored job listings
    ├── Applications.jsx           # Kanban pipeline board
    ├── Sponsors.jsx               # Sponsor directory table
    ├── Immigration.jsx            # Routes + eligibility calculator
    ├── Advisors.jsx               # Advisor marketplace grid
    ├── Analytics.jsx              # Recharts graphs
    └── Notifications.jsx          # Notification feed
```

## Pages

| Route        | Description                                      |
|-------------|--------------------------------------------------|
| Overview     | 8 KPI stat cards, pipeline funnel, system health |
| Candidates   | Searchable table with profile scores & statuses  |
| Jobs         | Sponsored job listings filterable by keyword     |
| Applications | Kanban board across 6 pipeline stages            |
| Sponsors     | Licensed employer directory with verification    |
| Immigration  | Country routes + live eligibility calculator     |
| Advisors     | Advisor cards with booking & availability        |
| Analytics    | Line, area, bar, donut charts via Recharts       |
| Notifications| Colour-coded alert feed                          |

## Customisation

- **Mock data** → edit `src/lib/mockData.js`
- **Colours** → edit Tailwind classes; primary colour is `blue-600`
- **Add a page** → create `src/pages/MyPage.jsx`, import in `App.jsx`, add to `PAGES` map and `NAV_ITEMS` in `Sidebar.jsx`
# Impact-Admin-Dashboard
