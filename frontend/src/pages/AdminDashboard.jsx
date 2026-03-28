import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/users`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUsers(data.users);
      } else {
        setError(data.message || "Failed to fetch users");
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Server error while fetching users.");
      setLoading(false);
    }
  };

  // Delete User
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/users/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUsers((prev) => prev.filter((user) => user.id !== id));
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete user.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-lg mt-10">{error}</div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Admin Dashboard
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Created</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="text-center hover:bg-gray-100 transition"
                >
                  <td className="p-3 border">{user.id}</td>
                  <td className="p-3 border">{user.username}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border capitalize">{user.role}</td>

                  <td className="p-3 border">
                    {user.created_at
                      ? new Date(user.created_at).toLocaleString()
                      : "N/A"}
                  </td>

                  <td className="p-3 border flex justify-center gap-3">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;