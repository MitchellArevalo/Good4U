import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT, ERRORAUTH } from "../reducer/authSlice";
import {
  updateSessionStorageAuth,
  removeSessionStorageAuth,
} from "../utilities/sessionStorageAuth";
import { registerUserAPI } from "../reducer/authSlice";
export const useAuth = () => {
  const isAuth = useSelector((state) => state.authUser.isAuthenticated);
  const user = useSelector((state) => state.authUser.user);
  const error = useSelector((state) => state.authUser.error);
  const dispatch = useDispatch();

  const registerUser = ({ credentials }) => {
    dispatch(registerUserAPI({ credentials }));
  };

  const logInUser = (user) => {
    updateSessionStorageAuth(user);
    dispatch(LOGIN(user));
  };
  const logOutUser = () => {
    removeSessionStorageAuth();
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
    user,
    isAuth,
  };
};
