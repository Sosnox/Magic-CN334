import { Card, CardHeader, CardBody, Image, Button, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import getProductById from "../api/auth/store/get/productById";
import deliveryAuth from '../api/auth/post/deliveryAuth';
import { use, useEffect, useState } from "react";
import { fetchImage } from "./fetchImage";
import { useRouter } from "next/router";
import AddCartPost from "../api/auth/post/addCart";
import { getAccessToken } from "../cookie/cookie";
import { Alert } from "@mui/material";
import { AlertSuccess } from "./alertSuccess";
import { ToastContainer } from "react-toastify";

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

export const CardProduct = ({ data }: { data: any }) => {
  const router = useRouter()
  const [Singledata, setSingleData] = useState<ProductById>(data)
  const [DataCart, setDataCart] = useState(
    {
      product_id: Singledata.id,
      quantity: 1
    }
  )

  useEffect(() => {
    setSingleData(data)
  }, [data])

  console.log(DataCart, "testCart")
  const AddCart = async () => {

    try {
      const respones = await AddCartPost(DataCart)
      if (respones.status){
        AlertSuccess("Add to Cart Success")
      }
      console.log(respones, "responesCart")
    } catch (error) {
      console.log(error)
    }
  }

  const showDetail = (id: number) => {
    router.push(`/ProductDetail/${id}`)
  }
  console.log(Singledata, "Singledata")

  return (
    <Card className="py-4 shadow-lg bg-[#2C5282] border-2 border-[#2A4365] text-white">
      <ToastContainer />
      <div className="cursor-pointer"
        onClick={() => showDetail(Singledata.id)}>
        <CardHeader className="pt-2 px-4 flex-col items-start">
          <div className="flex w-full flex-row justify-between text-xl">
            <label className="font-semibold">{Singledata.name}</label>
            <label>{Singledata.price} ฿</label>
          </div>
        </CardHeader>
        <CardBody className="flex items-center overflow-visible py-2">
          <Image
            alt="Card Category Image"
            className="object-cover rounded-xl"
            src={
              fetchImage(Singledata.img[0].img)
            }
            width={270}
          />
        </CardBody>
        <CardBody className="px-4">
          <p className="text-xl text-[#BEE3F8] font-bold">Category : {Singledata.category}</p>
          <p className="text-xl text-white">Element : {Singledata.element}</p>
        </CardBody>
      </div>
      <CardFooter className=" px-6 justify-between z-10 bottom-1">
        <Button className="text-tiny " radius="sm" size="sm" onClick={AddCart}>
          Add to cart
        </Button>
        <Button className="text-tiny " radius="sm" size="sm" onClick={AddCart}>
          <Link href="/Payment">
            Have it now!
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}