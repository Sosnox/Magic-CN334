import { Button, Card, CardBody, CardHeader, Divider, Input, Select, SelectItem } from "@nextui-org/react"
import { CardPayment } from "./CarPayment"
import { useState } from "react";



export const CardAddProduct = () => {
    const [open, setOpen] = useState(false);

    const animals = [
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        { value: 'bird', label: 'Bird' },
        { value: 'rabbit', label: 'Rabbit' },
        { value: 'snake', label: 'Snake' }
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
                                items={animals}
                                label="Category"
                                placeholder="Select an animal"
                                className=""
                            >
                                {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
                            </Select>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label>Element</label>
                            <Select
                                items={animals}
                                label="Element"
                                placeholder="Select an animal"
                                className="w-full"
                            >
                                {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
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