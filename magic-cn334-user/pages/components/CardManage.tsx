import { Image } from "@nextui-org/react"
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

export const CardManage = () => {
    return (
        <div className="flex justify-between items-center bg-slate-200 text-black w-full my-4 rounded-lg">
            <div className="flex items-center m-4 gap-5">
                <div>
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                </div>
                <div className="flex flex-col">
                    <p>Item 1</p>
                    <p>Item 1</p>
                </div>
            </div>
            <div className="m-4 flex gap-5">
                <div>
                    <p>Price</p>
                </div>
                <div>
                    <BorderColorOutlinedIcon />
                </div>
            </div>

        </div>
    )
}