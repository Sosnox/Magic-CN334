import { Inter } from "next/font/google";

import { ExampleProduct } from "./components/ExampleProduct";
import { Productsort } from "./components/Productsort";
import { Advert } from "./components/advert";
import { AlertSuccess } from "./components/alertSuccess";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
        <Advert />
        <ExampleProduct />
        <Productsort />
    </main>
  );
}
