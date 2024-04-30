import { Button, Image } from "@nextui-org/react"
import getProductById from "../api/auth/store/get/productById";
import { useEffect, useState } from "react";
import { fetchImage } from "./fetchImage";

interface ProductById {
    id: number,
    name: string,
    description: string,
    price: number,
    category_id: number,
    element_id: number,
    left_quantity: number,
    sales_quantity: number,
    category: string,
    element: string,
    img: { img: string }[]
  }

export const CartInCart = ({ data, changeRevenue} : {data : any , changeRevenue : any } ) => {
    const [ product, setProduct ] = useState<ProductById>(
        {
            id: 0,
            name: "",
            description: "",
            price: 0,
            category_id: 0,
            element_id: 0,
            left_quantity: 0,
            sales_quantity: 0,
            category: "",
            element: "",
            img: [{img: ""}]
        }
    )
    const fetchData = async () => {
        try {
            const Data = await getProductById(data.product_id);
            const DataProduct = Data.message[0]
            setProduct(DataProduct)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (product.price > 0) { 
            changeRevenue(product.price);
        }
    }, [product.price]);

    console.log(data.product_id, "dataInCart")
    console.log(product.name, "productInCart")
    return (
        <div className="flex items-center w-full justify-between p-4 text-black bg-white shadow-lg hover:shadow-md rounded-md my-3">
            <div className="flex items-center">
                <Image src={fetchImage(product.img[0].img)} alt="Thumbnail" className="h-12 w-12 rounded mr-4 shadow-md" />
                <div>
                    <p className="text-lg font-bold ">{product?.name}</p>
                    <p className="text-sm">{product?.description}</p>
                </div>
            </div>
            <div className="flex flex-row">
                <p className="text-lg font-bold">${product.price}</p>
            </div>
        </div>
    )
}