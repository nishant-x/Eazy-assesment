import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRole }) {
  const user = useSelector((state) => state.user.user);

  // console.log(user)

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRole.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }


  return children;
}

export default ProtectedRoute;