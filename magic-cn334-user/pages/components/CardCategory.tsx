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
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={`/${data.image}`}
                    width={270}
                />
            </CardBody>
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Button className="text-tiny text-white bg-[#FF304F] p-2" variant="flat" color="default" radius="lg" size="sm">
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
}