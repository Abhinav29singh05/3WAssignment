import React, { useState } from 'react';
import { FaUser, FaPlus } from 'react-icons/fa';

const UserList = ({ users, selectedUser, onSelect, onAddUser }) => {
  const [newUser, setNewUser] = useState('');

  const handleAdd = () => {
    if (newUser.trim()) {
      onAddUser(newUser.trim());
      setNewUser('');
    }
  };

  return (
    <div className="userlist-card">
      <h2><FaUser style={{ marginRight: 8 }} />User List</h2>
      <div className="userlist-divider" />
      <select value={selectedUser || ''} onChange={e => onSelect(e.target.value)}>
        <option value='' disabled>Select a user</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      <div className="userlist-actions">
        <input
          type='text'
          placeholder='Add new user'
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
        />
        <button onClick={handleAdd}><FaPlus style={{ marginRight: 4 }} />Add</button>
      </div>
    </div>
  );
};

export default UserList; 