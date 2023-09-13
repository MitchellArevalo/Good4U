import { url_service } from "../utilities/urlsServices";

const url = `${url_service}/opradesign/clients`;

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
  return fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        console.log("Error en la respuesta", response);
        response.json();
      }
    })
    .catch((error) => console.log("error", error));
};
