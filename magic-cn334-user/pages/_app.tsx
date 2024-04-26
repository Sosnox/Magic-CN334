import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "./components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <main className="flex flex-1 w-full justify-center items-start pt-10 pb-10">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
