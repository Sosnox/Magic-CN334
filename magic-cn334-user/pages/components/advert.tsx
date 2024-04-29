
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export const Advert = () => {
  return (
    <div className="relative w-full mb-16">
      <Card className="border-2 h-96 p-4 mx-4">
        {/* <Image
          src="/Backgound.jpg"
          alt="Advert Image"
          className="object-cover w-full"
          width="100%"
          height="auto"
        /> */}
        <CardFooter className="justify-center before:bg-white/10  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <Button className=" text-white bg-black/20 p-2 text-xl" variant="flat" color="default" radius="lg" size="sm">
            Check it out!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}