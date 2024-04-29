import { Inter } from "next/font/google";
import { Backstep } from "./components/Backstep";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Link } from "@nextui-org/react";
import { use, useEffect, useState } from "react";
import deliveryAuth from "./api/auth/post/deliveryAuth";
import profileAuth from "./api/auth/post/profileAuth";
import getProfileAuth from "./api/auth/get/profileAuth";
import getDeliveryAuth from "./api/auth/get/deliveryAuth";
import { Alert, TextField } from "@mui/material";
import { AlertSuccess } from "./components/alertSuccess";
import { AlertFail } from "./components/alertFail";
import { ToastContainer } from "react-toastify";



const inter = Inter({ subsets: ["latin"] });
interface Profile {
    firstname: string;
    lastname: string;
}

const Profile = () => {
    const [profile, setProfile] = useState({ firstname: "", lastname: "" });
    const [delivery, setDelivery] = useState({
        detail: "",
        phone: "",
        province: "",
        district: "",
        subdistrict: "",
        zipcode: "",
    });
    console.log(profile, "profile")
    console.log(delivery, "delivery")

    const fetch = async () => {
        try {
            const dataProfile = await getProfileAuth();
            const dataDelivery = await getDeliveryAuth();
            setProfile(dataProfile.message)
            setDelivery(dataDelivery.message);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetch();
    }, []);

    const submitData = async () => {
        try {
            await profileAuth(profile)
            await deliveryAuth(delivery)
            AlertSuccess("Edit Profile Success")
        }
        catch (error) {
            console.log(error)
            AlertFail("Edit Profile Fail")
        }
    }

    return (
        <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
            <Backstep />
            <Card className="container bg-transparent text-white w-1/3 p-4">
                <CardHeader className="flex flex-col text-2xl font-bold justify-between items-start">
                    <label>Edit Profile</label>
                    <Link className="text-xs underline text-slate-500" href="/EditAuthen" >Change Password & Email</Link>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-col gap-6 mt-6">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col w-full gap-2">
                            <label>First Name</label>
                            <Input
                                placeholder={profile.firstname}
                                onChange={(e) => setProfile(prevState => ({
                                    ...prevState,
                                    firstname: e.target.value,
                                }))} />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label>Last Name</label>
                            <Input placeholder={profile.lastname}
                                onChange={(e) => setProfile(prevState => ({
                                    ...prevState,
                                    lastname: e.target.value,
                                }))}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col w-full gap-2">
                            <label>Address</label>
                            <Input placeholder={delivery.detail}
                                onChange={(e) => setDelivery(prevState => ({
                                    ...prevState,
                                    detail: e.target.value,
                                }))} />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col w-full gap-2">
                            <label>Telephone</label>
                            <Input placeholder={delivery.phone}
                                onChange={(e) => setDelivery(prevState => ({
                                    ...prevState,
                                    phone: e.target.value,
                                }))} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col w-full gap-2">
                            <label>Province</label>
                            <Input placeholder={delivery.province}
                                onChange={(e) => setDelivery(prevState => ({
                                    ...prevState,
                                    province: e.target.value,
                                }))} />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label>District</label>
                            <Input placeholder={delivery.district}
                                onChange={(e) => setDelivery(prevState => ({
                                    ...prevState,
                                    district: e.target.value,
                                }))} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 mb-4">
                        <div className="flex flex-col w-full gap-2">
                            <label>Subdistrict</label>
                            <Input placeholder={delivery.subdistrict}
                                onChange={(e) => setDelivery(prevState => ({
                                    ...prevState,
                                    subdistrict: e.target.value,
                                }))} />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label>Zipcode</label>
                            <Input placeholder={delivery.zipcode}
                                onChange={(e) => setDelivery(prevState => ({
                                    ...prevState,
                                    zipcode: e.target.value,
                                }))} />
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="flex flex-col w-full justify-normal items-end">
                    <div className="flex gap-6">
                        <Button color="success" className="text-white w-1/2" onClick={submitData}>Confirm</Button>
                    </div>
                </CardFooter>
            </Card>
            <ToastContainer />
        </main>)
}
export default Profile;