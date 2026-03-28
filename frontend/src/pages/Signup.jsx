import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      navigate("/login");
    } else {
      alert(data.msg);
    }

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-lg px-3 py-2 mb-4"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-3 py-2 mb-4"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2 mb-6"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;