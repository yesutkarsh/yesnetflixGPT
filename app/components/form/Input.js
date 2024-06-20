import React from 'react'
import style from "./input.module.css" 

export default function InputComp(props) {
  return (
    <input ref={props.reference} className={`w-[${props.w+"px"}]`} placeholder={props.placeholder} id={style.input} name="text" type={props.type}  required={props.required}/>
  )
}
