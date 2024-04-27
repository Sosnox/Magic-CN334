import { Button, Card, CardBody, CardFooter, CardHeader ,Image } from "@nextui-org/react";

const data = {
    title: "หนังสือไฟระวังร้อน",
    price: 120,
    category: "หนังสือ",
    element: "ไฟ",
    image: "category.jpg",
    }

export const CardCategory = () => {
    return (
        <Card className=" bg-[#2C5282] shadow-xl relative border-2 border-[#2A4365]">
            <CardBody className="overflow-visible  w-full">
                <Image
                    alt="Card background"
                    className="object-cover rounded-lg w-full"
                    src={`/${data.image}`}
                    width={270}
                />
            </CardBody>
            <CardFooter className="justify-center py-1 absolute bottom-5 shadow-small ml-1 z-10">
                <Button className="text-tiny text-white bg-[#FF304F] px-6" variant="flat" color="default" radius="sm" size="sm">
                    หมวดหมู่
                </Button>
            </CardFooter>
        </Card>
    );
}