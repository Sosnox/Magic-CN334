import { Inter } from "next/font/google";
import { Backstep } from "../components/Backstep";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import { use, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import getProductById from "../api/auth/store/get/productById";


const inter = Inter({ subsets: ["latin"] });
interface ProductById {
    id: number,
    name: string,
    description: string,
    price: number,
    category_id: number,
    element_id: number,
    left_quantity: number,
    sales_quantity: number,
    category: string,
    element: string,
    img: { img: string }[]
}

const ProductDetail = () => {

    const router = useRouter();
    const { id } = router.query

    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState<ProductById>({
        id: 0,
        name: "",
        description: "",
        price: 0,
        category_id: 0,
        element_id: 0,
        left_quantity: 0,
        sales_quantity: 0,
        category: "",
        element: "",
        img: [{ img: "" }]
    });

    const fetchData = async () => {
        if (typeof id === 'string') {
            try {
                const dataById = await getProductById(Number(id));
                const dataByIdDict = dataById.message[0]
                setData(dataByIdDict)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    console.log(data, "data NNNNNN")

    return (
        <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
            <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="text-2xl font-bold mb-4">Product Detail</label>
                        <Card className="bg-transparent text-white">
                            <CardHeader>
                                <label className="text-2xl font-bold">
                                {data.name}
                                </label>
                            </CardHeader>
                            <CardBody>
                                <label>
                                    {data.description}
                                </label>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <label >
                                    Element :  {data.element}<br />
                                    Category :  {data.category}<br />
                                    Price : {data.price} $<br />
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