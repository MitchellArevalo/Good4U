import React from 'react'
import Form from '../../components/Form/Form';

const listRegister=[ 
    { 
        id:1,
        name:"Correo",
        type:"email",
        placeholder:"Escribe tu correo"
    },
    { 
        id:2,
        name:"Contraseña",
        type:"password",
        placeholder:"Escribe tu contraseña"
    },
    { 
        id:3,
        name:"Nombre de la Empresa",
        type:"text",
        placeholder:"Escribe el nombre de la empresa"
    },
    { 
        id:4,
        name:"Número telefónico Teléfonico",
        type:"text",
        placeholder:"+57 315 475 5012"
    }
]

function Register() {

  return (
    <div className="h-screen  ">
      <div className=" h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-8 : w-5/12 ">
        <h1 className=": font-bold text-2xl text-center ">Registro</h1>
        <Form isLogin={false} listInput={listRegister} />
      </div>
    </div>
  )
}

export default Register