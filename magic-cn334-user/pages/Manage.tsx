import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { Backstep } from "./components/Backstep"
import { CardManage } from "./components/CardManage"
import { Inter } from "next/font/google";
import { CardAddProduct } from "./components/CardAddProduct";

const inter = Inter({ subsets: ["latin"] });

const Manage = () => {
    return (
        <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
            <Backstep />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-screen p-14">
                <div>
                    <Card className="bg-transparent text-white pl-4">
                        <CardHeader className="text-2xl font-bold">
                            Edit / Add Product
                        </CardHeader>
                        <CardBody>
                            You can edit or add product here
                        </CardBody>
                        <Divider />
                    </Card>
                    <div className="flex flex-col w-full justify-center items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                               <CardManage key={i}/>
                            ))}
                        </div>
                </div>
                <div>
                    <CardAddProduct />
                </div>
            </div>
        </main>
    )
}
export default Manage