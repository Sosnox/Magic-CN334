import { Card, CardHeader, CardBody, Image, Button, CardFooter } from "@nextui-org/react";
import Link from "next/link";

const data = {
  title: "หนังสือไฟระวังร้อน",
  price: 120,
  category: "หนังสือ",
  element: "ไฟ",
  image: "Magic.png",
}

export const CardProduct = () => {
  return (
    <Card className="py-4 shadow-lg bg-[#2C5282] border-2 border-[#2A4365] text-white">
      <CardHeader className="pt-2 px-4 flex-col items-start">
        <p className="text-lg uppercase ">หมวดหมู่ : <span className="text-sm font-normal">{data.category}</span></p>
        <p className="text-lg uppercase ">ธาตุ : <span className="text-sm font-normal">{data.element}</span></p>
        <small className="text-[#BEE3F8] font-bold">ราคา : <span className="text-sm font-normal">{data.price}</span></small>
        <h4 className="font-bold text-2xl my-2">ชื่อสินค้า : <span className="text-lg font-normal">{data.title}</span></h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card Category Image"
          className="object-cover rounded-xl"
          src={`/${data.image}`}
          width={270}
        />
      </CardBody>
      <CardFooter className="absolute px-6 justify-between z-10 bottom-1">
        <Button className="text-tiny text-white bg-[#FF304F]" radius="sm" size="sm">
          <Link href="/Payment">
            Add to cart
          </Link>
        </Button>
        <Button className="text-tiny text-white bg-[#FF304F]" radius="sm" size="sm">
          <Link href="/Payment">
            Have it now!
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}