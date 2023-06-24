import React from 'react'
import Form from '../../components/Form/Form';
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const listRegister=[ 
    { 
        id:1,
        name:"Correo",
        type:"email",
        placeholder:"Escribe tu correo",
        icon:<EmailIcon className="absolute left-0  " />
    },
    { 
        id:2,
        name:"Contraseña",
        type:"password",
        placeholder:"Escribe tu contraseña",
        icon:<LockOpenIcon className="absolute left-0  " />

    },
    { 
        id:3,
        name:"Nombre de la Empresa",
        type:"text",
        placeholder:"Escribe el nombre de la empresa",
        icon:<LockOpenIcon className="absolute left-0  " />

    },
    { 
        id:4,
        name:"Número telefónico Teléfonico",
        type:"text",
        placeholder:"+57 315 475 5012",
        icon:<LocalPhoneIcon className="absolute left-0  " />

    }
]

function Register() {

  return (
    <div className=" bg-cover bg-center h-screen  ">
      <div className=" h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-8 : w-5/12 ">
        <h1 className=": font-bold text-2xl text-center ">Registro</h1>
        <Form isLogin={false} listInput={listRegister} />
      </div>
    </div>
  )
}

export default Register