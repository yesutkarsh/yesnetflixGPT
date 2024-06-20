"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import NavBar from "./components/navbar/NavBar";
import { Provider, useDispatch } from "react-redux";
import store from "@/utils/store";
import { useEffect } from "react";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "@/utils/storeSlice/userSlice";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

function Layout({ children }) {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const home = pathname === "/";
  const isLogin = pathname === "/login";
  const isSignup = pathname === "/signup";
  const navigate = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid, email }));
        navigate.push("/browse")
        
      } else {
        dispatch(removeUser());
        navigate.push("/")
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      {!isLogin && !isSignup && !home && <NavBar />}
      <main>{children}</main>
    </>
  );
}

export default function RootLayout({ children }) {
  
  return (
    <Provider store={store}>
      <html lang="en">
     <head>
     <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
    rel="stylesheet"
/>
     </head>
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </Provider>
  );
}
