import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function PrivateRouterCheck({ children }) {
  const { isAuth } = useAuth();
  console.log(isAuth);
  return isAuth ? children : <Navigate to="/login" />;
}
export default PrivateRouterCheck;
