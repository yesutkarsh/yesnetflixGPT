import React from 'react'
import style from "./button.module.css"
import Loader from '@/loader/Loader'
import { useState } from 'react'
export default function Button({text, animte}) {

  
  return (
    <button className={style.button}>
    {text}
    </button>
  )
}
