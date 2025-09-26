import { useMemo, useState } from 'react'

const MOCK_USERS = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', properties: 'HQ, Plant 2' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Technician', properties: 'Warehouse' },
  { id: 3, name: 'Cara Lee', email: 'cara@example.com', role: 'CSR', properties: 'HQ' },
]

export default function Users() {
  const [query, setQuery] = useState('')
  const [role, setRole] = useState('')
  const [property, setProperty] = useState('')

  const rows = useMemo(() => {
    return MOCK_USERS.filter((u) =>
      (query ? (u.name + u.email).toLowerCase().includes(query.toLowerCase()) : true)
      && (role ? u.role === role : true)
      && (property ? u.properties.includes(property) : true)
    )
  }, [query, role, property])

  return (
    <div className="wol">
      <div className="wol-header">
        <h2>User Management</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn-secondary" type="button">Bulk Import</button>
          <button className="btn-primary" type="button">Add User</button>
        </div>
      </div>

      <div className="wol-filters">
        <input className="input" placeholder="Search users..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="input" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Roles</option>
          <option>Admin</option>
          <option>CSR</option>
          <option>Technician</option>
        </select>
        <select className="input" value={property} onChange={(e) => setProperty(e.target.value)}>
          <option value="">Properties</option>
          <option>HQ</option>
          <option>Plant 2</option>
          <option>Warehouse</option>
        </select>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Property Access</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.properties}</td>
                <td style={{ display: 'flex', gap: 6 }}>
                  <button className="btn-secondary" type="button">Edit</button>
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


