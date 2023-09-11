import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT, ERROR } from "../reducer/authSlice";
import {
  updateSessionStorageAuth,
  removeSessionStorageAuth,
} from "../utilities/sessionStorageAuth";

export const useAuth = () => {
  const isAuth = useSelector((state) => state.authUser.isAuthenticated);
  const user = useSelector((state) => state.authUser.user);
  const error = useSelector((state) => state.authUser.error);
  const dispatch = useDispatch();

  const logInUser = (user) => {
    updateSessionStorageAuth(user);
    dispatch(LOGIN(user));
  };
  const logOutUser = () => {
    removeSessionStorageAuth();
    dispatch(LOGOUT());
  };

  const errorLoginUser = (errorMessage) => {
    dispatch(ERROR(errorMessage));
  };

  return {
    logInUser,
    logOutUser,
    errorLoginUser,
    error,
    user,
    isAuth,
  };
};
