import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAdmin }) => {
  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
