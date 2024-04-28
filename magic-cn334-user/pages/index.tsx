import { Inter } from "next/font/google";
import { Advert } from "./components/advert";
import { Category } from "./components/category";
import { ExampleProduct } from "./components/ExampleProduct";
import { NavCategory } from "./components/navCategory";

import { Productsort } from "./components/Productsort";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
        <Advert />
        <ExampleProduct />
        <Productsort />
    </main>
  );
}
