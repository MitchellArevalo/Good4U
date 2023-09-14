export const getSessionStorageAuth = () => {
  if (JSON.parse(window.sessionStorage.getItem("user")) !== null) {
    return true;
  } else {
    return false;
  }
};
export const updateSessionStorageAuth = (state) => {
  window.sessionStorage.setItem("user", JSON.stringify(state));
};

export const removeSessionStorageAuth = () => {
  window.sessionStorage.removeItem("user");
};
