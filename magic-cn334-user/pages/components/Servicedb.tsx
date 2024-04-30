import { Link } from "@nextui-org/react"
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';

export const Servicedb = () => {
    return (
        <div className=" flex flex-col bg-[#2C5282] rounded-xl h-full text-xl p-5 justify-center items-center">
            <label className="text-3xl font-bold">Service & Database</label>
            <div className="grid grid-cols-4 justify-center items-center my-5">
                <label className="flex bg-[#3182CE] mx-4 rounded-md p-2 justify-center">Authentication</label>
                <label className="flex bg-[#3182CE] mx-4 rounded-md p-2 justify-center">Store</label>
                <label className="flex bg-[#3182CE] mx-4 rounded-md p-2 justify-center">Management</label>
                <label className="flex bg-[#3182CE] mx-4 rounded-md p-2 justify-center">Top Products</label>
            </div>
            <Link className="text-white text-xl flex gap-2 m-5" href="http://210.246.215.173:5050">
                <InsertLinkOutlinedIcon />
                Link to 210.246.215.173:5050
            </Link>
        </div>
    )
}