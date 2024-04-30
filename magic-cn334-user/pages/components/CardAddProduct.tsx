import { Button, Card, CardBody, CardHeader, Divider, Input, Select, SelectItem } from "@nextui-org/react"
import { CardPayment } from "./CarPayment"
import { useState } from "react";



export const CardAddProduct = () => {
    const [open, setOpen] = useState(false);

    const category = [
        { value: '1', label: 'Potion' },
        { value: '2', label: 'Book' },
        { value: '3', label: 'Relic' },
        { value: '4', label: 'Accesories' },
        { value: '5', label: 'Scroll' },
        { value: '6', label: 'Staff' },
        { value: '7', label: 'Stone' },
        { value: '8', label: 'Recipe' }
    ];

    const element = [
        { value: '1', label: 'Dark' },
        { value: '2', label: 'Fire' },
        { value: '3', label: 'Light' },
        { value: '4', label: 'Nature' },
        { value: '5', label: 'Time' },
        { value: '6', label: 'Water' }
    ];

    return (
        <Card className="mb-4 py-4 justify-center items-center bg-[#1A365] rounded-2xl px-4">
            <CardHeader>
                <label className="text-2xl font-bold text-white">
                    Product
                </label>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-6 mt-6">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col w-full gap-2">
                        <label>Product name</label>
                        <Input placeholder="Product name" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label>Price</label>
                        <Input placeholder="Product name" />
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center gap-4">

                        <div className="flex flex-col w-full gap-2">
                            <label>Category</label>
                            <Select
                                items={category}
                                label="Category"
                                placeholder="Select an animal"
                                className=""
                            >
                                {(category) => <SelectItem key={category.value}>{category.label}</SelectItem>}
                            </Select>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label>Element</label>
                            <Select
                                items={element}
                                label="Element"
                                placeholder="Select an animal"
                                className="w-full"
                            >
                                {(element) => <SelectItem key={element.value}>{element.label}</SelectItem>}
                            </Select>
                        </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col w-full gap-2">
                        <label>Detail Product</label>
                        <Input placeholder="Product name" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label>left_quantity</label>
                        <Input placeholder="Product name" />
                    </div>
                </div>
            </CardBody>
            <Button color="success" className="text-white w-1/2 mt-6">Confirm</Button>
        </Card>
    )
}