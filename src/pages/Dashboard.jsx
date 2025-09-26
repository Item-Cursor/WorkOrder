import { useMemo, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

function KpiCard({ label, value }) {
  return (
    <div className="kpi-card">
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
    </div>
  )
}

const RANGE_PRESETS = ['Daily', 'WTD', 'MTD']

function CustomTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div style={{
      background: 'var(--color-panel)',
      color: 'var(--color-text)',
      border: '1px solid var(--color-border)',
      borderRadius: 8,
      padding: '6px 8px',
      lineHeight: 1.2,
      fontSize: 12,
    }}>
      {payload.map((p) => (
        <div key={p.dataKey} style={{ display: 'flex', gap: 6 }}>
          <span style={{ textTransform: 'capitalize' }}>{p.dataKey}:</span>
          <span>{p.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function Dashboard() {
  const [range, setRange] = useState('Daily')

  const data = useMemo(() => {
    if (range === 'Daily') {
      return [
        { name: '8a', completed: 3, created: 5 },
        { name: '10a', completed: 8, created: 9 },
        { name: '12p', completed: 14, created: 13 },
        { name: '2p', completed: 18, created: 16 },
        { name: '4p', completed: 22, created: 21 },
        { name: '6p', completed: 25, created: 24 },
      ]
    }
    if (range === 'WTD') {
      return [
        { name: 'Mon', completed: 20, created: 28 },
        { name: 'Tue', completed: 46, created: 51 },
        { name: 'Wed', completed: 69, created: 73 },
        { name: 'Thu', completed: 90, created: 94 },
        { name: 'Fri', completed: 115, created: 120 },
      ]
    }
    return [
      { name: 'W1', completed: 120, created: 132 },
      { name: 'W2', completed: 250, created: 268 },
      { name: 'W3', completed: 390, created: 415 },
      { name: 'W4', completed: 530, created: 560 },
    ]
  }, [range])

  return (
    <div className="dashboard">
      <div className="dashboard-controls">
        {RANGE_PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            className={`range-btn${range === p ? ' active' : ''}`}
            onClick={() => setRange(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="kpi-grid">
        <KpiCard label="Open Work Orders" value="42" />
        <KpiCard label="PM Compliance" value="96%" />
        <KpiCard label="Completed Today" value="28" />
        <KpiCard label="Overdue Tasks" value="7" />
      </div>

      <div className="dashboard-grid">
        <div className="chart-panel">
          <div className="panel-title">Work Orders</div>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-completed-fill)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--chart-completed-fill)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCreated" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-created-fill)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--chart-created-fill)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={CustomTooltip} wrapperStyle={{ outline: 'none' }} />
              <Legend />
              <Area type="monotone" dataKey="completed" stroke="var(--chart-completed)" fillOpacity={1} fill="url(#colorCompleted)" />
              <Area type="monotone" dataKey="created" stroke="var(--chart-created)" fillOpacity={1} fill="url(#colorCreated)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="chat-panel">
          <div className="panel-title">AI Insights</div>
          <div className="chat-box">
            <div className="chat-message bot">Hello! I can summarize anomalies or trends.</div>
            <div className="chat-message user">Show WTD spikes for New Work Orders.</div>
            <div className="chat-message bot">Tuesday shows a 15% spike vs Mon baseline.</div>
          </div>
          <div className="chat-input-row">
            <input className="chat-input" placeholder="Ask about your operations..." />
            <button className="chat-send" type="button">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}


