export const DashboardAmount = ({detail} : {detail : any}) => {
    return (
        <div className=" flex flex-col bg-emerald-800 rounded-xl h-full text-xl p-5">
            <label className="text-3xl font-bold">Dashboard Amount : </label>
            <div className="grid grid-cols-3 justify-center my-5 h-full">
                <div className="flex bg-green-500 mx-4 rounded-md p-2 justify-center items-center">Total Sales</div>
                <div className="flex bg-green-500 mx-4 rounded-md p-2 justify-center items-center">Total Made</div>
                <div className="flex bg-green-500 mx-4 rounded-md p-2 justify-center items-center">Order Completed</div>
            </div>
            <div className="text-white text-2xl flex flex-col gap-2 m-5">
                <p>User amount : {detail.user}</p>
                <p>Product amount : {detail.product}</p>
                <p>Category amount : {detail.category}</p>
                <p>Element amount : {detail.element}</p>
            </div>
        </div>
    )
}