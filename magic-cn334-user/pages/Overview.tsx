import { Inter } from "next/font/google";
import BarChartPage from "./components/BarChart";
import { Card, CardHeader, Link } from "@nextui-org/react";
import { List, Typography } from "@mui/material";
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import { CardDashboard } from "./components/CartDashboard";
import { Servicedb } from './components/Servicedb';
import { TotalRevenue } from "./components/TotalRevenue";
import { DashboardAmount } from './components/dashboardAmount';
import topProduct from "./api/auth/store/dashboard/get/topProduct";
import { useEffect, useState } from "react";
import GetDetail from "./api/auth/store/dashboard/get/detail";
import GetGraph from "./api/auth/store/dashboard/get/graph";
import GetRevenue from "./api/auth/store/dashboard/get/revenue";



const inter = Inter({ subsets: ["latin"] });

interface ProductById {
    id: number,
    name: string,
    description: string,
    price: number,
    category_id: number,
    element_id: number,
    left_quantity: number,
    sales_quantity: number,
    category: string,
    element: string,
    img: { img: string }[]
}

const Overview = () => {
    const [DatatopProduct, setDatatopProduct] = useState([]);
    const [Detail, setDetail] = useState([]);
    const [Graph, setGraph] = useState([])
    const [Revenue, setRevenue] = useState([])

    const fetchData = async () => {
        try {
            const top = await topProduct();
            const detail = await GetDetail()
            const grapData = await GetGraph();
            const TopRevenue = await GetRevenue();

            setRevenue(TopRevenue)
            setGraph(grapData.message)
            setDetail(detail.message)
            setDatatopProduct(top.message)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

console.log(Graph, "Graph")
console.log(Revenue, "Revenue")
    return (
        <main className={`flex min-h-screen w-full flex-col items-center px-16 ${inter.className}`}>
            <div className="flex w-full items-center mb-6">
                <label className="text-5xl font-semibold mr-5">Overview</label>
                <label className="text-xl text-[#3182CE] font-medium underline italic">Product management</label>
            </div>
            <div className="grid grid-cols-2 mx-4 w-full gap-16">
                <div className="flex justify-center items-center bg-black rounded-xl p-5 h-full">
                    {/* <BarChartPage data={Graph}/> */}
                </div>
                <div className="flex flex-col rounded-xl">
                    <Servicedb />
                    <TotalRevenue data={Revenue}/>
                </div>
            </div>
            <div className="grid grid-cols-2 mx-4 w-full gap-16 mt-14">
                <div className="flex flex-col rounded-xl">
                    <DashboardAmount detail={Detail}/>
                </div>
                <div className="flex flex-col bg-orange-400 h-full rounded-xl text-xl p-5">
                    <label className="text-3xl font-bold mb-4">
                        Total Products :
                    </label>
                    {DatatopProduct?.slice(0, 3).map((data, key) => (
                        <CardDashboard data={data} key={key} />
                    ))}
                </div>
            </div>
        </main>
    );
}
export default Overview