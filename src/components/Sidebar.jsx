import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, ClipboardList, Wrench, CalendarCheck, BookOpen, Settings, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import itemLogoFull from '../assets/logos/horizontal/logo-fullcolor-blacktxt.svg'
import itemLogoFullWhite from '../assets/logos/horizontal/logo-white.svg'
import itemLogoMark from '../assets/logos/mark/logo-mark-fullcolor.svg'
import itemLogoMarkWhite from '../assets/logos/mark/logo-mark-white.svg'

function NavItem({ to, icon: Icon, label, collapsed }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar-item${isActive ? ' active' : ''}`
      }
    >
      <Icon size={20} />
      {!collapsed && <span>{label}</span>}
    </NavLink>
  )
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [openGroups, setOpenGroups] = useState({ work: true, service: false, resources: false })
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark'
  )

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(root.getAttribute('data-theme') === 'dark')
    })
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  const toggleGroup = (key) => {
    if (collapsed) return
    setOpenGroups((s) => ({ ...s, [key]: !s[key] }))
  }

  return (
    <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
      <div className="sidebar-header">
        <img
          src={collapsed ? (isDark ? itemLogoMarkWhite : itemLogoMark) : (isDark ? itemLogoFullWhite : itemLogoFull)}
          alt="Item"
          className="sidebar-logo"
        />
        <button
          type="button"
          className="collapse-btn"
          onClick={() => setCollapsed((v) => !v)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      <nav className="sidebar-nav">
        <NavItem to="/" icon={LayoutDashboard} label="Dashboard" collapsed={collapsed} />

        <div className={`sidebar-group${!collapsed && openGroups.work ? ' open' : ''}`}>
          <div className="sidebar-group-header">
            <NavLink to="/work-orders" className="sidebar-item sidebar-group-link">
              <ClipboardList size={20} />
              {!collapsed && <span>Work Orders</span>}
            </NavLink>
            {!collapsed && (
              <button
                type="button"
                className="submenu-toggle"
                onClick={() => toggleGroup('work')}
                aria-label="Toggle Work Orders submenu"
              >
                {openGroups.work ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            )}
          </div>
          <div className="sidebar-subnav">
            <NavLink to="/work-orders/list" className={({ isActive }) => `sidebar-subitem${isActive ? ' active' : ''}`}>
              Work Order List
            </NavLink>
          </div>
        </div>

        <div className={`sidebar-group${!collapsed && openGroups.service ? ' open' : ''}`}>
          <div className="sidebar-group-header">
            <NavLink to="/service/csr-dashboard" className="sidebar-item sidebar-group-link">
              <Wrench size={20} />
              {!collapsed && <span>Service</span>}
            </NavLink>
            {!collapsed && (
              <button
                type="button"
                className="submenu-toggle"
                onClick={() => toggleGroup('service')}
                aria-label="Toggle Service submenu"
              >
                {openGroups.service ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            )}
          </div>
          <div className="sidebar-subnav">
            <NavLink to="/service/csr-dashboard" className={({ isActive }) => `sidebar-subitem${isActive ? ' active' : ''}`}>
              CSR Dashboard
            </NavLink>
          </div>
        </div>

        <NavItem to="/pm" icon={CalendarCheck} label="PM" collapsed={collapsed} />

        <div className={`sidebar-group${!collapsed && openGroups.resources ? ' open' : ''}`}>
          <div className="sidebar-group-header">
            <NavLink to="/resources/users" className="sidebar-item sidebar-group-link">
              <BookOpen size={20} />
              {!collapsed && <span>Resources</span>}
            </NavLink>
            {!collapsed && (
              <button
                type="button"
                className="submenu-toggle"
                onClick={() => toggleGroup('resources')}
                aria-label="Toggle Resources submenu"
              >
                {openGroups.resources ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            )}
          </div>
          <div className="sidebar-subnav">
            <NavLink to="/resources/users" className={({ isActive }) => `sidebar-subitem${isActive ? ' active' : ''}`}>Users</NavLink>
            <NavLink to="/resources/vendors" className={({ isActive }) => `sidebar-subitem${isActive ? ' active' : ''}`}>Vendors</NavLink>
            <NavLink to="/resources/equipment" className={({ isActive }) => `sidebar-subitem${isActive ? ' active' : ''}`}>Equipment</NavLink>
            <NavLink to="/resources/properties" className={({ isActive }) => `sidebar-subitem${isActive ? ' active' : ''}`}>Properties</NavLink>
          </div>
        </div>
      </nav>
      <div className="sidebar-footer">
        <NavItem to="/system-setup" icon={Settings} label="System Setup" collapsed={collapsed} />
      </div>
    </aside>
  )
}


