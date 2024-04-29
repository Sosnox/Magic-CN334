import { Inter } from "next/font/google";

import { Category } from "./components/category";
import { ExampleProduct } from "./components/ExampleProduct";
import { NavCategory } from "./components/navCategory";

import { Productsort } from "./components/Productsort";
// import Carousel from "./components/Carouesl";
import { Advert } from "./components/advert";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("Home")

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
        <Advert />
        <ExampleProduct />
        <Productsort />
    </main>
  );
}
