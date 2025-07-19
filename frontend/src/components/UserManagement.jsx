import React from 'react';

export default function UserManagement({ users, selectedUser, onSelectUser, newUser, setNewUser, onAddUser, onClaimPoints, loading }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-gray-100">
      <h2 className="text-lg font-bold mb-2 text-gray-800 flex items-center gap-2">User Management</h2>
      <label className="block mb-2 text-sm font-medium text-gray-700">Select User</label>
      <select
        className="w-full rounded-md border border-gray-200 p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={selectedUser}
        onChange={onSelectUser}
        disabled={loading}
      >
        <option value="" disabled>Select a user</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          className="flex-1 rounded-md border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add new User"
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          disabled={loading}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md shadow transition"
          onClick={onAddUser}
          type="button"
          disabled={loading}
        >
          Add
        </button>
      </div>
      <button
        className={`mt-4 font-semibold px-4 py-2 rounded-md shadow transition ${selectedUser ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-400 text-white cursor-not-allowed opacity-60'}`}
        disabled={!selectedUser || loading}
        onClick={onClaimPoints}
      >
        Claim Points
      </button>
    </div>
  );
} 