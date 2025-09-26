import { useMemo, useState } from 'react'

const MOCK_ROWS = [
  { id: 'WO-1001', property: 'HQ', status: 'Open', priority: 'High', assignedTo: 'Alice', created: '2025-09-26' },
  { id: 'WO-1002', property: 'Plant 2', status: 'In Progress', priority: 'Medium', assignedTo: 'Bob', created: '2025-09-25' },
  { id: 'WO-1003', property: 'Warehouse', status: 'Open', priority: 'Low', assignedTo: 'Cara', created: '2025-09-24' },
]

export default function WorkOrderList() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [priority, setPriority] = useState('')

  const rows = useMemo(() => {
    return MOCK_ROWS.filter((r) =>
      (query ? (r.id + r.property + r.assignedTo).toLowerCase().includes(query.toLowerCase()) : true)
      && (status ? r.status === status : true)
      && (priority ? r.priority === priority : true)
    )
  }, [query, status, priority])

  return (
    <div className="wol">
      <div className="wol-header">
        <h2>Work Order List</h2>
        <button type="button" className="btn-primary">New Work Order</button>
      </div>

      <div className="wol-filters">
        <input
          className="input"
          placeholder="Search work orders..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="input" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>
        <select className="input" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>WO#</th>
              <th>Property</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assigned to</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.property}</td>
                <td>{r.status}</td>
                <td>{r.priority}</td>
                <td>{r.assignedTo}</td>
                <td>{r.created}</td>
                <td>
                  <button type="button" className="btn-secondary">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
