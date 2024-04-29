import { CardProduct } from "./CardProduct"

export const Productlist = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="grid grid-cols-5 gap-5">
            {Array.from({length: 50}).map((_, i) => (
                <CardProduct key={i} />
            ))}
            </div>
      </div>
    )
}