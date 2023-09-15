export const getSessionStorageUser = () =>
  JSON.parse(window.sessionStorage.getItem("userData")) ?? "";

export const updateSessionStorageUser = (state) => {
  window.sessionStorage.setItem("userData", JSON.stringify(state));
};

export const getSessionStorageAuth = () => {
  if (JSON.parse(window.sessionStorage.getItem("isAuth")) !== null) {
    return true;
  } else {
    return false;
  }
};
export const updateSessionStorageAuth = (state) => {
  window.sessionStorage.setItem("isAuth", JSON.stringify(state));
};

export const removeSessionStorageAuth = () => {
  window.sessionStorage.removeItem("isAuth");
  window.sessionStorage.removeItem("userData");
};
