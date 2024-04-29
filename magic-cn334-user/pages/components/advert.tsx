import { Card, CardFooter, Button, CardBody } from "@nextui-org/react";
import Image from "next/image";

import React, { useEffect, useState } from "react";

export const Advert = () => {
  const imageArray = [
    '/baner1.png',
    '/baner2.png',
    '/baner3.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center w-full mb-16 ">
      <Card className="flex flex-row border-2 justify-center items-center w-[90%] h-[700px]">
          <Image src={imageArray[currentIndex]} alt={`baner${currentIndex + 1}`} fill/>
        <CardFooter className="justify-center py-1 absolute bottom-1 shadow-small ml-1 z-10">
          <Button className="text-white bg-black/20 p-2 text-xl" variant="flat" color="default" radius="lg" size="sm">
            Check it out!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
