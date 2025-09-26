import { useMemo, useState } from 'react'

const MOCK_VENDORS = [
  { id: 1, name: 'HVAC Pros', service: 'HVAC', contact: 'Jane', phone: '555-111-2222', email: 'jane@hvacpros.com', status: 'Active' },
  { id: 2, name: 'CleanIt', service: 'Janitorial', contact: 'Rick', phone: '555-333-4444', email: 'rick@cleanit.com', status: 'Inactive' },
]

export default function Vendors() {
  const [query, setQuery] = useState('')
  const [service, setService] = useState('')
  const [status, setStatus] = useState('')

  const rows = useMemo(() => {
    return MOCK_VENDORS.filter((v) =>
      (query ? (v.name + v.contact + v.email).toLowerCase().includes(query.toLowerCase()) : true)
      && (service ? v.service === service : true)
      && (status ? v.status === status : true)
    )
  }, [query, service, status])

  return (
    <div className="wol">
      <div className="wol-header">
        <h2>Vendor Management</h2>
        <button className="btn-primary" type="button">Add Vendor</button>
      </div>

      <div className="wol-filters">
        <input className="input" placeholder="Search vendors..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="input" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Services</option>
          <option>HVAC</option>
          <option>Janitorial</option>
          <option>Electrical</option>
        </select>
        <select className="input" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Service Type</th>
              <th>Contact</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((v) => (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.service}</td>
                <td>{v.contact}</td>
                <td>{v.phone}</td>
                <td>{v.email}</td>
                <td>{v.status}</td>
                <td style={{ display: 'flex', gap: 6 }}>
                  <button className="btn-secondary" type="button">Edit</button>
                  <button className="btn-secondary" type="button">View</button>
                  <button className="btn-secondary" type="button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


