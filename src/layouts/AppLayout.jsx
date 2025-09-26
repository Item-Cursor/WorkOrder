import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Topbar />
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}


