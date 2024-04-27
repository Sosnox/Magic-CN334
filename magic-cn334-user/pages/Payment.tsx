import { Button, Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react"
import exp from "constants"
import { Inter } from "next/font/google";


import { CardCart } from "./components/CardCart";
import { CardLocation } from "./components/CardLocation";
import { Backstep } from "./components/Backstep";

const inter = Inter({ subsets: ["latin"] });

const Payment = () => {
    return (
        <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
            <Backstep  />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-screen p-14">
                <div>
                    <Card className="bg-transparent text-white">
                        <CardHeader className="text-2xl font-bold">
                            Payment
                        </CardHeader>
                        <CardBody>
                            You have 3 item in your cart
                        </CardBody>
                        <Divider />
                        <CardHeader className="text-2xl font-bold">
                            Select ur Location to Delivery
                        </CardHeader>

                        <CardBody className="w-full justify-center items-center">
                            <CardCart />
                            <CardCart />
                            <CardCart />
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <CardLocation />
                </div>
            </div>
        </main>
    )
}
export default Payment