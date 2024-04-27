import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { useState } from "react";

export const CardCart = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center justify-between p-4 text-black bg-white shadow-lg hover:shadow-md rounded-md w-2/3 my-3">
      <div className="flex items-center">
        <Image src="/Magic.png" alt="Thumbnail" className="h-12 w-12 rounded mr-4 shadow-md" />
        <div>
          <p className="text-lg font-bold ">Item 1</p>
          <p className="text-sm">Some description</p>
        </div>
      </div>
      <div className="flex flex-row">
        <p className="text-lg font-bold">$100</p>
      </div>
      <div className="flex flex-row">
        <div className="flex items-center mx-4">
          <Button
            onClick={decreaseQuantity}
            className="text-white bg-[#90CDF4] hover:text-white "
          >
            -
          </Button>
          <span className="mx-5">{quantity}</span>
          <Button
            onClick={increaseQuantity}
            className="text-white bg-[#90CDF4] hover:text-white "
          >
            +
          </Button>
        </div>
        <Button className=" bg-white hover:bg-[#63B3ED]">
          <Image src="/bin.svg" alt="Delete" className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
} 