import { CardProduct } from "./CardProduct"
import { useEffect, useState } from "react"
import getTopProduct from "../api/auth/store/dashboard/get/topProduct"


export const ExampleProduct = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const dataAll = await getTopProduct()
            const dataShow = dataAll.message
            console.log(dataAll, "dataAll top")
            setData(dataShow)
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

// console.log("ExampleProduct", data)

    return (
        <div className="flex flex-col items-center gap-4 w-full mb-12">
            <div className="flex shrink-0 gap-6 mb-4">
                {data.slice(0, 5).map((data , key) => (
                    <CardProduct key={key} data={data} />
                ))}
            </div>
        </div>
    )
}