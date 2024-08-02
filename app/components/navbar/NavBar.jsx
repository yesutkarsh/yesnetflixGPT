import React, { useEffect } from 'react'
import { logo } from '@/utils/constant'
import style from "./nav.module.css"
export default function NavBar() {


  return (
    <div  id={style.logo}>


    <img  className='w-[200px] ' src={logo} alt={"logo"} />


    </div>
  )
}
