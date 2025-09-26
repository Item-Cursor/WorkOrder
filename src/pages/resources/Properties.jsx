import { useMemo, useState } from 'react'

const MOCK_PROPS = [
  { id: 1, name: 'HQ', company: 'Item Inc.', address: '123 Main St', city: 'San Jose', state: 'CA', status: 'Active' },
  { id: 2, name: 'Plant 2', company: 'Item Inc.', address: '456 Industrial Rd', city: 'Fremont', state: 'CA', status: 'Inactive' },
]

export default function Properties() {
  const [query, setQuery] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState('')

  const rows = useMemo(() => {
    return MOCK_PROPS.filter((p) =>
      (query ? (p.name + p.address + p.city + p.state).toLowerCase().includes(query.toLowerCase()) : true)
      && (company ? p.company === company : true)
      && (status ? p.status === status : true)
    )
  }, [query, company, status])

  return (
    <div className="wol">
      <div className="wol-header">
        <h2>Property Management</h2>
        <button className="btn-primary" type="button">Add Property</button>
      </div>

      <div className="wol-filters">
        <input className="input" placeholder="Search properties..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="input" value={company} onChange={(e) => setCompany(e.target.value)}>
          <option value="">Companies</option>
          <option>Item Inc.</option>
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
              <th>Property Name</th>
              <th>Company</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.company}</td>
                <td>{p.address}</td>
                <td>{p.city}</td>
                <td>{p.state}</td>
                <td>{p.status}</td>
                <td style={{ display: 'flex', gap: 6 }}>
                  <button className="btn-secondary" type="button">Edit</button>
                  <button className="btn-secondary" type="button">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


