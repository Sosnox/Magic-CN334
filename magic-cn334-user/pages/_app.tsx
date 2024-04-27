import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {NextUIProvider} from "@nextui-org/react";
import * as React from "react";
import { NavBar } from "./components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <div>
    <NextUIProvider>
      <NavBar />
      <main className={`flex flex-1 w-full justify-center items-start pt-10 pb-10 ${inter.className} bg-[#1A365D]`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
    </div>
  );
}
