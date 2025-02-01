import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Check if user is authenticated (check if token exists in localStorage)
  const authToken = localStorage.getItem("authToken");

  // If no authToken, redirect to login page
  if (!authToken) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the children routes
  return <Outlet />;
};

export default PrivateRoute;
