import { Home, Globe, User, Moon, Sun, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Topbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) setTheme(saved)
    } catch {}
  }, [])

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link to="/" className="home-link" aria-label="Home">
          <Home size={18} />
        </Link>
      </div>
      <div className="topbar-right">
        <button
          type="button"
          className="profile-btn"
          aria-label="Toggle theme"
          onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <div className="language-switch">
          <Globe size={16} />
          <select aria-label="Language" defaultValue="en">
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
        </div>
        <div className="profile-menu-wrap">
          <button type="button" className="profile-btn" aria-label="Profile" onClick={(e) => {
            e.stopPropagation()
            const menu = document.querySelector('.profile-menu')
            if (menu) {
              menu.classList.toggle('open')
            }
          }}>
            <User size={18} />
          </button>
          <div className="profile-menu" onClick={(e) => e.stopPropagation()}>
            <Link to="/profile" className="menu-item" onClick={() => document.querySelector('.profile-menu')?.classList.remove('open')}>
              <User size={14} />
              <span>View Profile</span>
            </Link>
            <button type="button" className="menu-item">
              <LogIn size={14} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}


