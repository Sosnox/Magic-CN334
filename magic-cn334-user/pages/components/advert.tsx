
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export const Advert = () => {
    return (
        <Card
      isFooterBlurred
      radius="sm"
      className="border-none"
    >
      <Image
        alt="Advert Image"
        className="object-cover"
        height={500}
        src="/LogoHome.png"
        width={200}
      />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <Button className="text-tiny text-white bg-black/20 p-2" variant="flat" color="default" radius="lg" size="sm">
          Check it out!
        </Button>
      </CardFooter>
    </Card>
    );
    }