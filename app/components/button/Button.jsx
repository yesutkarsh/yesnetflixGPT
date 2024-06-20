import React from 'react'
import style from "./button.module.css"
import Loader from '@/loader/Loader'
import { useState } from 'react'
export default function Button({buttonClicked,text, animte}) {
    const [load, setLoad] = useState(false)

    const loadAnimation = ()=>{

      // State Varible coming from Where compoonent is mounter and tell if to animte loading animation or not
      if(animte){
        setLoad(true)
      }
      buttonClicked()
    }

  return (
    <button className={style.button} onClick={loadAnimation}>
    {load? <Loader/>:  text}
    </button>
  )
}
