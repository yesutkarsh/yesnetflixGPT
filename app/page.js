"use client"
import React, { useState } from 'react'
import Button from './components/button/Button'
import Link from 'next/link'
import GlowingText from './components/glowingText/GlowingText'
import "./globals.css";
import Loader from '@/loader/Loader'

export default function HomePage() {
  const [animate, setAnimate ] = useState(false)
  const Animate = ()=>{
    setAnimate(true)
  }
  const buttClk = ()=>{console.log("Clicked")}

  return (
    
    <>


    <div className="movieContainer">
      <div className="dark"></div>
      <div className="hero text-white ">

<img className='logo' src="https://res.cloudinary.com/dpcvcblbt/image/upload/v1719253278/e1j1kvwckwwpiil1m9zs.png" alt="" />
         {/* <br /> */}
{/* <span className='search'> AI Search: Kuch Majedar 😎 hindi movies</span> <br /> */}
      {
      <Link href="/signup">
        <div onClick={Animate}>
      <Button text="Sign Up"/>
        </div>
      </Link>
      }
       <br />

      <span>
      <GlowingText link="/login" buttonClicked={buttClk} text="Already Have Account, Sign In"/>
      </span>
      </div>

      {animate? <Loader/>:null}

    </div>

    </>
  )
}
