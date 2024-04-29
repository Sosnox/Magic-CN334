import { Inter } from "next/font/google";
import { Backstep } from "../components/Backstep";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import { useState } from "react";
import { Typography } from "@mui/material";


const inter = Inter({ subsets: ["latin"] });

const ProductDetail = () => {
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
        <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
            <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Product Detail : ไม้เวทมนต์</h2>
                        <Card className="bg-transparent text-white">
                            <CardHeader>
                                <label className="text-2xl font-bold">
                                    ไม้เวทมนต์ไฟร้อนเเรง!
                                </label>
                            </CardHeader>
                            <CardBody>
                                <text>
                                    Immerse yourself in cosmic fashion. Unveil the enigmatic allure of the Nebula Noir Hoodie. Embrace its cozy and durable charm. Elevate your style to celestial heights. Get yours today!
                                </text>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <label >
                                    Element :  <br />
                                    Category :  <br />
                                    Price : <br />
                                </label>
                            </CardFooter>
                        </Card>
                        <Card className="bg-transparent text-white">
                            <CardHeader>
                                <label color="black" className="text-[#EBF8FF] text-xl font-bold">
                                    Shipping & Returns
                                </label>
                            </CardHeader>
                            <CardBody>
                                <label >
                                    🚚 Fast delivery <br />
                                    Your package will arrive in 3-5 business days at your pick up location or in the comfort of your home.
                                    <br /><br />
                                    🔁 Simple exchanges <br />
                                    Is the fit not quite right? No worries - we'll exchange your product for a new one.
                                    <br /><br />
                                    🔙 Easy returns <br />
                                    Just return your product and we'll refund your money. No questions asked – we'll do our best to make sure your return is hassle-free.
                                </label>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="container justify-center">
                        <Image
                            src="/Magic.png"
                            alt="Nebula Noir Hoodie"
                            className="object-contain w-full"
                        />
                        <div className="grid grid-flow-col gap-4 mt-4 p-4 w-1/2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Image
                                    src="/Magic.png"
                                    width={1200}
                                    alt="Magic"
                                />
                            ))}
                        </div>
                        <div className="flex flex-row w-full justify-end items-center mt-5 ">
                            <label className="text-xl">จำนวน :</label>
                            <div className="flex items-center justify-center bg-white shadow-md rounded mx-4 p-1">
                                <button
                                    onClick={decreaseQuantity}
                                    className="px-3 py-1 text-gray-500 hover:bg-gray-100 focus:outline-none"
                                >
                                    -
                                </button>
                                <span className="px-4 text-black">{quantity}</span>
                                <button
                                    onClick={increaseQuantity}
                                    className="px-3 py-1 text-gray-500 hover:bg-gray-100 focus:outline-none"
                                >
                                    +
                                </button>
                            </div>
                            <Link href="/Payment">
                                <Button className="bg-[#FF304F] text-white w-full rounded-lg mx-4 ">
                                    Add to Cart
                                </Button>
                            </Link>
                            <Link href="/Payment">
                                <Button className="bg-[#FF304F] text-white w-full rounded-lg mx-4">
                                    Have it now!
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetail