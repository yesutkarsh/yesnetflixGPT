"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import NavBar from "./components/navbar/NavBar";
import { Provider, useDispatch } from "react-redux";
import store from "@/utils/store";
import BottomNav from "./components/BottomNav/BottomNav";
const inter = Inter({ subsets: ["latin"] });

function Layout({ children }) {
  const pathname = usePathname();
  const home = pathname === "/";
  const isLogin = pathname === "/login";
  const isSignup = pathname === "/signup";



  return (
    <>
      {!isLogin && !isSignup && !home && <> <NavBar /> <BottomNav/></>}
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
