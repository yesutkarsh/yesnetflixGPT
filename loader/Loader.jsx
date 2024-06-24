import React from 'react'
import style from "./loader.module.css"
export default function Loader() {
  return (
    <>
    <div className={style.dark}></div>
    <div className={style.loader}>
    <span className={style.bar}></span>
    <span className={style.bar}></span>
    <span className={style.bar}></span>
</div>
    </>
  )
}
