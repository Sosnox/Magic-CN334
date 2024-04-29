
import { Image } from "@nextui-org/react"
import { fetchImage } from "./fetchImage"


export const CardDashboard = ({ data }: { data: any }) => {
    console.log(data, "data")
    return (
                <div className="grid grid-cols-5 bg-white rounded-lg w-full text-zinc-900 py-5 justify-between items-center px-5 font-bold text-xl my-4">
                    <div className='aspect-[2/1] overflow-hidden relative mx-2'>
                        <Image
                            src={fetchImage(data.img[0].img)} alt={'cover'}
                            className='w-full aspect-[2/1] object-fill rounded-lg'
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-2xl text-slate-600">{data.name}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl text-slate-600">Price</p>
                        <p className="">฿ {data.price}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl text-slate-600">Sale</p>
                        <p className="">฿ {data.sales_quantity * data.price}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl text-slate-600">Sale Amount</p>
                        <p className="">{data.sales_quantity} price</p>
                    </div>
                </div>
    )
}
