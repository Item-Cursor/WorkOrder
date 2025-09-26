import { useMemo, useState } from 'react'

const MOCK_CASES = [
  { id: 'RMA-2001', customer: 'Acme Corp', property: 'HQ', status: 'Open', priority: 'High', created: '2025-09-25' },
  { id: 'RMA-2002', customer: 'Globex', property: 'Plant 2', status: 'In Progress', priority: 'Medium', created: '2025-09-24' },
  { id: 'RMA-2003', customer: 'Umbrella', property: 'Warehouse', status: 'Open', priority: 'Low', created: '2025-09-23' },
]

export default function CSRDashboard() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [priority, setPriority] = useState('')
  const [property, setProperty] = useState('')

  const rows = useMemo(() => {
    return MOCK_CASES.filter((r) =>
      (query ? (r.id + r.customer + r.property).toLowerCase().includes(query.toLowerCase()) : true)
      && (status ? r.status === status : true)
      && (priority ? r.priority === priority : true)
      && (property ? r.property === property : true)
    )
  }, [query, status, priority, property])

  return (
    <div className="wol">
      <div className="wol-header">
        <h2>Customer Service Requests</h2>
        <button type="button" className="btn-primary">New Service Request</button>
      </div>

      <div className="wol-filters">
        <input
          className="input"
          placeholder="Search requests..."
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
        <select className="input" value={property} onChange={(e) => setProperty(e.target.value)}>
          <option value="">Property</option>
          <option>HQ</option>
          <option>Plant 2</option>
          <option>Warehouse</option>
        </select>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>RMA/Case No.</th>
              <th>Customer Name</th>
              <th>Property</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Date created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.customer}</td>
                <td>{r.property}</td>
                <td>{r.status}</td>
                <td>{r.priority}</td>
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


