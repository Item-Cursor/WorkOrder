import { useState } from 'react'

function Kpi({ label, value, danger }) {
  return (
    <div className="kpi-card">
      <div className="kpi-label">{label}</div>
      <div className="kpi-value" style={danger ? { color: '#dc2626' } : undefined}>{value}</div>
    </div>
  )
}

const MOCK_LIST = [
  { id: 'PM-001', equipment: 'Air Handler AHU-1', due: '2025-09-27', status: 'Scheduled' },
  { id: 'PM-002', equipment: 'Boiler B-2', due: '2025-09-28', status: 'Overdue' },
  { id: 'PM-003', equipment: 'Chiller C-1', due: '2025-10-02', status: 'Scheduled' },
]

export default function PM() {
  const [view, setView] = useState('list')
  const [calendarRange, setCalendarRange] = useState('weekly')

  return (
    <div className="pm">
      <div className="wol-header">
        <h2>Preventative Maintenance</h2>
        <button type="button" className="btn-primary">New PM</button>
      </div>

      <div className="kpi-grid" style={{ marginTop: 8 }}>
        <Kpi label="Overdue PMs" value="5" danger />
        <Kpi label="Due this Week" value="18" />
        <Kpi label="Compliance" value="93%" />
        <Kpi label="Equipment Requiring Attention" value="4" />
      </div>

      <div className="pm-switch">
        <button type="button" className={`tab-btn${view === 'list' ? ' active' : ''}`} onClick={() => setView('list')}>List</button>
        <button type="button" className={`tab-btn${view === 'calendar' ? ' active' : ''}`} onClick={() => setView('calendar')}>Calendar</button>
      </div>

      {view === 'list' ? (
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>PM#</th>
                <th>Equipment</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LIST.map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.equipment}</td>
                  <td>{r.due}</td>
                  <td>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div className="pm-switch" style={{ marginTop: 12 }}>
            <button type="button" className={`tab-btn${calendarRange === 'weekly' ? ' active' : ''}`} onClick={() => setCalendarRange('weekly')}>Weekly</button>
            <button type="button" className={`tab-btn${calendarRange === 'monthly' ? ' active' : ''}`} onClick={() => setCalendarRange('monthly')}>Monthly</button>
          </div>
          {calendarRange === 'weekly' ? (
            <div className="calendar">
              <div className="calendar-row">
                <div className="calendar-cell"><div className="cal-date">Mon</div></div>
                <div className="calendar-cell"><div className="cal-date">Tue</div><div className="cal-badge">PM-001</div></div>
                <div className="calendar-cell"><div className="cal-date">Wed</div></div>
                <div className="calendar-cell"><div className="cal-date">Thu</div><div className="cal-badge danger">PM-002</div></div>
                <div className="calendar-cell"><div className="cal-date">Fri</div><div className="cal-badge">PM-003</div></div>
                <div className="calendar-cell"><div className="cal-date">Sat</div></div>
                <div className="calendar-cell"><div className="cal-date">Sun</div></div>
              </div>
            </div>
          ) : (
            <div className="calendar">
              <div className="calendar-month">
                {Array.from({ length: 5 }).map((_, row) => (
                  <div className="calendar-row" key={row}>
                    {Array.from({ length: 7 }).map((_, col) => (
                      <div className="calendar-cell" key={col}>
                        <div className="cal-date">&nbsp;</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}


