import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react"
import exp from "constants"
import { Inter } from "next/font/google";


import { CardCart } from "./components/CardCart";
import { CardLocation } from "./components/CardLocation";
import { Backstep } from "./components/Backstep";
import { use, useEffect, useState } from "react";
import getCart from "./api/auth/get/getCart";
import deleteAllCart from "./api/auth/delete/deleteCart";
import { AlertSuccess } from "./components/alertSuccess";

const inter = Inter({ subsets: ["latin"] });


const Payment = () => {

    const [data, setData] = useState([])
    const [revenue, setRevenue] = useState(0)

    const changeRevenue = (price: any) => {
        setRevenue(prevRevenue => prevRevenue + price);
    }


    const fetchData = async () => {
        try {
            const res = await getCart();
            setData(res.message)
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteCart = async () => {
        try {
          const respone = await deleteAllCart()
          if (respone.status){
            AlertSuccess("Delete All Cart Success")
            window.location.reload();
            setRevenue(0)
          }
        }
        catch (error) {
          console.log(error)
        }
      }

    useEffect(() => {
        fetchData()
    }, [])

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
                            You have {data.length} item in your cart
                        </CardBody>
                        <Divider />
                        <CardHeader>
                            <div className="flex w-full justify-between items-center text-2xl font-bold">
                                <div className="text-lg font-medium">ยอดรวมทั้งหมด : ${revenue}</div>
                                <div>
                                    <Button variant="ghost" className="text-white" onClick={deleteCart}>Cancel All Cart</Button>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                    <div className="flex flex-col w-full justify-center items-center">
                        {data.map((data: any, key: any) => (
                            <CardCart key={key} data={data} changeRevenue={changeRevenue} />
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