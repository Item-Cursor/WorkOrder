import { useMemo, useState } from 'react'

const MOCK_EQUIP = [
  { id: 1, name: 'Air Handler AHU-1', type: 'HVAC', location: 'HQ - B1 - 2F', serial: 'AHU12345', status: 'Active' },
  { id: 2, name: 'Boiler B-2', type: 'Boiler', location: 'Plant 2 - A - 1F', serial: 'BLR54321', status: 'Inactive' },
]

export default function Equipment() {
  const [query, setQuery] = useState('')
  const [property, setProperty] = useState('')
  const [building, setBuilding] = useState('')
  const [floor, setFloor] = useState('')

  const rows = useMemo(() => {
    return MOCK_EQUIP.filter((e) =>
      (query ? (e.name + e.type + e.serial).toLowerCase().includes(query.toLowerCase()) : true)
      && (property ? e.location.toLowerCase().includes(property.toLowerCase()) : true)
      && (building ? e.location.toLowerCase().includes(building.toLowerCase()) : true)
      && (floor ? e.location.toLowerCase().includes(floor.toLowerCase()) : true)
    )
  }, [query, property, building, floor])

  return (
    <div className="wol">
      <div className="wol-header">
        <h2>Equipment Management</h2>
        <button className="btn-primary" type="button">Add Equipment</button>
      </div>

      <div className="wol-filters">
        <input className="input" placeholder="Search equipment..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <input className="input" placeholder="Property" value={property} onChange={(e) => setProperty(e.target.value)} />
        <input className="input" placeholder="Building" value={building} onChange={(e) => setBuilding(e.target.value)} />
        <input className="input" placeholder="Floor" value={floor} onChange={(e) => setFloor(e.target.value)} />
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Equipment Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Serial Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.type}</td>
                <td>{e.location}</td>
                <td>{e.serial}</td>
                <td>{e.status}</td>
                <td style={{ display: 'flex', gap: 6 }}>
                  <button className="btn-secondary" type="button">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


