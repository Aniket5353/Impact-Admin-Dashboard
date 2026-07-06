import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import Topbar from './components/layout/Topbar'
import Overview from './pages/Overview'
import Candidates from './pages/Candidates'
import Jobs from './pages/Jobs'
import Applications from './pages/Applications'
import Sponsors from './pages/Sponsors'
import Immigration from './pages/Immigration'
import Advisors from './pages/Advisors'
import Analytics from './pages/Analytics'
import Notifications from './pages/Notifications'

const PAGES = {
  overview:      Overview,
  candidates:    Candidates,
  jobs:          Jobs,
  applications:  Applications,
  sponsors:      Sponsors,
  immigration:   Immigration,
  advisors:      Advisors,
  analytics:     Analytics,
  notifications: Notifications,
}

export default function App() {
  const [page, setPage] = useState('overview')
  const PageComponent = PAGES[page] ?? Overview

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Sidebar active={page} onNavigate={setPage} />
      <div className="pl-64 flex flex-col min-h-screen">
        <Topbar />
        <main className="flex-1 p-6 md:p-8">
          <PageComponent />
        </main>
      </div>
    </div>
  )
}
