import { useEffect, useState } from "react"
import getProduct from "../api/auth/store/dashboard/storemgmt/get/mgmtProduct"
import { Productlist } from "./Productlist"
import productByElementId from "../api/auth/store/get/productByElementId"
import { Divider, Listbox, ListboxItem, Select, SelectItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListboxWrapper";
import { Typography } from "@mui/material";
import productByCategort from "../api/auth/store/get/productByCategoryId"
import getElement from "../api/auth/store/dashboard/storemgmt/get/mgmtElement"
import getCategory from "../api/auth/store/dashboard/storemgmt/get/mgmtCategory"
import productByCategory from "../api/auth/store/get/productByCategoryId"
import getProductByElementId from "../api/auth/store/get/productByElementId";

interface element {
    id: number,
    name: string
}
interface category {
    id: number,
    name: string
}

export const Productsort = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState<category[]>([
        {
            id: 0,
            name: ""
        }
    ]);
    const [element, setElement] = useState<element[]>([
        {
            id: 0,
            name: ""
        }
    ]);
    const [selectedElement, setSelectedElement] = useState<any>("");
    const [selectedCategory, setSelectedCategory] = useState<any>("");

    const handleSelectChangeEle = (event: any) => {
        setSelectedElement(event.target.value)
    }
    const handleSelectChangeCate = (event: any) => {
        setSelectedCategory(event.target.value)
    }

    const fetchData = async () => {
        try {
            const dataAll = await getProduct()
            const dataCategory = await getCategory()
            const dataElement = await getElement()
            setData(dataAll.message)
            setElement(dataElement.message)
            setCategory(dataCategory.message)
        }
        catch (error) {
            console.error(error);
        }
    }

    const fetchDataEle = async () => {
        try {
            const dataAll = await getProductByElementId(selectedElement)
            const dataEle = dataAll.message
            setData(dataEle)
        }
        catch (error) {
            console.error(error);
        }
    }

    const fetchDataCategory = async () => {
        try {
            const dataAll = await productByCategory(selectedCategory)
            const dataCate = dataAll.message
            setData(dataCate)
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()

    }, [])

    useEffect(() => {
        fetchDataCategory()
    }, [selectedCategory])

    useEffect(() => {
        fetchDataEle()
    }, [selectedElement])

    console.log(selectedElement, "categoryProductSort")
    console.log(selectedCategory, "elementProductSort")



    console.log(data, "dataSortLeaw")

    return (
        <div className="flex flex-col justify-center ">
            <div className="flex flex-row w-full justify-end mb-8 gap-8">
                <div className="w-72">
                    <div className="justify-start w-full text-white">Sort Element</div>
                    <Select
                        items={element}
                        label=""
                        placeholder="Select an element"
                        className="max-w-xs"
                        onChange={handleSelectChangeEle}
                    >
                        {(element) => <SelectItem key={element.id} value={element.name}>{element.name}</SelectItem>}
                    </Select>
                </div>
                <div className="w-72">
                    <div className="justify-start w-full text-white">Sort Category</div>
                    <Select
                        items={category}
                        label=""
                        placeholder="Select a category"
                        className="max-w-xs"
                        onChange={handleSelectChangeCate}
                    >
                        {(category) => <SelectItem key={category.id}>{category.name}</SelectItem>}
                    </Select>
                </div>
            </div>
            <div className="w-full">
                <Productlist data={data} />
            </div>
        </div>
    )
}