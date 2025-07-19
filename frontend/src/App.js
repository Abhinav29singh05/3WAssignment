import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import UserManagement from './components/UserManagement.jsx';
import Leaderboard from './components/Leaderboard.jsx';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch users/leaderboard from backend
  const fetchUsers = async (showLoading = true) => {
    if (showLoading) setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/leaderboard`);
      setUsers(res.data);
    } catch (err) {
      setUsers([]);
    }
    if (showLoading) setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSelectUser = (e) => setSelectedUser(e.target.value);

  const handleAddUser = async () => {
    if (newUser.trim()) {
      await axios.post(`${API_URL}/users`, { name: newUser.trim() });
      setNewUser('');
      fetchUsers(true);
    }
  };

  const handleClaimPoints = async () => {
    if (!selectedUser) return;
    await axios.post(`${API_URL}/claim`, { userId: selectedUser });
    fetchUsers(); // fetch latest data, no optimistic update
  };

  const handleDeleteUser = async (userId) => {
    await axios.delete(`${API_URL}/users/${userId}`);
    if (selectedUser === userId) setSelectedUser('');
    fetchUsers(true);
  };

  // Sort users by points descending for leaderboard
  const sortedUsers = [...users].sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-8 px-2">
      <Header />
      <div className="w-full max-w-md flex flex-col gap-8 mt-8">
        <UserManagement
          users={users}
          selectedUser={selectedUser}
          onSelectUser={handleSelectUser}
          newUser={newUser}
          setNewUser={setNewUser}
          onAddUser={handleAddUser}
          onClaimPoints={handleClaimPoints}
          loading={loading}
          userIdField="_id"
        />
        <Leaderboard users={sortedUsers} loading={loading} onDeleteUser={handleDeleteUser} userIdField="_id" />
      </div>
    </div>
  );
}

export default App;
