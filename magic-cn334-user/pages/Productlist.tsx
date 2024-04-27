import { Inter } from "next/font/google";
import { Productlist } from "./components/Productlist";
import { Backstep } from "./components/Backstep";
import { NavCategory } from "./components/navCategory";

const inter = Inter({ subsets: ["latin"] });

const ProductList = () => {
    return (
        <main className={`flex min-h-screen w-screen flex-col items-center  ${inter.className} border-slate-400`}>
            <div className="flex w-screen ml-10 mb-10">
                <Backstep />
            </div>
            <div className="flex flex-row w-screen justify-center">
                <div className="w-20">
                    <NavCategory />
                </div>
                <div className="w-4/5">
                    <Productlist />
                </div>
            </div>
        </main>
    )
}
export default ProductList