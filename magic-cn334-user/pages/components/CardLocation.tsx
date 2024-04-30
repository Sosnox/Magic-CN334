import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { CardPayment } from "./CarPayment"
import { useEffect, useState } from "react";
import getProfileAuth from "../api/auth/get/profileAuth";
import getDeliveryAuth from "../api/auth/get/deliveryAuth";


export const CardLocation = () => {
    const [dataProfile, setDataProfile] = useState({ firstname: "", lastname: "" });
    const [delivery, setDelivery] = useState({
        detail: "",
        phone: "",
        province: "",
        district: "",
        subdistrict: "",
        zipcode: "",
    });

    const [open, setOpen] = useState(false);

    const fetchData = async () => {
        try {
            const res = await getProfileAuth();
            const dataDelivery = await getDeliveryAuth();
            setDataProfile(res.message)
            setDelivery(dataDelivery.message);
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const toggleModal = () => setOpen(!open);

    return (
        <Card className="mb-4 py-4 justify-center items-center bg-[#1A365] rounded-2xl px-4">
            <CardHeader>
                <label className="text-2xl font-bold text-white">
                    Location
                </label>
            </CardHeader>
            <Divider />
            <CardBody className="w-full text-white px-12 rounded-lg text-lg font-normal">
                <div className="flex justify-between mb-2">
                    <span>จังหวัด</span>
                    <span>{delivery.province}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>ตำบล</span>
                    <span>{delivery.subdistrict}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>อำเภอ</span>
                    <span>{delivery.district}</span>
                </div>
                <div className="flex justify-between">
                    <span>รหัสไปรษณีย์</span>
                    <span>{delivery.zipcode}</span>
                </div>
            </CardBody>
            <CardHeader>
                <label className="text-2xl font-bold text-white mt-4">
                    Profile
                </label>
            </CardHeader>
            <Divider />
            <CardBody className="w-full text-white px-12 rounded-lg text-lg font-normal mb-5">
                <div className="flex justify-between mb-2">
                    <span>ชื่อจริง</span>
                    <span>{dataProfile.firstname}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>นามสกุล</span>
                    <span>{dataProfile.lastname}</span>
                </div>
                <div className="flex justify-between">
                    <span>เบอร์โทรศัพท์</span>
                    <span>{delivery.phone}</span>
                </div>
            </CardBody>
            <Button color="success" className="text-white w-1/2" onClick={toggleModal}>Confirm</Button>
            <CardPayment isOpen={open} onClose={toggleModal} />
        </Card>
    )
}