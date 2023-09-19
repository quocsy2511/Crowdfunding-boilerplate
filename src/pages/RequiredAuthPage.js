import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequiredAuthPage = ({ allowPermissions = [], children }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // const userPermissions = user?.permissions || [];
  // const location = useLocation();
  // if (!user) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }
  // return userPermissions.find((p) => allowPermissions?.includes(p)) ||
  //   allowPermissions.length <= 0 ? (
  //   <Outlet></Outlet>
  // ) : user && user.id ? (
  //   <Navigate to="/unauthorize" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} replace />
  // );

  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (!user) return null;
  return <>{children}</>;
};

export default RequiredAuthPage;
