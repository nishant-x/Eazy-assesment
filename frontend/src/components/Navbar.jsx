import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutuser } from "../features/loginThunk";

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutuser());
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopHub
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="font-medium text-gray-700">
                Hello! {user.username}
              </span>

              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-sm border rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;