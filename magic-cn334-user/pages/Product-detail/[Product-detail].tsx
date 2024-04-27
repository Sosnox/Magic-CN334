import { Inter } from "next/font/google";
import { Backstep } from "../components/Backstep";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import { useState } from "react";


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
                        <div className="flex flex-row w-full justify-end items-center mt-5 ">
                            <Link href="/Payment">
                                <Button className="bg-[#FF304F] text-white w-full rounded-lg mr-4">
                                    Add to Cart
                                </Button>
                            </Link>
                            <Button
                                onClick={decreaseQuantity}
                                className="text-gray-500"
                            >
                                -
                            </Button>
                            <span className="mx-4">{quantity}</span>
                            <Button
                                onClick={increaseQuantity}
                                className="text-gray-500"
                            >
                                +
                            </Button>
                            <Link href="/Payment">
                                <Button className="bg-[#FF304F] text-white w-full rounded-lg ml-4">
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