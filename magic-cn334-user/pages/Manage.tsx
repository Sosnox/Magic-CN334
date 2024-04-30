import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { Backstep } from "./components/Backstep"
import { CardManage } from "./components/CardManage"
import { Inter } from "next/font/google";
import { CardAddProduct } from "./components/CardAddProduct";
import { ChangeEvent, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Manage =  () => {
    const [products, setProduct] = useState([]);

    const download = async () => {
        try{
            const res = await fetch('http://210.246.215.173:8002/mgmt/product', {
                method: 'GET'
            });
            const resData = await res.json()
            setProduct(resData.message)
            console.log(products)
        }
        catch(error){
            throw error
        }
    }

    useEffect(() => {
        download();
    }, []);

    return (
        <main className={`flex  w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
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
                    <div className="flex flex-col w-full p-2 pt-12 h-[60vh] justify-center items-center overflow-auto">
                    {products.map((product, index) => (
                        <CardManage key={index} product={product} />
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