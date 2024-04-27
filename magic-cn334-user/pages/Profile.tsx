import { Inter } from "next/font/google";
import { Backstep } from "./components/Backstep";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

const Profile = () => {
    return (
    <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
       <Backstep />
                <Card className="flex bg-transparent text-white w-1/2 p-4">
                     <CardHeader className="flex flex-row text-2xl font-bold justify-between">
                          <label>Edit Profile</label>
                          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
                     </CardHeader>
                     <Divider />
                     <CardBody className="flex flex-col gap-6 mt-6">
                        <div className="flex flex-row gap-4">
                          <Input placeholder="Name" />
                          <Input placeholder="LastName" />
                        </div>
                        <div>
                          <Input placeholder="Email" />
                        </div>
                        <div>
                          <Input placeholder="Password" />
                        </div>
                        <div>
                          <Input placeholder="Address" />
                        </div>
                        <div>
                          <Input placeholder="Telephone number" />
                        </div>
                        <div className="flex flex-row gap-4">
                          <Input placeholder="จังหวัด" />
                          <Input placeholder="อำเภอ" />
                        </div>
                        <div className="flex flex-row gap-4 mb-4">
                          <Input placeholder="ตำบล" />
                          <Input placeholder="รหัสไปรษณีย์" />
                        </div>
                     </CardBody>
                     <CardFooter className="flex flex-col w-full justify-normal items-end">
                        <div className="flex gap-6">
                            <Button color="warning" className="text-white w-1/2">Cancel</Button>
                            <Button color="success" className="text-white w-1/2">Confirm</Button>
                        </div>
                     </CardFooter>
                </Card>
    </main>)
}
export default Profile;