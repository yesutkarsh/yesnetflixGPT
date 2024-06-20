"use client"
import React,{useEffect, useRef,useState} from 'react'
import style from "../login/login.module.css"
import InputComp from '../components/form/Input'
import Button from '../components/button/Button'
import GlowingText from '../components/glowingText/GlowingText'
import { validateData } from '@/utils/validate'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '@/utils/storeSlice/userSlice'
export default function page() {


// Reference Values
  const email= useRef(null)
  const password= useRef(null)
  const displayName = useRef(null)
  const dispatch = useDispatch()

const [alert, setAlert] = useState(null)
const [animte, setAnimte] =  useState(false)




  const handleButtonClick = () => {
    const valueOfemail = email.current.value;
    const valueOfpassword = password.current.value;
    const valueOfdisplayName  = displayName.current.value;

    // Form Validation
    let isDataValid = validateData(valueOfemail, valueOfpassword);
    if(isDataValid){
      setAlert(isDataValid)
    }else{

    //Create Account
    createUserWithEmailAndPassword(auth,valueOfemail, valueOfpassword)
    
  .then((userCredential) => {
    // Signed up 
    setAnimte(true)

    const user = userCredential.user;
    dispatch(addUser(user))
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message
    // ..
    setAlert("Cannot create Account")
    console.log(errorMessage)

  });
  };
}


  return (
    <>
    <div className="movieContainer">
      <div className="dark flex items-center justify-center ">
        <form onSubmit={(e)=>e.preventDefault()} className={style.LoginForm} action="">
    <InputComp reference={displayName} w="5" placeholder="Name" type="text"/>
    <InputComp reference={email} w="5" placeholder="Email Address" type="email"/>
    <InputComp reference={password} w="5" placeholder="Password" type="Password"/>
    <p className='text-red-600 text-left w-72'>{alert}</p>
    <br />
    <Button buttonClicked={handleButtonClick} animte={animte} text="Sign Up" />
    <br />
    <div >
    <GlowingText link="/login" text="Already Have Account, Sign In"/>
    </div>
        </form>
      </div>
    </div>
    </>
  )
}
