import { Inter } from "next/font/google";
import BarAnimation from "./components/BarChart";

const inter = Inter({ subsets: ["latin"] });

const Overview = () => {
    return (
        <main className={`flex min-h-screen w-screen flex-col items-center ${inter.className} border-slate-400`}>
            <div className="">
                <h1>Overview</h1>
            </div>
            <div className="grid grid-cols-2 mx-4">
                 {/* <BarAnimation /> */}
                card some thing her
            </div>
            <div className="">

            </div>
        </main>
    );
    }
export default Overview