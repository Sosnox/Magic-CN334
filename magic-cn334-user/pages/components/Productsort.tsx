import { NavCategory } from "./navCategory"
import { Productlist } from "./Productlist"

export const Productsort = () => {
    return (
        <div className="flex flex-row w-screen justify-center">
                <div className="w-20">
                    <NavCategory />
                </div>
                <div className="w-4/5">
                    <Productlist />
                </div>
          </div>
    )
}