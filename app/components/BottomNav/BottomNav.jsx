import React from 'react'
import style from "./bottomNav.module.css"
export default function BottomNav() {
  return (
    <>
    <div className={style.BottomNav}>
        <li>Home</li>
        <li>Search</li>
        <li>Profile</li>
    </div>
    <div className={style.blackBox}>

    </div>
    </>
  )
}
