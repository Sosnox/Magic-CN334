import { Inter } from "next/font/google";
import { Backstep } from "../components/Backstep";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import { use, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import getProductById from "../api/auth/store/get/productById";
import { fetchImage } from "../components/fetchImage";
import AddCartPost from "../api/auth/post/addCart";
import { AlertSuccess } from "../components/alertSuccess";
import { ToastContainer } from "react-toastify";


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

    const AddCart = async () => {
        try {
            const respones = await AddCartPost({
                product_id: Number(id),
                quantity: 1
              })
            if (respones.status){
                AlertSuccess("Add to Cart Success")
            }
            console.log(respones, "responesCart")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
            <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="text-4xl font-bold mb-4">Product Detail</label>
                        <Card className="bg-transparent text-white mt-5">
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
                            src={fetchImage(data.img[0].img)}
                            alt="Nebula Noir Hoodie"
                            className="object-contain w-full"
                        />
                        <div className="flex flex-row w-full justify-end items-center mt-5 ">
                            <div className="w-1/6 mx-4">
                                <Button className=" bg-[#2B6CB0] text-white w-full rounded-lg mx-4" onClick={AddCart}>
                                    Add to Cart
                                </Button>
                            </div>
                            <Link href="/Payment">
                                <Button className=" text-white w-full rounded-lg mx-4 " variant="ghost" onClick={AddCart}>
                                Have it now!
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </main>
    )
}

export default ProductDetail