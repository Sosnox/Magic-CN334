import { useEffect, useState } from "react"
import { CardProduct } from "./CardProduct"


export const Productlist = ( { data } : {data : any}) => {
    console.log(data , "dataTest")

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="grid grid-cols-5 gap-5">
            {data.map((data : any , key : any) => (
                    <CardProduct key={key} data={data} />
                ))}
            </div>
      </div>
    )
}