import { url_service } from "../utilities/urlsServices";

const urlRegister = `${url_service}/opradesign/client`;
const urlLogin = `${url_service}/opradesign/client/login`;

export const registerUser = async ({ credentials }) => {
  if (credentials === undefined) return;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    name: credentials?.name,
    email: credentials?.email,
    document: credentials?.document,
    address: credentials?.address,
    phoneNumber: credentials?.phoneNumber,
    password: credentials?.password,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return fetch(urlRegister, requestOptions)
    .then((response) => {
      if (!response.ok) {
        return console.log("Error en la respuesta", response);
      }
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
export const loginUser = async ({ credentials }) => {
  if (credentials === undefined) return;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    email: credentials?.email,
    password: credentials?.password,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return fetch(urlLogin, requestOptions)
    .then((response) => {
      if (!response.ok) {
        return console.log("Error en la respuesta", response);
      }
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
