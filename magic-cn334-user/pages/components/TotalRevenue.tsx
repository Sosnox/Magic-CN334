export const TotalRevenue = (data : any) => {
    return (
        <div className="flex flex-col bg-[#2C5282] h-full rounded-xl text-xl mt-10 p-5">
            <label className="text-3xl font-bold">
                Total Revenue :
            </label>
            <label className="flex w-full h-full justify-center items-center text-8xl">
                {data.data}$
            </label>
        </div>
    )
}