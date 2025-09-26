import { useState } from 'react'

function Tabs({ tabs, value, onChange }) {
  return (
    <div className="tabs">
      {tabs.map((t) => (
        <button key={t} className={`tab-btn${t === value ? ' active' : ''}`} onClick={() => onChange(t)} type="button">{t}</button>
      ))}
    </div>
  )
}

export default function SystemSetup() {
  const [tab, setTab] = useState('General Settings')

  const [appName, setAppName] = useState('Item Portal')
  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState('light')

  const [tiers, setTiers] = useState([{ id: 1, name: 'Tier 1' }])

  const [reqProperty, setReqProperty] = useState(true)
  const [reqTech, setReqTech] = useState(false)
  const [reqDue, setReqDue] = useState(true)

  return (
    <div className="wol">
      <div className="wol-header">
        <h2>System Setup</h2>
      </div>

      <Tabs tabs={["General Settings", "Approval Workflows", "Validation Rules"]} value={tab} onChange={setTab} />

      {tab === 'General Settings' && (
        <div className="card">
          <div className="form-row">
            <label>Application Name</label>
            <input className="input" value={appName} onChange={(e) => setAppName(e.target.value)} />
          </div>
          <div className="form-row">
            <label>Default Language</label>
            <select className="input" value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </div>
          <div className="form-row">
            <label>Default Theme</label>
            <select className="input" value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <button className="btn-primary" type="button">Save Changes</button>
          </div>
        </div>
      )}

      {tab === 'Approval Workflows' && (
        <div className="card">
          <div className="form-row" style={{ justifyContent: 'space-between' }}>
            <label>Approval Workflow Tiers</label>
            <button className="btn-secondary" type="button" onClick={() => setTiers((ts) => [...ts, { id: Date.now(), name: `Tier ${ts.length + 1}` }])}>Add Tier</button>
          </div>
          <div className="tiers">
            {tiers.map((t) => (
              <div key={t.id} className="tier-row">
                <input className="input" value={t.name} onChange={(e) => setTiers((ts) => ts.map((x) => x.id === t.id ? { ...x, name: e.target.value } : x))} />
                <button className="btn-secondary" type="button" onClick={() => setTiers((ts) => ts.filter((x) => x.id !== t.id))}>Remove</button>
              </div>
            ))}
          </div>
          <div>
            <button className="btn-primary" type="button">Save Changes</button>
          </div>
        </div>
      )}

      {tab === 'Validation Rules' && (
        <div className="card">
          <div className="toggle-row">
            <label>Require 'Property' Field</label>
            <input type="checkbox" checked={reqProperty} onChange={(e) => setReqProperty(e.target.checked)} />
          </div>
          <div className="toggle-row">
            <label>Require 'Technician' Field</label>
            <input type="checkbox" checked={reqTech} onChange={(e) => setReqTech(e.target.checked)} />
          </div>
          <div className="toggle-row">
            <label>Require 'Due Date' Field</label>
            <input type="checkbox" checked={reqDue} onChange={(e) => setReqDue(e.target.checked)} />
          </div>
          <div>
            <button className="btn-primary" type="button">Save Changes</button>
          </div>
        </div>
      )}
    </div>
  )
}


