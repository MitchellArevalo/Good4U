export const getSessionStorageAuth = () => {
  if (window.sessionStorage.getItem("user") !== null) {
    return true;
  } else {
    return false;
  }
};
export const updateSessionStorageAuth = (state) => {
  window.sessionStorage.setItem("user", state);
};

export const removeSessionStorageAuth = () => {
  window.sessionStorage.removeItem("user");
};
