import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

export const DashboardAmount = ({ detail , OrderCom , TotalSale ,Revenue }: { detail: any ,OrderCom : any , TotalSale : any , Revenue : any}) => {
    console.log(detail, "detail")
    return (
        <div className=" flex flex-col bg-[#2C5282] rounded-xl h-full text-xl p-5">
            <label className="text-3xl font-bold">Dashboard Amount : </label>
            <div className="grid grid-cols-3 justify-center my-5 h-full">
                <div className="flex flex-col bg-[#2B6CB0] mx-4 rounded-md p-2 justify-center items-center">
                    <div>
                        <label className='mx-2'><ShoppingCartOutlinedIcon /></label>
                        <label>Total Sales</label>
                    </div>
                    <div className="flex flex-col">
                        <label>{TotalSale} Order</label>
                    </div>
                </div>
                <div className="flex flex-col bg-[#2B6CB0] mx-4 rounded-md p-2 justify-center items-center">
                    <div>
                        <label className='mx-2'><ShoppingBagOutlinedIcon /></label>
                        <label>Total Made</label>
                    </div>
                    <div className="flex flex-col">
                        <label>{Revenue} $</label>
                    </div>
                </div>
                <div className="flex flex-col bg-[#2B6CB0] mx-4 rounded-md p-2 justify-center items-center">
                    <div>
                        <label><Inventory2OutlinedIcon /></label>
                        <label className='mx-2'>Orders Completed</label>
                    </div>
                    <div className="flex flex-col">
                        <label>{OrderCom} Order</label>
                    </div>
                </div>
            </div>
            <div className="text-white text-2xl flex flex-col gap-2 m-5">
                <p>User amount : {detail.user}</p>
                <p>Product amount : {detail.products}</p>
                <p>Category amount : {detail.category}</p>
                <p>Element amount : {detail.element}</p>
            </div>
        </div>
    )
}