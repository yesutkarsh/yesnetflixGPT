"use client";
import React, { useRef, useState } from "react";
import style from "./login.module.css";
import InputComp from "../components/form/Input";
import Button from "../components/button/Button";
import GlowingText from "../components/glowingText/GlowingText";
import { validateData } from "@/utils/validate";
import { auth } from "@/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "@/loader/Loader";



export default function LoginPage() {

  const [animate, setAnimate ] = useState(false)

  const email = useRef(null);
  const password = useRef(null);
  const [alert, setAlert] = useState(null);
  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    // Form Validation
    let isDataValid = validateData(emailValue, passwordValue);
    if (isDataValid) {
      setAlert(isDataValid);
    } else {
      //Login Account
      setAnimate(true)
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div className="movieContainer">
      <div className="dark flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className={style.LoginForm}
          action=""
        >
          <InputComp
            reference={email}
            w="5"
            placeholder="Email Address"
            type="email"
            required="required"
          />
          <InputComp
            reference={password}
            w="5"
            placeholder="Password"
            type="password"
            required="required"
          />
          <p className="text-red-600 text-left w-72">{alert}</p>
          <br />
          <div onClick={handleButtonClick}>
          <Button id="butt" text="Log In" />
          </div>
          <br />
          <div>
            <GlowingText link="/signup" text="New To Us, Sign Up" />
          </div>
        </form>
      </div>
      {animate? <Loader/>:null}
    </div>
  );
}
