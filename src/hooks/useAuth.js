import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, ERRORAUTH } from "../reducer/authSlice";
import { registerUserAPI, loginUserAPI } from "../services/postUser";
export const useAuth = () => {
  const isAuth = useSelector((state) => state.authUser.isAuthenticated);
  const user = useSelector((state) => state.authUser.user);
  const loading = useSelector((state) => state.authUser.loading);
  const message = useSelector((state) => state.authUser.message);
  const error = useSelector((state) => state.authUser.error);
  const dispatch = useDispatch();

  console.log("Este eselmensaje", message);

  const registerUser = (credentials) => {
    dispatch(registerUserAPI(credentials));
  };

  const logInUser = (user) => {
    console.log(user);
    dispatch(loginUserAPI(user));
  };
  const logOutUser = () => {
    dispatch(LOGOUT());
  };

  const errorUser = () => {
    dispatch(ERRORAUTH());
  };

  return {
    registerUser,
    logInUser,
    logOutUser,
    errorUser,
    error,
    loading,
    message,
    user,
    isAuth,
  };
};
