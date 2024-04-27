import {Card, CardHeader, CardBody, Image, Button, CardFooter} from "@nextui-org/react";

const data = {
    title: "หนังสือไฟระวังร้อน",
    price: 120,
    category: "หนังสือ",
    element: "ไฟ",
    image: "Magic.png",
    }

export const CardProduct = () => {
    return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">หมวดหมู่ {data.category}</p>
        <p className="text-tiny uppercase font-bold">ธาตุ {data.element}</p>
        <small className="text-default-500">ราคา {data.price}</small>
        <h4 className="font-bold text-large">ชื่อสินค้า {data.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card Category Image"
          className="object-cover rounded-xl"
          src={`/${data.image}`}
          width={270}
        />
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button className="text-tiny text-white bg-[#FF304F] p-2" variant="flat" color="default" radius="lg" size="sm">
          Add to cart
        </Button>
        <Button className="text-tiny text-white bg-[#FF304F] p-2" variant="flat" color="default" radius="lg" size="sm">
          Have it now!
        </Button>
      </CardFooter>
    </Card>
  );
}