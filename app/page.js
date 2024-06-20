"use client"
import React, { useState } from 'react'
import Loader from '@/loader/Loader'
import Button from './components/button/Button'
import Link from 'next/link'
import GlowingText from './components/glowingText/GlowingText'
import { addUser, removeUser } from '@/utils/storeSlice/userSlice'
import { auth } from '@/utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function HomePage() {


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
      <GlowingText link="/login" text="Already Have Account, Sign In"/>
      </span>
      </div>
    </div>
    </>
  )
}
