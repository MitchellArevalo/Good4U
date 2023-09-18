import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, ERRORAUTH } from "../reducer/authSlice";
import {
  registerUserAPI,
  loginUserAPI,
  putUserAPI,
} from "../services/userService";
export const useAuth = () => {
  const isAuth = useSelector((state) => state.authUser.isAuthenticated);
  const user = useSelector((state) => state.authUser.user);
  const loading = useSelector((state) => state.authUser.loading);
  const message = useSelector((state) => state.authUser.message);
  const error = useSelector((state) => state.authUser.error);
  const dispatch = useDispatch();

  const registerUser = ({
    name,
    email,
    document,
    address,
    phoneNumber,
    password,
  }) => {
    dispatch(
      registerUserAPI({
        name,
        email,
        document,
        address,
        phoneNumber,
        password,
      })
    );
  };

  const logInUser = ({ email, password }) => {
    dispatch(loginUserAPI({ email, password }));
  };

  const putUser = ({ id, user }) => {
    dispatch(putUserAPI(id, user));
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
    putUser,
    errorUser,
    error,
    loading,
    message,
    user,
    isAuth,
  };
};
