import React from 'react';

export default function Leaderboard({ users, loading, onDeleteUser }) {
  // Split users into podium and rest
  const podium = users.slice(0, 3);
  const rest = users.slice(3);

  // Medal colors
  const medalColors = [
    'bg-yellow-300 text-yellow-800 border-yellow-400', // Gold
    'bg-gray-300 text-gray-700 border-gray-400',      // Silver
    'bg-amber-700 text-amber-100 border-amber-700'    // Bronze
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Leaderboard</h2>
      {/* Podium for top 3 */}
      {!loading && podium.length > 0 && (
        <div className="flex justify-center items-end gap-6 mb-8">
          {/* Second place (left) */}
          {podium[1] && (
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 mb-2 ${medalColors[1]}`}>{2}</div>
              <div className="flex items-center gap-1 font-semibold text-gray-700">
                {podium[1].name}
                <button
                  className="ml-1 text-xs text-red-500 hover:text-red-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300"
                  title="Delete user"
                  onClick={() => onDeleteUser(podium[1]._id)}
                  style={{ lineHeight: 1 }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              <div className="text-gray-500 text-sm">{podium[1].totalPoints} pts</div>
            </div>
          )}
          {/* First place (center) */}
          {podium[0] && (
            <div className="flex flex-col items-center" style={{ transform: 'translateY(-20px) scale(1.15)' }}>
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-extrabold border-4 mb-2 ${medalColors[0]}`}>{1}</div>
              <div className="flex items-center gap-1 font-bold text-gray-900">
                {podium[0].name}
                <button
                  className="ml-1 text-xs text-red-500 hover:text-red-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300"
                  title="Delete user"
                  onClick={() => onDeleteUser(podium[0]._id)}
                  style={{ lineHeight: 1 }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              <div className="text-gray-600 text-base font-semibold">{podium[0].totalPoints} pts</div>
            </div>
          )}
          {/* Third place (right) */}
          {podium[2] && (
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 mb-2 ${medalColors[2]}`}>{3}</div>
              <div className="flex items-center gap-1 font-semibold text-gray-700">
                {podium[2].name}
                <button
                  className="ml-1 text-xs text-red-500 hover:text-red-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300"
                  title="Delete user"
                  onClick={() => onDeleteUser(podium[2]._id)}
                  style={{ lineHeight: 1 }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              <div className="text-gray-500 text-sm">{podium[2].totalPoints} pts</div>
            </div>
          )}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 font-semibold text-gray-700">#</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Name</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Points</th>
              <th className="px-4 py-2 font-semibold text-gray-700">Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} className="text-center py-4">Loading...</td></tr>
            ) : rest.length === 0 ? (
              <tr><td colSpan={4} className="text-center py-4">{podium.length === 0 ? 'No users' : 'No more users'}</td></tr>
            ) : (
              rest.map((user, idx) => (
                <tr key={user._id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="px-4 py-2 font-bold text-blue-600">{idx + 4}</td>
                  <td className="px-4 py-2 font-medium text-gray-800">{user.name}</td>
                  <td className="px-4 py-2 text-gray-700">{user.totalPoints}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-red-500 hover:text-red-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300"
                      title="Delete user"
                      onClick={() => onDeleteUser(user._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} 