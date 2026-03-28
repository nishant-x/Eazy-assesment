import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginuser } from "../features/loginThunk";

function Login() {
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  const result = await dispatch(loginuser(userdata));

  if (result.meta.requestStatus === "fulfilled") {
    navigate("/dashboard");
  }
};

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to your account
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-3 py-2 mb-4"
            value={userdata.email}
            onChange={(e) =>
              setUserdata({ ...userdata, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-3 py-2 mb-6"
            value={userdata.password}
            onChange={(e) =>
              setUserdata({ ...userdata, password: e.target.value })
            }
            required
          />

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?
        </p>

        <div className="flex justify-center mt-2">
          <Link
            to="/signup"
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;