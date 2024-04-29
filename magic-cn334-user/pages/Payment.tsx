import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react"
import exp from "constants"
import { Inter } from "next/font/google";


import { CardCart } from "./components/CardCart";
import { CardLocation } from "./components/CardLocation";
import { Backstep } from "./components/Backstep";

const inter = Inter({ subsets: ["latin"] });

const Payment = () => {
    return (
        <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
            <Backstep />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-screen p-14">
                <div>
                    <Card className="bg-transparent text-white pl-4">
                        <CardHeader className="text-2xl font-bold">
                            Shopping cart
                        </CardHeader>
                        <CardBody>
                            You have 3 item in your cart
                        </CardBody>
                        <Divider />
                        <CardHeader>
                            <p className="text-2xl font-bold">ยอดรวมทั้งหมด : <span className="text-lg font-medium">681 บาท</span></p>                        </CardHeader>
                    </Card>
                    <div className="flex flex-col w-full justify-center items-center">
                            {Array.from({ length: 16 }).map((_, i) => (
                               <CardCart key={i}/>
                            ))}
                        </div>
                </div>
                <div>
                    <CardLocation />
                </div>
            </div>
        </main>
    )
}
export default Payment