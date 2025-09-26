import { useState } from 'react'

export default function UserProfile() {
  const [firstName, setFirstName] = useState('Chris')
  const [lastName, setLastName] = useState('N')
  const [email, setEmail] = useState('chris@example.com')
  const [phone, setPhone] = useState('555-123-4567')

  const onSave = () => {
    // placeholder: persist to API/localStorage later
    console.log('Saved', { firstName, lastName, email, phone })
    alert('Profile saved')
  }

  return (
    <div className="wol">
      <div className="wol-header">
        <h2>User Profile</h2>
        <button className="btn-primary" type="button" onClick={onSave}>Save Changes</button>
      </div>

      <div className="card">
        <div className="form-row">
          <label>First Name</label>
          <input className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Last Name</label>
          <input className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Phone</label>
          <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
    </div>
  )
}
