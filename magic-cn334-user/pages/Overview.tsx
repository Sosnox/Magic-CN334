import { Inter } from "next/font/google";
import BarChartPage from "./components/BarChart";
import { Card, CardHeader } from "@nextui-org/react";
import { List, Typography } from "@mui/material";


const inter = Inter({ subsets: ["latin"] });

const Overview = () => {
    return (
        <main className={`flex min-h-screen w-screen flex-col items-center ${inter.className} border-slate-400`}>
            <div className="">
                <h1 className="text-2xl">Overview</h1>
            </div>
            <div className="grid grid-cols-2 mx-4 w-full">
                <div className="bg-black">
                    <p>Today Revenue</p>
                    <p>1000</p>
                    <BarChartPage />
                </div>
                <div className="flex flex-col bg-slate-500">
                    <div className="bg-emerald-800">Service & Database
                        <div className="grid grid-cols-4 justify-center items-center mt-5">
                            <label className="flex bg-green-500 mx-4 rounded-md py-2 justify-center">Authentication</label>
                            <div className="flex bg-green-500 mx-4 rounded-md py-2 justify-center">Store</div>
                            <div className="flex bg-green-500 mx-4 rounded-md py-2 justify-center">Management</div>
                            <div className="flex bg-green-500 mx-4 rounded-md py-2 justify-center">Top Products</div>
                        </div>
                        <div>Link to 210.246.215.173:5050</div>
                    </div>
                    <div className="bg-orange-400 w-full">
                        <p>
                            Total Revenue
                        </p>
                        <p>
                            10M$
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div>
                    <div className="flex flex-row">
                        <Card>
                            <CardHeader>Total Sales</CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>Total Made</CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>Order Completed</CardHeader>
                        </Card>
                    </div>
                    <div>
                        <Typography variant="h3">Dashboard Products</Typography>
                        <List>
                            <li>User amount : </li>
                            <li>Product amount : </li>
                            <li>Review amount : </li>
                            <li>Category amount : </li>
                            <li>Product amount : </li>
                            <li>Element amount : </li>
                        </List>
                    </div>
                </div>
                <div>
                    <Typography variant="h3">Top Products</Typography>
                    <div>
                        <List>
                            <li>User amount : </li>
                            <li>Product amount : </li>
                            <li>Review amount : </li>
                            <li>Category amount : </li>
                            <li>Product amount : </li>
                            <li>Element amount : </li>
                        </List>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Overview