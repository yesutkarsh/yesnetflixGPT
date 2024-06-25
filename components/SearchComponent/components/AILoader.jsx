import React from 'react'
import style from "./loader.module.css"
import { motion } from 'framer-motion'
export default function AILoader() {
  return (
    <>
    <div className={style.black}></div>
    <motion.div initial={{opacity:0.3}} animate={{opacity:1}} className={style.container}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</motion.div>
    </>
  )
}
