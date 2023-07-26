import React from 'react'

function Input({placeholder,type,style=null}) {
  return (
    <input  type={type} placeholder={placeholder} className={'input'}/>
  )
}

export default Input