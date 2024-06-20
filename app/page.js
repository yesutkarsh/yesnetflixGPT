"use client"
import React, { useState } from 'react'
import Button from './components/button/Button'
import Link from 'next/link'
import GlowingText from './components/glowingText/GlowingText'
import "./globals.css";

export default function HomePage() {
  const buttClk = ()=>{console.log("Clicked")}

  return (
    
    <>
    <div className="movieContainer">
      <div className="dark"></div>
      <div className="hero text-white ">
        NETFLIX - GPT
      <p> AI THAT HELP YOU FIND MOVIES ACCORDING TO YOUR MOOD</p>
      {
      <Link href="/signup">
      <Button text="Sign Up"/>
      </Link>
      }
       <br />
      <span>
      <GlowingText link="/login" buttonClicked={buttClk} text="Already Have Account, Sign In"/>
      </span>
      </div>
    </div>
    </>
  )
}
