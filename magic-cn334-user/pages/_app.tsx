import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";
import { NavBar } from "./components/navbar";
import { Inter } from "next/font/google";
import Login from "./Login";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = (status: boolean) => {
    setIsLoggedIn(status);
    if (status) {
      Cookies.set('access_token', 'your_access_token_here', { expires: 1 });
    } else {
      Cookies.remove('access_token');
    }
  };

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      handleLogin(true);
    } else {
      handleLogin(false);
    }
  }, []);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <NextUIProvider>
          <NavBar />
          <main className={`flex flex-1 w-full justify-center items-start pt-10 pb-10 ${inter.className} bg-[#1A365D]`}>
            <Component {...pageProps} />
          </main>
        </NextUIProvider>
      )}
    </div>
  );
}
