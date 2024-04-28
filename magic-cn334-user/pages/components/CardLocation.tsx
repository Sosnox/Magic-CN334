import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import { CardPayment } from "./CarPayment"
import { useState } from "react";


export const CardLocation = () => {
    const [open, setOpen] = useState(false);
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
                        <span>ปทุมธานี</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>ตำบล</span>
                        <span>คลองหนึ่ง</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>อำเภอ</span>
                        <span>คลองหลวง</span>
                    </div>
                    <div className="flex justify-between">
                        <span>รหัสไปรษณีย์</span>
                        <span>12120</span>
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
                        <span>กล้วยทอด</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>นามสกุล</span>
                        <span>เปลือกถลอก</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Email</span>
                        <span>bigbanana_verybig@gmail.com</span>
                    </div>
                    <div className="flex justify-between">
                        <span>เบอร์โทรศัพท์</span>
                        <span>099-999-9999</span>
                    </div>
            </CardBody>
            <Button color="success" className="text-white w-1/2" onClick={toggleModal}>Confirm</Button>
            <CardPayment isOpen={open} onClose={toggleModal}/>
        </Card>
    )
}