import { Button } from "@nextui-org/button"
import { CardProduct } from "./CardProduct"
import Link from "next/link"


export const ExampleProduct = () => {

    return (
        <div className="flex flex-col items-center gap-4 w-full mb-12">
            <div className="flex shrink-0 gap-2 mb-4">
            {Array.from({length: 4}).map((_, i) => (
                <CardProduct key={i} />
            ))}
            </div>
            <Link href="/ProductList">
            <Button color="primary"
                    variant="shadow"
                    >
                All Products
            </Button>
            </Link>
      </div>
    )
}