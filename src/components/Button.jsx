import React from 'react'
import clsx from 'clsx'

const Button = ({icon,className, label, type, onclick =()=>{} })=> {
    return (
   <button 
   type={type || "button"}
   label={label}
   className={clsx("px-3 py-2 outline-none ", className) } >
    <span>{label}</span>
    {icon && icon}
   </button>
    )
}

export default Button
