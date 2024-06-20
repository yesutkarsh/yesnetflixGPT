import React from 'react'
import style from "./glowingText.module.css"
import Link from 'next/link'
export default function GlowingText(props) {
  return (
    <Link href={props.link}  className={style.btnshine}>{props.text}</Link>
  )
}
