import React from "react";
import Form from "../../components/Form/Form";

const listLogin=[
  { 
    id:1,
    name:"Correo",
    type:"email",
    placeholder:"Escribe tu correo"

  }
]
function Login() {
  return (
    <div className="h-screen  ">
      <div className=" h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-8 : w-5/12 ">
        <h1 className=": font-bold text-2xl text-center ">Inicio de sesión</h1>
        <Form listInput={listLogin}/>
      </div>
    </div>
  );
}

export default Login;
