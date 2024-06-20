import React, { useEffect } from 'react'
import { logo } from '@/utils/constant'
import style from "./nav.module.css"
import { auth } from '@/utils/firebase'
import {signOut } from 'firebase/auth';
export default function NavBar() {


  const SignOut = ()=>{
    signOut(auth).then(()=>{
      console.log("sign out")
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div  id={style.logo}>
    <img  className='w-[200px] ' src={logo} alt={"logo"} />
    <i class="ri-user-3-fill"></i>
    <button onClick={SignOut} className={style.signOut} >
    <i class="ri-logout-circle-line"></i>
      Sign Out</button>
    </div>
  )
}
