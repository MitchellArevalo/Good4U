import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRouterCheck({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
}
export function PrivateRouterAuth({ children }) {
  const { isAuth } = useAuth();
  return !isAuth ? children : null;
}
