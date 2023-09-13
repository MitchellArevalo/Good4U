import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, ERRORAUTH } from "../reducer/authSlice";
import { registerUserAPI, loginUserAPI } from "../reducer/authSlice";
export const useAuth = () => {
  const isAuth = useSelector((state) => state.authUser.isAuthenticated);
  const isRegister = useSelector((state) => state.authUser.isRegister);
  const user = useSelector((state) => state.authUser.user);
  const pending = useSelector((state) => state.authUser.pending);
  const error = useSelector((state) => state.authUser.error);
  const dispatch = useDispatch();

  const registerUser = ({ credentials }) => {
    dispatch(registerUserAPI({ credentials }));
  };

  const logInUser = (user) => {
    console.log(user);
    dispatch(loginUserAPI({ user }));
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
    isRegister,
    error,
    pending,
    user,
    isAuth,
  };
};
