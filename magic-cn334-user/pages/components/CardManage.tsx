import { Image } from "@nextui-org/react"
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category_id: number;
    element_id: number;
    left_quantity: number;
    sales_quantity: number;
    category: string;
    element: string;
    img: { img: string }[];
}

interface CardManageProps {
    product: Product;
}

export const CardManage: React.FC<CardManageProps> = ({ product }) => {

    const delPro = async () => {
        const formData = new FormData()
        formData.append('product_id',product.id.toString())

        try{
            const res = await fetch('http://210.246.215.173:8002/mgmt/product', {
                method: 'DELETE',
                body: formData
            });
            const resData = await res.json()
        }
        catch(error){
            throw error
        }
    }

    return (
        <div className="flex justify-between items-center bg-slate-200 text-black w-full my-4 rounded-lg">
            <div className="flex items-center m-4 gap-5">
                <div>
                    <Image src={`http://210.246.215.173:8002/static/${product.img[0].img}`} alt="logo" width={100} height={100} />
                </div>
                <div className="flex flex-col">
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="m-4 flex gap-5">
                <div>
                    <p>{product.price}</p>
                </div>
                <div className="cursor-pointer">
                    <BorderColorOutlinedIcon />
                </div>
                <div>
                    <p className="cursor-pointer">DELETE</p>
                </div>
            </div>

        </div>
    )
}